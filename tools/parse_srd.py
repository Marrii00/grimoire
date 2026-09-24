import pymupdf, re, json, sys
doc=pymupdf.open("FR_SRD_5.2.1.pdf")
def lines_of(pno,split_cols=True):
    """Lignes ordonnées (col, baseline, spans) d'une page 1-based, sans en-tête ni pied de page."""
    d=doc[pno-1].get_text("dict"); spans=[]
    for b in d["blocks"]:
        for l in b.get("lines",[]):
            for s in l["spans"]:
                if not s["text"].strip(): continue
                x0,y=s["bbox"][0],s["origin"][1]
                if y>735 or y<15: continue
                spans.append(((0 if x0<300 else 1) if split_cols else 0,y,x0,s))
    spans.sort(key=lambda r:(r[0],r[1],r[2]))
    rows=[]
    for col,y,x0,s in spans:
        if rows and rows[-1][0]==col and abs(rows[-1][1]-y)<=5: rows[-1][2].append(s)
        else: rows.append([col,y,[s]])
    for r in rows: r[2].sort(key=lambda s:s["bbox"][0])
    return rows
def txt(spans):
    # colonnes de table : espaces larges entre spans -> séparateur
    out=""; prev=None
    for s in spans:
        t=s["text"].replace("\xa0"," ")
        if prev is not None and s["bbox"][0]-prev["bbox"][2]>18 and s["font"].startswith("GillSans"): out+=" · "
        out+=t; prev=s
    return re.sub(r"[ ]+"," ",out).strip()
def dom(spans): return max(spans,key=lambda s:len(s["text"].strip()))
def kind(spans):
    f0=spans[0]["font"]; sz0=round(spans[0]["size"],1)
    if f0=="GillSans-SemiBold" and sz0<=9.6 and ":" in spans[0]["text"]: return "label"
    s=dom(spans); f=s["font"]; sz=round(s["size"],1)
    if f=="GillSans-SemiBold" and sz>=13: return "heading"
    if f=="GillSans-SemiBold" and sz>=11.5: return "name"
    if f.startswith("Cambria-Italic") and 9.8<=sz<=10.5: return "sub"
    if f=="GillSans-SemiBold" and sz<=9.6: return "label"
    if f=="GillSans" and sz<=9.6: return "value"
    if f.startswith("Cambria"): return "body"
    return "other"
def join_lines(ls):
    out=""
    for t in ls:
        if out.endswith("-") and t[:1].islower(): out=out[:-1]+t
        else: out=(out+" "+t) if out else t
    return re.sub(r"\s+"," ",out).strip()
def parse_entries(p_from,p_to,fields,start_after=None,stop_at=None):
    entries=[]; cur=None; last=None; buf=[]; started=start_after is None; prevx=None
    def flush():
        nonlocal buf
        if cur is not None and buf: cur["desc"].append(join_lines(buf)); buf=[]
    for pno in range(p_from,p_to+1):
        for col,y,spans in lines_of(pno):
            k=kind(spans); t=txt(spans); x0=spans[0]["bbox"][0]; f0=dom(spans)["font"]
            if k=="heading":
                if stop_at and started and t.startswith(stop_at): flush(); return entries
                if start_after and t.startswith(start_after): started=True; continue
                continue
            if not started: continue
            if k=="name":
                flush(); prevx=None
                if cur and last=="name": cur["nom"]+=" "+t; continue
                cur={"nom":t,"sub":"","desc":[],"page":pno}; entries.append(cur); last="name"; continue
            if cur is None: continue
            if k=="sub" and last in ("name","sub"):
                cur["sub"]=(cur["sub"]+" "+t).strip(); last="sub"; continue
            if k=="label" and ":" in t:
                lab=t.split(":")[0].strip(); key=fields.get(lab)
                if key:
                    flush(); cur[key]=t.split(":",1)[1].strip(); last="field:"+key; continue
            if k=="value" and last and last.startswith("field:"):
                key=last.split(":")[1]; cur[key]=(cur[key]+" "+t).strip(); continue
            bold=spans[0]["font"].startswith("Cambria-Bold")
            ended=bool(buf) and buf[-1].rstrip().endswith(('.', ':', '!', '?', '»', ')'))
            istable=k in ("label","value")
            newpara=bold or (buf and prevx is not None and x0>prevx+5 and ended and not t.startswith("·")) or (istable and buf and (last!="table" or " · " in t)) or (not istable and last=="table")
            if newpara: flush()
            if bold and not buf:
                head=spans[0]["text"].replace("\xa0"," ").strip()
                rest=t[len(spans[0]["text"].replace("\xa0"," ").strip()):].strip()
                t="**"+head+"** "+rest
            buf.append(t); prevx=x0; last="table" if k in ("label","value") else "body"
    flush(); return entries
