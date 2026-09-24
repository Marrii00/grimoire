#!/usr/bin/env python3
"""Injecte les données du SRD (tools/data/srd_norm.json) dans les gabarits tools/pages/*.html -> docs/*.html.
Marqueur dans un gabarit : /*__DATA:sorts,objets__*/  -> const DATA={"sorts":[...],"objets":[...]};
Marqueur /*__ALL__*/ -> const DATA={...toutes les clés...};
"""
import json, os, re, sys
HERE=os.path.dirname(os.path.abspath(__file__)); ROOT=os.path.dirname(HERE)
data=json.load(open(os.path.join(HERE,"data","srd_norm.json")))
extra={}
if os.path.exists(os.path.join(HERE,"data","creation.json")): extra=json.load(open(os.path.join(HERE,"data","creation.json")))
pages=sys.argv[1:] or [f for f in os.listdir(os.path.join(HERE,"pages")) if f.endswith(".html")]
for f in pages:
    src=open(os.path.join(HERE,"pages",f)).read()
    def repl(m):
        keys=[k.strip() for k in m.group(1).split(",")]
        sub={k:(extra[k] if k in extra else data.get(k)) for k in keys}
        return "const DATA="+json.dumps(sub,ensure_ascii=False,separators=(",",":"))+";"
    out=re.sub(r"/\*__DATA:([^*]+)__\*/",repl,src)
    out=re.sub(r"/\*__FILE:([^*]+)__\*/",lambda m: open(os.path.join(HERE,m.group(1).strip())).read(),out)
    out=out.replace("/*__ALL__*/","const DATA="+json.dumps({**data,**extra},ensure_ascii=False,separators=(",",":"))+";")
    dst=os.path.join(ROOT,"docs",f); open(dst,"w").write(out)
    print(f"{f}: {os.path.getsize(dst)//1024} Ko")
