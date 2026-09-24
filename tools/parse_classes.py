import pymupdf, re, json
from parse_srd import txt
doc=pymupdf.open("FR_SRD_5.2.1.pdf")
START={"barbare":30,"barde":33,"clerc":38,"druide":43,"ensorceleur":49,"guerrier":56,"magicien":58,"moine":65,"occultiste":68,"paladin":75,"rodeur":80,"roublard":84}
def spans_of(pno):
    d=doc[pno-1].get_text("dict"); out=[]
    for b in d["blocks"]:
        for l in b.get("lines",[]):
            for s in l["spans"]:
                if s["text"].strip() and 15<s["origin"][1]<735: out.append(s)
    return out
def rows_by_y(spans,tol=3):
    spans=sorted(spans,key=lambda s:(s["origin"][1],s["bbox"][0])); rows=[]
    for s in spans:
        if rows and abs(rows[-1][0]-s["origin"][1])<=tol: rows[-1][1].append(s)
        else: rows.append([s["origin"][1],[s]])
    for r in rows: r[1].sort(key=lambda s:s["bbox"][0])
    return rows
LABELS=["Caractéristique principale","Dé de vie","Maîtrise des jets de sauvegarde","Maîtrises de compétence","Maîtrises d’arme","Maîtrises d’outils","Formation aux armures","Équipement de départ"]
def core_traits(pno):
    for p in (pno,pno+1):
        sp=[s for s in spans_of(p) if s["font"].startswith("GillSans") and s["size"]<11]
        title=next((s for s in sp if "Traits de base" in s["text"]),None)
        if not title: continue
        colx=0 if title["bbox"][0]<300 else 300
        sp=[s for s in sp if colx<=s["bbox"][0]<colx+300 and s["origin"][1]>title["origin"][1]]
        rows=rows_by_y(sp); groups=[]
        for y,spans in rows:
            if any("Aptitudes d" in s["text"] and s["size"]>10 for s in spans): break
            lab=[s for s in spans if "SemiBold" in s["font"] and s["bbox"][0]<colx+80]
            val=[s for s in spans if s["bbox"][0]>=colx+80]
            newlab=bool(lab) and any(txt(lab).strip().startswith(L[:9]) for L in LABELS)
            if newlab: groups.append([txt(lab),txt(val) if val else ""])
            else:
                if lab and groups: groups[-1][0]+=" "+txt(lab)
                if val and groups: groups[-1][1]+=" "+txt(val)
        out={}
        for k,v in groups:
            k=re.sub(r"\s+"," ",k).strip(); v=re.sub(r"\s+"," ",v).strip(); v=re.sub(r"([a-zéèêàùç])- ([a-zéèêàùç])",r"\1\2",v)
            key=next((L for L in sorted(LABELS,key=len,reverse=True) if k.startswith(L)),k); out[key]=v
        return out
    return None
def progression(pno):
    out=[]; cols=None; aptcol=None
    for p in (pno,pno+1,pno+2):
        sp=[s for s in spans_of(p) if s["font"].startswith("GillSans") and s["size"]<11]
        rows=rows_by_y(sp); i=0
        if cols is None:
            i=next((k for k,r in enumerate(rows) if re.match(r"Aptitudes d",txt(r[1])) and r[1][0]["size"]>10),None)
            if i is None: continue
            i+=1; hdr=[]
            while i<len(rows) and all("SemiBold" in s["font"] for s in rows[i][1]): hdr+=rows[i][1]; i+=1
            cols=[]
            for s in sorted(hdr,key=lambda s:(s["origin"][1],s["bbox"][0])):
                if "Emplacements" in s["text"] or (s["bbox"][2]-s["bbox"][0])>110: continue   # titre de groupe
                cx=(s["bbox"][0]+s["bbox"][2])/2
                for c in cols:
                    if abs(c["x"]-cx)<14: c["t"]+=" "+s["text"].strip(); c["x"]=(c["x"]+cx)/2; break
                else: cols.append({"x":cx,"x0":s["bbox"][0],"t":s["text"].strip()})
            cols.sort(key=lambda c:c["x"])
            for c in cols: c["t"]=re.sub(r"\s+"," ",c["t"]).replace("\xa0"," ").replace("- ","")
            aptcol=next((k for k,c in enumerate(cols) if c["t"].startswith("Aptitudes")),2)
        for y,spans in rows[i:]:
            t0=spans[0]["text"].strip()
            if re.fullmatch(r"\d{1,2}",t0) and len(out)<20:
                cells=[""]*len(cols)
                for s in spans:
                    cx=(s["bbox"][0]+s["bbox"][2])/2; x0=s["bbox"][0]
                    if abs(x0-cols[aptcol]["x0"])<6: k=aptcol
                    else: k=min(range(len(cols)),key=lambda k:abs(cols[k]["x"]-cx))
                    cells[k]=(cells[k]+" "+s["text"].replace("\xa0"," ")).strip()
                out.append(dict(zip([c["t"] for c in cols],cells)))
            elif out and len(out)<20 and abs(spans[0]["bbox"][0]-cols[aptcol]["x0"])<6 and len(spans)==1:
                key=cols[aptcol]["t"]; out[-1][key]=(out[-1][key]+" "+txt(spans)).strip()
            elif len(out)>=20: break
        if len(out)>=20: break
    return [c["t"] for c in cols] if cols else None, out
res={}
for cls,p in START.items():
    ct=core_traits(p); h,prog=progression(p)
    res[cls]={"traits":ct,"colonnes":h,"progression":prog}
    print(f"== {cls}: {list((ct or {}).keys())}")
    for k,v in (ct or {}).items(): print("    ",k,"=",v[:110])
    print("   colonnes:",h); print("   niv1:",prog[0] if prog else None); print("   niv3:",prog[2] if len(prog)>2 else None)
json.dump(res,open("classes_fr.json","w"),ensure_ascii=False,indent=1)