SPELL_FIELDS={"Temps d’incantation":"temps","Portée":"portee","Composantes":"composantes","Durée":"duree"}
def parse_table(pno,cols,y_from=0,y_to=800):
    """cols: liste de (nom, x_min) triée; renvoie lignes dict + catégories (italique)."""
    rows=[]; cat=None
    for col,y,spans in lines_of(pno,split_cols=False):
        if not (y_from<=y<=y_to): continue
        f=spans[0]["font"]
        if f=="GillSans-Italic": cat=txt(spans); continue
        if f!="GillSans": continue
        cells={}
        for sp in spans:
            x=sp["bbox"][0]; name=None
            for cname,xmin in cols:
                if x>=xmin-6: name=cname
            if name: cells[name]=(cells.get(name,"")+" "+sp["text"].replace("\xa0"," ")).strip()
        if "nom" in cells: rows.append({"cat":cat,**cells})
        elif rows:  # ligne de continuation (propriétés qui débordent)
            for k,v in cells.items(): rows[-1][k]=(rows[-1].get(k,"")+" "+v).strip()
    return rows
if __name__=="__main__":
    out={}
    sp=parse_entries(114,187,SPELL_FIELDS,start_after="Description des sorts",stop_at="Glossaire")
    print("sorts:",len(sp),"incomplets:",len([x for x in sp if not x.get("temps") or not x["sub"]]))
    out["sorts"]=sp
    it=parse_entries(220,266,{},start_after="Objets magiques de A à Z",stop_at="Monstres")
    print("objets magiques:",len(it),"sans sous-titre:",len([x for x in it if not x["sub"]]))
    out["objets"]=it
    W=parse_table(97,[("nom",60),("degats",145),("proprietes",222),("botte",418),("poids",488),("prix",524)])
    print("armes:",len(W),"|",W[1]); 
    A=parse_table(98,[("nom",60),("ca",135),("force",295),("discretion",375),("poids",435),("prix",515)],y_from=300)
    print("armures:",len(A),"|",A[1],"|",A[-1])
    out["armes"]=W; out["armures"]=A
    TOOL_FIELDS={"Caractéristique":"carac","Poids":"poids","Utilisation":"utilisation","Artisanat":"artisanat"}
    tools=parse_entries(99,100,TOOL_FIELDS,start_after="Outils",stop_at="Matériel d’aventurier")
    for t in tools:
        c=t.get("carac","")
        if "Poids" in c: t["carac"],t["poids"]=[x.strip(" :\t") for x in c.split("Poids",1)]
    print("outils:",len(tools),"|",tools[0])
    out["outils"]=tools
    gear=parse_entries(100,106,{},start_after="Matériel d’aventurier",stop_at="Montures")
    print("matériel:",len(gear),"|",gear[0]["nom"],"…",gear[-1]["nom"])
    out["materiel"]=gear
    props=parse_entries(95,96,{},start_after="Propriétés",stop_at="Propriétés botte")
    mast=parse_entries(96,96,{},start_after="Propriétés botte")
    print("propriétés:",[p["nom"] for p in props]); print("bottes:",[p["nom"] for p in mast])
    out["proprietes"]=props; out["bottes"]=mast
    M1=parse_table(107,[("nom",60),("charge",150),("prix",240)],y_from=60,y_to=200)
    M2=parse_table(107,[("nom",60),("poids",200),("prix",255)],y_from=220,y_to=500)
    print("montures:",len(M1),"| harnachement:",len(M2),M2[:2])
    out["montures"]=M1; out["harnachement"]=M2
    bg=parse_entries(87,87,{},start_after="Historiques de personnage",stop_at="Espèces")
    print("historiques:",[b["nom"] for b in bg]); out["historiques"]=bg
    feats=parse_entries(92,94,{},start_after="Description des dons",stop_at="Équipement")
    print("dons:",len(feats),[f["nom"] for f in feats][:8]); out["dons"]=feats
    json.dump(out,open("srd_fr.json","w"),ensure_ascii=False,indent=1)
    print("écrit srd_fr.json")
