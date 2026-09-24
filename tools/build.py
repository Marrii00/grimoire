import json, re, os, sys
from PIL import Image, ImageOps
HERE=os.path.dirname(os.path.abspath(__file__))
SC=sys.argv[1] if len(sys.argv)>1 else HERE   # dossier de travail : candidates.json, picks.json, meta.json, img/
DOCS=sys.argv[2] if len(sys.argv)>2 else os.path.join(os.path.dirname(HERE),"docs")
TPL=HERE if os.path.exists(os.path.join(HERE,"template.html")) else SC
res=json.load(open(f"{SC}/candidates.json"))
PICKS=json.load(open(f"{SC}/picks.json"))
META=json.load(open(f"{SC}/meta.json"))
LIC={"Public domain":"domaine public","CC0":"CC0","CC BY 2.0":"CC BY 2.0","CC BY 3.0":"CC BY 3.0","CC BY 4.0":"CC BY 4.0","CC BY-SA 2.0":"CC BY-SA 2.0","CC BY-SA 2.5":"CC BY-SA 2.5","CC BY-SA 3.0":"CC BY-SA 3.0","CC BY-SA 4.0":"CC BY-SA 4.0"}
def clean_title(t):
    t=t.split(":",1)[1]; t=re.sub(r"\.(jpe?g|png)$","",t,flags=re.I)
    t=re.sub(r"\s*-\s*Google Art Project|\s*-\s*WGA\d+|\(cropped\)|\bRTNX\b|RetinexFilter","",t)
    t=re.sub(r"\s+"," ",t).strip(" -_")
    return t
os.makedirs(f"{DOCS}/img",exist_ok=True)
images={}
def process(key,idx,out,maxw,quality=82,mk=None):
    c=res[key][idx]; src=c["file"]
    im=ImageOps.exif_transpose(Image.open(f"{SC}/{src}")).convert("RGB")
    if im.width>maxw: im=im.resize((maxw,round(im.height*maxw/im.width)),Image.LANCZOS)
    im.save(f"{DOCS}/{out}",quality=quality,optimize=True,progressive=True)
    m=META.get(mk or key,{})
    fit={"fit":1} if im.width/im.height>1.12 else {}
    return {**fit,"f":out,"t":m.get("t") or clean_title(c["title"]),"a":m.get("a") or c.get("artist",""),"y":m.get("y",""),"l":LIC.get(c.get("license",""),c.get("license","")),"u":c["desc"],**({"pos":m["pos"]} if m.get("pos") else {})}
for key,idx in PICKS.items():
    if key=="hero": continue
    src=key
    if isinstance(idx,list): src,idx=idx
    images[key]=process(src,idx,f"img/{key}.jpg",720,79,key)
if "hero" in PICKS:
    hk,hi=PICKS["hero"]; hero=process(hk,hi,"img/hero.jpg",1600,78); hero.update(META.get("hero",{})); images["hero"]=hero
tpl=open(f"{TPL}/template.html").read()
tpl=tpl.replace("/*__DATA__*/",open(f"{TPL}/part_data.js").read().rstrip())
tpl=tpl.replace("/*__PORTRAIT__*/",open(f"{TPL}/part_portrait.js").read().rstrip())
tpl=tpl.replace("/*__IMAGES__*/","const IMAGES="+json.dumps(images,ensure_ascii=False)+";")
tpl=tpl.replace("/*__HERO__*/",'<img src="img/hero.jpg" alt="">' if "hero" in images else "")
open(f"{DOCS}/index.html","w").write(tpl)
tot=sum(os.path.getsize(f"{DOCS}/img/{f}") for f in os.listdir(f"{DOCS}/img"))
print(f"images: {len(images)} · dossier img: {tot/1e6:.1f} Mo · index.html: {os.path.getsize(DOCS+'/index.html')//1024} Ko")
