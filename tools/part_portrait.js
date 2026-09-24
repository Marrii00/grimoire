const ICONS={
barbare:"M14 3l7 7-4 1-3-3-1-4zM13 8L3 18l3 3L16 11",
barde:"M7 4c-2 3-2 8 1 11h8c3-3 3-8 1-11M9 7v8M12 6v9M15 7v8M8 15l-1 5h10l-1-5",
clerc:"M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2",
druide:"M5 19C5 10 11 4 20 4c0 9-6 15-15 15zM5 19l9-9",
guerrier:"M14 3h7v7L10 21l-3-3L18 7M5 16l3 3M3 21l3-3",
moine:"M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 3a4.5 4.5 0 0 1 0 9 4.5 4.5 0 0 0 0 9",
paladin:"M12 3l8 3v6c0 5-4 8-8 9-4-1-8-4-8-9V6zM12 8v8M9 11h6",
rodeur:"M6 3c8 3 8 15 0 18M6 3v18M4 12h16M17 9l3 3-3 3",
roublard:"M12 2l2 10h-4zM7 12h10M12 12v6M12 18a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6",
ensorceleur:"M12 3c1 4 6 6 6 11a6 6 0 0 1-12 0c0-3 2-4 3-6 1 2 2 3 3 3 0-3-1-5 0-8z",
occultiste:"M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12zM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z",
magicien:"M4 5c3-1 6-1 8 1v14c-2-2-5-2-8-1zM20 5c-3-1-6-1-8 1v14c2-2 5-2 8-1z"};
const sigil=(id,big)=>`<span class="sigil${big?' big':''}" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="${ICONS[id]}"/></svg></span>`;
const P={
aasimar:{skin:"#e9c9a8",hair:"#f1d27a",hs:"long",ears:"human",eyes:"#ffe9a3",glow:1,x:["halo"],cloak:"#e6e1d3"},
drakeide:{skin:"#b8742f",face:"snout",horns:"back",eyes:"#ffd23f",slit:1,x:["scales"],cloak:"#6b2f25",hs:"none"},
nain:{skin:"#d9a37e",hair:"#8a3b1c",hs:"short",ears:"human",beard:"#8a3b1c",hw:23,cloak:"#4b5563"},
elfe:{skin:"#f0d2b4",hair:"#e8e0c8",hs:"long",ears:"long",eyes:"#3aa37a",hw:18,cloak:"#2f6b4f"},
gnome:{skin:"#e6b48c",hair:"#e85d2a",hs:"wild",ears:"pointed",eyes:"#3b82c4",nose:"big",cloak:"#7c5a2e"},
goliath:{skin:"#9aa3ab",hs:"none",ears:"human",x:["marks"],hw:23,cloak:"#5a4632"},
halfelin:{skin:"#e8b98f",hair:"#6b3f1f",hs:"curly",ears:"pointed",hw:21,cloak:"#5f7d3a"},
humain:{skin:"#c68c62",hair:"#2b1b12",hs:"short",ears:"human",cloak:"#2f4a6b"},
orc:{skin:"#7c9460",hair:"#1f1f1f",hs:"topknot",ears:"pointed",tusks:1,hw:22,cloak:"#5b3a29"},
tieffelin:{skin:"#b0413e",hair:"#2a1630",hs:"long",ears:"pointed",horns:"curve",eyes:"#ffcf3f",glow:1,cloak:"#3b2346"},
changelin:{skin:"#dcdde0",hair:"#f4f4f4",hs:"short",ears:"human",eyes:"#f4f7fb",blank:1,cloak:"#4b4f58"},
kalashtar:{skin:"#c79a78",hair:"#1d1d2b",hs:"long",ears:"human",eyes:"#9fd3ff",glow:1,x:["third"],cloak:"#3c4f8a"},
khoravar:{skin:"#e2b891",hair:"#5a3824",hs:"long",ears:"pointed",eyes:"#4f9d69",cloak:"#7a3b3b"},
changeforme:{skin:"#c9936a",hair:"#7a5431",hs:"wild",ears:"pointed",eyes:"#e0a526",slit:1,x:["sideburns"],fangs:1,cloak:"#4a5d3a"},
forgelier:{skin:"#8b8f94",hs:"none",ears:"none",eyes:"#6fd3ff",glow:1,x:["plates"],hw:21,cloak:"#6b4a2b",mouth:"none"},
dhampir:{skin:"#e8dfe0",hair:"#141018",hs:"long",ears:"pointed",eyes:"#d02c3c",glow:1,fangs:1,cloak:"#541b2a"},
hexblood:{skin:"#9fb59a",hair:"#3d5e3a",hs:"wild",ears:"pointed",eyes:"#c7ff6b",glow:1,x:["leaves"],cloak:"#3b2c4a"},
lupin:{skin:"#8a8d93",face:"wolf",ears:"wolf",eyes:"#f0b429",slit:1,hs:"none",fur:"#b9bcc2",cloak:"#3a3f47"},
reborn:{skin:"#b9bfb2",hair:"#3a3a3a",hs:"short",ears:"human",eyes:"#e6f0d8",blank:1,x:["stitch"],cloak:"#2f2f36"},
aarakocra:{skin:"#b8452e",face:"beak",beakc:"#e8b23a",ears:"none",hs:"none",x:["crest"],eyes:"#1a1a1a",cloak:"#7a6a4a"},
gobelours:{skin:"#8d5a3b",hair:"#5b3822",hs:"wild",ears:"pointed",tusks:1,nose:"big",hw:23,cloak:"#3f3a2c"},
centaure:{skin:"#c98d5f",hair:"#3b2616",hs:"long",ears:"human",cloak:"#8a5a33",x:["laurel"]},
"gnome-des-profondeurs":{skin:"#8f8f96",hs:"none",ears:"pointed",nose:"big",eyes:"#cfd3da",cloak:"#3f3a4a"},
duergar:{skin:"#8a8c93",hs:"none",ears:"human",beard:"#cfcfd4",eyes:"#e04e3a",glow:1,hw:23,cloak:"#2b2b33"},
eladrin:{skin:"#f2d6bd",hair:"#d9621e",hs:"long",ears:"long",eyes:"#e8a33a",glow:1,hw:18,cloak:"#9a3d1c",x:["leaves"]},
fee:{skin:"#f3d7e0",hair:"#b98be0",hs:"curly",ears:"pointed",eyes:"#6b3fa0",x:["wings","flower"],cloak:"#8fc7a8"},
firbolg:{skin:"#8fa3c2",hair:"#c96d3a",hs:"long",ears:"droop",nose:"pink",beard:"#c96d3a",hw:22,cloak:"#5e7a3c"},
genasi:{skin:"#d4583a",hair:"#ffb238",hs:"flame",ears:"human",eyes:"#ffe08a",glow:1,cloak:"#5a2418"},
githyanki:{skin:"#b8c46a",hair:"#1f1f1f",hs:"topknot",ears:"swept",eyes:"#2a2a2a",nose:"flat",hw:18,cloak:"#6b2b2b"},
githzerai:{skin:"#c9c77a",hs:"none",ears:"swept",eyes:"#2a2a2a",nose:"flat",x:["braid"],hair:"#2a2a2a",hw:18,cloak:"#c0a36a"},
gobelin:{skin:"#8fae4f",hair:"#2b2b2b",hs:"mohawk",ears:"big",nose:"big",eyes:"#e8c23a",tusks:0,fangs:1,hw:19,cloak:"#6b4a2e"},
lievrin:{skin:"#e8dccb",face:"rabbit",ears:"rabbit",hs:"none",eyes:"#3a2a1a",cloak:"#6f8f4a"},
hobgobelin:{skin:"#d0703e",hair:"#1e1e1e",hs:"short",ears:"pointed",nose:"flat",eyes:"#e8c23a",cloak:"#7a1f1f"},
kenku:{skin:"#2c2c34",face:"beak",beakc:"#555",ears:"none",hs:"none",eyes:"#e6e6e6",x:["crest"],cloak:"#4a3f5a"},
kobold:{skin:"#b0492f",face:"snout",horns:"small",eyes:"#ffd23f",slit:1,hs:"none",ears:"none",hw:18,cloak:"#6b5a3a"},
"homme-lezard":{skin:"#5f8a4a",face:"snout",hs:"none",ears:"none",eyes:"#e6d23a",slit:1,x:["frill","scales"],cloak:"#6b5236"},
minotaure:{skin:"#6b4a33",face:"bull",horns:"bull",ears:"droop",hs:"none",hw:23,cloak:"#5a2e22"},
satyre:{skin:"#d9a07a",hair:"#5b3a22",hs:"curly",ears:"goat",horns:"ram",eyes:"#8a5a1a",cloak:"#5f7d3a"},
"elfe-de-mer":{skin:"#8fc4c2",hair:"#1f5f7a",hs:"long",ears:"fin",eyes:"#1f6f8a",hw:18,cloak:"#2e5e7a"},
"shadar-kai":{skin:"#b8bcc4",hair:"#0f0f14",hs:"long",ears:"long",eyes:"#e8e8ee",blank:1,hw:18,cloak:"#1f1f28"},
tabaxi:{skin:"#d99a4a",face:"cat",ears:"cat",hs:"none",eyes:"#6ec66a",slit:1,x:["whiskers","stripes"],cloak:"#5a3f6b"},
tortue:{skin:"#7c9a5a",face:"turtle",ears:"none",hs:"none",eyes:"#2a2a2a",x:["shell"],hw:21,cloak:"#8a6a3a"},
triton:{skin:"#7fa7d6",hair:"#1e4f8f",hs:"long",ears:"fin",eyes:"#e8f4ff",cloak:"#2a6f7a"},
"yuan-ti":{skin:"#7fa35a",hair:"#1f2a1a",hs:"none",ears:"none",eyes:"#f0d23a",slit:1,x:["scales","hood"],fangs:1,cloak:"#3a2a1a"},
"demi-elfe":{skin:"#e6c09a",hair:"#8a5a2b",hs:"long",ears:"pointed",eyes:"#3a7ab8",cloak:"#4a3a6b"},
"demi-orc":{skin:"#a0a87a",hair:"#2a2218",hs:"short",ears:"pointed",tusks:1,hw:22,cloak:"#4a3a2a"}
};
function dk(h,a){const n=parseInt(h.slice(1),16);let r=n>>16,g=n>>8&255,b=n&255;const f=c=>Math.max(0,Math.min(255,Math.round(c*(1+a))));return '#'+[f(r),f(g),f(b)].map(v=>v.toString(16).padStart(2,'0')).join('')}
function portrait(id){
  const s=P[id]; if(!s)return '';
  const rx=s.hw||20, ry=24, cx=60, cy=56, top=cy-ry, sk=s.skin, sd=dk(sk,-.25), hair=s.hair||sd;
  const L=cx-rx,R=cx+rx; let o='';
  const x=s.x||[];
  // background
  o+=`<rect width="120" height="120" fill="${dk(s.cloak,-.45)}"/>`;
  o+=`<circle cx="60" cy="44" r="44" fill="${dk(s.cloak,.25)}" opacity=".45"/>`;
  if(x.includes('wings'))o+=`<ellipse cx="30" cy="66" rx="16" ry="30" transform="rotate(-25 30 66)" fill="#e8f4ff" opacity=".75" stroke="#b9d4ea"/><ellipse cx="90" cy="66" rx="16" ry="30" transform="rotate(25 90 66)" fill="#e8f4ff" opacity=".75" stroke="#b9d4ea"/>`;
  if(x.includes('shell'))o+=`<ellipse cx="60" cy="112" rx="50" ry="34" fill="#7a5a32" stroke="#4e3920" stroke-width="2"/><path d="M40 92l20-8 20 8M30 110l10-18M90 110l-10-18" stroke="#4e3920" stroke-width="2" fill="none"/>`;
  if(x.includes('hood'))o+=`<ellipse cx="60" cy="58" rx="${rx+16}" ry="34" fill="${sd}"/><ellipse cx="60" cy="60" rx="${rx+10}" ry="28" fill="${dk(sk,.15)}"/>`;
  if(s.hs==='long')o+=`<path d="M${L-6} ${cy} Q${L-8} ${top-6} 60 ${top-6} Q${R+8} ${top-6} ${R+6} ${cy} L${R+8} 96 L${L-8} 96Z" fill="${hair}"/>`;
  // shoulders + neck
  o+=`<path d="M14 122 C18 94 40 86 60 86 C80 86 102 94 106 122Z" fill="${s.cloak}"/><path d="M34 122 C38 100 48 92 60 92 C72 92 82 100 86 122" fill="${dk(s.cloak,-.2)}" opacity=".5"/>`;
  o+=`<rect x="${60-9}" y="${cy+10}" width="18" height="${92-cy-8}" fill="${sd}"/>`;
  if(s.horns==='back')o+=`<path d="M${L+4} ${top+10} L${L-12} ${top-8} L${L+10} ${top+4}Z M${R-4} ${top+10} L${R+12} ${top-8} L${R-10} ${top+4}Z" fill="#e8dcc0" stroke="#a8977a"/>`;
  if(s.horns==='bull')o+=`<path d="M${L+2} ${top+10} Q${L-22} ${top+4} ${L-16} ${top-18} Q${L-10} ${top} ${L+8} ${top+2}Z M${R-2} ${top+10} Q${R+22} ${top+4} ${R+16} ${top-18} Q${R+10} ${top} ${R-8} ${top+2}Z" fill="#efe4cf" stroke="#b3a386"/>`;
  // ears
  const e=s.ears, ey=cy+2;
  const ear=(pl,pr)=>`<path d="${pl}" fill="${sk}" stroke="${sd}"/><path d="${pr}" fill="${sk}" stroke="${sd}"/>`;
  if(e==='human')o+=`<ellipse cx="${L}" cy="${ey}" rx="4" ry="6" fill="${sk}" stroke="${sd}"/><ellipse cx="${R}" cy="${ey}" rx="4" ry="6" fill="${sk}" stroke="${sd}"/>`;
  if(e==='pointed')o+=ear(`M${L+2} ${ey-4} L${L-10} ${ey-12} L${L+1} ${ey+6}Z`,`M${R-2} ${ey-4} L${R+10} ${ey-12} L${R-1} ${ey+6}Z`);
  if(e==='long'||e==='swept')o+=ear(`M${L+2} ${ey-3} L${L-18} ${ey-(e==='long'?20:6)} L${L+1} ${ey+6}Z`,`M${R-2} ${ey-3} L${R+18} ${ey-(e==='long'?20:6)} L${R-1} ${ey+6}Z`);
  if(e==='big')o+=ear(`M${L+2} ${ey-6} L${L-20} ${ey-10} L${L+1} ${ey+8}Z`,`M${R-2} ${ey-6} L${R+20} ${ey-10} L${R-1} ${ey+8}Z`);
  if(e==='fin')o+=ear(`M${L+2} ${ey-8} L${L-12} ${ey-14} L${L-8} ${ey-4} L${L-12} ${ey+4} L${L+1} ${ey+6}Z`,`M${R-2} ${ey-8} L${R+12} ${ey-14} L${R+8} ${ey-4} L${R+12} ${ey+4} L${R-1} ${ey+6}Z`);
  if(e==='droop'||e==='goat')o+=`<ellipse cx="${L-6}" cy="${ey-2}" rx="10" ry="4.5" transform="rotate(${e==='goat'?-20:20} ${L-6} ${ey-2})" fill="${sk}" stroke="${sd}"/><ellipse cx="${R+6}" cy="${ey-2}" rx="10" ry="4.5" transform="rotate(${e==='goat'?20:-20} ${R+6} ${ey-2})" fill="${sk}" stroke="${sd}"/>`;
  if(e==='rabbit')o+=`<ellipse cx="48" cy="${top-10}" rx="6" ry="20" transform="rotate(-10 48 ${top-10})" fill="${sk}" stroke="${sd}"/><ellipse cx="72" cy="${top-10}" rx="6" ry="20" transform="rotate(10 72 ${top-10})" fill="${sk}" stroke="${sd}"/><ellipse cx="48" cy="${top-8}" rx="2.6" ry="14" transform="rotate(-10 48 ${top-8})" fill="#e9a9b4"/><ellipse cx="72" cy="${top-8}" rx="2.6" ry="14" transform="rotate(10 72 ${top-8})" fill="#e9a9b4"/>`;
  if(e==='cat'||e==='wolf'){const h=e==='wolf'?20:14;o+=ear(`M${L+2} ${top+12} L${L+2} ${top-h} L${L+16} ${top+4}Z`,`M${R-2} ${top+12} L${R-2} ${top-h} L${R-16} ${top+4}Z`)}
  // head
  if(s.face==='wolf')o+=`<ellipse cx="${cx}" cy="${cy}" rx="${rx+2}" ry="${ry}" fill="${sk}"/><path d="M${cx-rx+4} ${cy+2} Q${cx} ${cy+34} ${cx+rx-4} ${cy+2}Z" fill="${s.fur}"/><ellipse cx="${cx}" cy="${cy+14}" rx="11" ry="10" fill="${s.fur}"/>`;
  else o+=`<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="${sk}"/>`;
  if(s.face==='snout')o+=`<ellipse cx="${cx}" cy="${cy+14}" rx="14" ry="12" fill="${sk}"/><ellipse cx="${cx}" cy="${cy+16}" rx="12" ry="8" fill="${dk(sk,.12)}"/>`;
  if(s.face==='bull')o+=`<ellipse cx="${cx}" cy="${cy+15}" rx="15" ry="10" fill="${dk(sk,.35)}"/>`;
  if(s.face==='cat')o+=`<ellipse cx="${cx}" cy="${cy+12}" rx="10" ry="7" fill="${dk(sk,.4)}"/>`;
  if(s.face==='rabbit')o+=`<ellipse cx="${cx}" cy="${cy+12}" rx="9" ry="7" fill="#fff" opacity=".7"/>`;
  // skin details
  if(x.includes('scales'))o+=`<g fill="none" stroke="${sd}" opacity=".6"><path d="M${cx-10} ${top+8}q3 3 6 0q3 3 6 0q3 3 6 0M${cx-13} ${top+14}q3 3 6 0q3 3 6 0q3 3 6 0q3 3 6 0"/></g>`;
  if(x.includes('stripes'))o+=`<g stroke="${dk(sk,-.35)}" stroke-width="2" stroke-linecap="round"><path d="M${cx} ${top+2}v8M${cx-7} ${top+4}v6M${cx+7} ${top+4}v6M${L+2} ${cy}h5M${R-2} ${cy}h-5"/></g>`;
  if(x.includes('marks'))o+=`<g stroke="${dk(sk,-.4)}" stroke-width="1.6" fill="none"><path d="M${L+4} ${cy-2}l5 4-5 4M${R-4} ${cy-2}l-5 4 5 4M${cx} ${top+4}v8"/></g>`;
  if(x.includes('plates'))o+=`<g stroke="${dk(sk,-.4)}" stroke-width="1.5" fill="none"><path d="M${cx} ${top}v14M${L+3} ${cy+6}h${2*rx-6}M${cx-12} ${cy+14}l4 8h16l4-8"/></g><rect x="${cx-14}" y="${cy-4}" width="28" height="8" rx="3" fill="#20262c"/>`;
  if(x.includes('stitch'))o+=`<path d="M${cx-12} ${top+10}l18 10M${cx-9} ${top+9}l-2 4M${cx-3} ${top+12}l-2 4M${cx+3} ${top+15}l-2 4" stroke="#5a3a3a" stroke-width="1.3"/>`;
  if(x.includes('sideburns'))o+=`<path d="M${L} ${cy-6}l2 18 5-10Z M${R} ${cy-6}l-2 18-5-10Z" fill="${hair}"/>`;
  // hair
  const cap=`M${L-1} ${cy-2} Q${L-2} ${top-5} ${cx} ${top-5} Q${R+2} ${top-5} ${R+1} ${cy-2} Q${R-4} ${top+8} ${cx} ${top+9} Q${L+4} ${top+8} ${L-1} ${cy-2}Z`;
  if(s.hs==='short'||s.hs==='long')o+=`<path d="${cap}" fill="${hair}"/>`;
  if(s.hs==='curly'){for(let i=0;i<7;i++){const a=Math.PI*(1+i/6);o+=`<circle cx="${cx+Math.cos(a)*(rx-1)}" cy="${cy-4+Math.sin(a)*(ry-2)}" r="7" fill="${hair}"/>`}}
  if(s.hs==='wild')o+=`<path d="M${L-4} ${cy} L${L-8} ${top+4} L${L+2} ${top+2} L${L} ${top-8} L${cx-6} ${top-2} L${cx} ${top-12} L${cx+6} ${top-2} L${R} ${top-8} L${R-2} ${top+2} L${R+8} ${top+4} L${R+4} ${cy} Q${cx} ${top+6} ${L-4} ${cy}Z" fill="${hair}"/>`;
  if(s.hs==='topknot')o+=`<path d="${cap}" fill="${hair}" opacity=".95"/><circle cx="${cx}" cy="${top-8}" r="7" fill="${hair}"/>`;
  if(s.hs==='mohawk')o+=`<path d="M${cx-4} ${top+8} L${cx-6} ${top-10} L${cx} ${top-6} L${cx+6} ${top-10} L${cx+4} ${top+8}Z" fill="${hair}"/>`;
  if(s.hs==='flame')o+=`<path d="M${L} ${cy-4} Q${L-6} ${top-4} ${L+6} ${top-14} Q${L+8} ${top-2} ${cx-4} ${top-20} Q${cx+2} ${top-6} ${cx+8} ${top-22} Q${R-4} ${top-6} ${R+6} ${top-12} Q${R+6} ${top} ${R} ${cy-4} Q${cx} ${top+6} ${L} ${cy-4}Z" fill="${hair}"/><path d="M${L+6} ${cy-8} Q${cx-6} ${top-8} ${cx+2} ${top-10} Q${cx+4} ${top} ${R-6} ${cy-8} Q${cx} ${top+8} ${L+6} ${cy-8}Z" fill="#ffe08a"/>`;
  if(x.includes('braid'))o+=`<path d="M${R-2} ${top+6} q10 10 4 30" stroke="${hair}" stroke-width="4" fill="none"/>`;
  if(x.includes('crest'))o+=`<path d="M${cx-8} ${top+4} L${cx-14} ${top-16} L${cx-2} ${top} L${cx} ${top-20} L${cx+4} ${top} L${cx+14} ${top-14} L${cx+8} ${top+4}Z" fill="${dk(sk,.25)}"/>`;
  if(x.includes('frill'))o+=`<path d="M${cx-10} ${top+2} L${cx-8} ${top-10} L${cx-3} ${top} L${cx} ${top-14} L${cx+3} ${top} L${cx+8} ${top-10} L${cx+10} ${top+2}Z" fill="#c8553d"/>`;
  if(x.includes('leaves'))o+=`<g fill="#5f9a3a"><ellipse cx="${L+4}" cy="${top+4}" rx="6" ry="3" transform="rotate(-30 ${L+4} ${top+4})"/><ellipse cx="${R-4}" cy="${top+4}" rx="6" ry="3" transform="rotate(30 ${R-4} ${top+4})"/><ellipse cx="${cx+8}" cy="${top-2}" rx="5" ry="2.6" fill="#c9862a"/></g>`;
  if(x.includes('flower'))o+=`<g><circle cx="${R-4}" cy="${top+4}" r="4" fill="#ffd1e8"/><circle cx="${R-4}" cy="${top+4}" r="1.6" fill="#f2b632"/></g>`;
  if(x.includes('laurel'))o+=`<path d="M${L+2} ${top+10} Q${cx} ${top-2} ${R-2} ${top+10}" stroke="#6f8f3a" stroke-width="3" fill="none" stroke-dasharray="4 2"/>`;
  if(s.horns==='curve')o+=`<path d="M${cx-9} ${top+4} C${cx-16} ${top-10} ${cx-26} ${top-6} ${cx-28} ${top+8} C${cx-24} ${top-2} ${cx-16} ${top-2} ${cx-12} ${top+8}Z M${cx+9} ${top+4} C${cx+16} ${top-10} ${cx+26} ${top-6} ${cx+28} ${top+8} C${cx+24} ${top-2} ${cx+16} ${top-2} ${cx+12} ${top+8}Z" fill="#3a2a2a"/>`;
  if(s.horns==='ram')o+=`<circle cx="${L+2}" cy="${top+10}" r="7" fill="none" stroke="#c9b48a" stroke-width="4"/><circle cx="${R-2}" cy="${top+10}" r="7" fill="none" stroke="#c9b48a" stroke-width="4"/>`;
  if(s.horns==='small')o+=`<path d="M${cx-10} ${top+4} l-4 -10 l8 6Z M${cx+10} ${top+4} l4 -10 l-8 6Z" fill="#e8dcc0"/>`;
  if(x.includes('halo'))o+=`<ellipse cx="${cx}" cy="${top-8}" rx="17" ry="4.5" fill="none" stroke="#ffd966" stroke-width="2.5"/>`;
  if(x.includes('third'))o+=`<circle cx="${cx}" cy="${cy-10}" r="3.2" fill="${s.eyes}"/><circle cx="${cx}" cy="${cy-10}" r="6" fill="${s.eyes}" opacity=".3"/>`;
  // eyes
  if(!x.includes('plates')){
    const eyY=s.face==='snout'||s.face==='bull'||s.face==='wolf'?cy-3:cy-1, dx=s.face==='snout'?9:8, ic=s.eyes||'#3b2a1f';
    for(const sx of [-1,1]){const ex=cx+sx*dx;
      if(s.glow){o+=`<ellipse cx="${ex}" cy="${eyY}" rx="4.4" ry="2.8" fill="${ic}"/><ellipse cx="${ex}" cy="${eyY}" rx="6.5" ry="4.5" fill="${ic}" opacity=".25"/>`}
      else if(s.blank){o+=`<ellipse cx="${ex}" cy="${eyY}" rx="4.2" ry="2.8" fill="${ic}" stroke="${sd}" stroke-width=".6"/>`}
      else{o+=`<ellipse cx="${ex}" cy="${eyY}" rx="4.2" ry="2.8" fill="#fbfaf6"/>`+(s.slit?`<ellipse cx="${ex}" cy="${eyY}" rx="2.6" ry="2.7" fill="${ic}"/><ellipse cx="${ex}" cy="${eyY}" rx=".8" ry="2.4" fill="#111"/>`:`<circle cx="${ex}" cy="${eyY}" r="2" fill="${ic}"/><circle cx="${ex}" cy="${eyY}" r=".9" fill="#111"/>`)}
      o+=`<path d="M${ex-4} ${eyY-5} q4 -2 8 0" stroke="${dk(hair,-.2)}" stroke-width="1.6" fill="none" stroke-linecap="round"/>`}
  } else o+=`<rect x="${cx-12}" y="${cy-2.5}" width="8" height="3" fill="${s.eyes}"/><rect x="${cx+4}" y="${cy-2.5}" width="8" height="3" fill="${s.eyes}"/>`;
  // nose/mouth
  const my=cy+12;
  if(s.face==='beak')o+=`<path d="M${cx-7} ${cy+4} L${cx+7} ${cy+4} L${cx} ${cy+22}Z" fill="${s.beakc}"/><path d="M${cx-7} ${cy+4} L${cx+7} ${cy+4}" stroke="${dk(s.beakc,-.3)}"/>`;
  else if(s.face==='snout')o+=`<circle cx="${cx-4}" cy="${cy+10}" r="1.3" fill="${sd}"/><circle cx="${cx+4}" cy="${cy+10}" r="1.3" fill="${sd}"/><path d="M${cx-11} ${cy+19} q11 5 22 0" stroke="${sd}" stroke-width="1.4" fill="none"/>`;
  else if(s.face==='wolf'||s.face==='cat')o+=`<path d="M${cx-4} ${cy+7} h8 l-4 4Z" fill="${s.face==='cat'?'#d4787f':'#1d1d1d'}"/><path d="M${cx} ${cy+11} v3 M${cx} ${cy+14} q-4 3 -7 0 M${cx} ${cy+14} q4 3 7 0" stroke="#1d1d1d" stroke-width="1.2" fill="none"/>`;
  else if(s.face==='bull')o+=`<ellipse cx="${cx-5}" cy="${cy+14}" rx="2" ry="3" fill="${sd}"/><ellipse cx="${cx+5}" cy="${cy+14}" rx="2" ry="3" fill="${sd}"/><circle cx="${cx}" cy="${cy+21}" r="3.5" fill="none" stroke="#d9b24a" stroke-width="1.5"/>`;
  else if(s.face==='rabbit')o+=`<path d="M${cx-3} ${cy+8} h6 l-3 3Z" fill="#d4787f"/><rect x="${cx-2.5}" y="${cy+13}" width="5" height="4" fill="#fff" stroke="${sd}" stroke-width=".5"/>`;
  else if(s.face==='turtle')o+=`<path d="M${cx-10} ${my} q10 5 20 0" stroke="${sd}" stroke-width="2" fill="none"/><circle cx="${cx-2}" cy="${cy+5}" r="1" fill="${sd}"/><circle cx="${cx+2}" cy="${cy+5}" r="1" fill="${sd}"/>`;
  else{
    if(s.nose==='big')o+=`<ellipse cx="${cx}" cy="${cy+6}" rx="4.5" ry="5" fill="${dk(sk,-.08)}" stroke="${sd}" stroke-width=".6"/>`;
    else if(s.nose==='pink')o+=`<ellipse cx="${cx}" cy="${cy+6}" rx="5" ry="3.6" fill="#d98a92"/>`;
    else if(s.nose==='flat')o+=`<path d="M${cx-2} ${cy+7} h4" stroke="${sd}" stroke-width="1.4"/>`;
    else o+=`<path d="M${cx} ${cy+1} l-2 7 h4" stroke="${sd}" stroke-width="1.2" fill="none" stroke-linecap="round"/>`;
    if(s.mouth!=='none')o+=`<path d="M${cx-6} ${my} q6 3 12 0" stroke="${dk(sk,-.45)}" stroke-width="1.5" fill="none" stroke-linecap="round"/>`;
  }
  if(s.beard)o+=`<path d="M${L+2} ${cy+2} Q${L+2} ${cy+40} ${cx} ${cy+42} Q${R-2} ${cy+40} ${R-2} ${cy+2} Q${R-6} ${my+2} ${cx} ${my+2} Q${L+6} ${my+2} ${L+2} ${cy+2}Z" fill="${s.beard}"/><path d="M${cx-6} ${my-1} q6 3 12 0" stroke="${dk(s.beard,-.4)}" stroke-width="1.5" fill="none"/>`;
  if(s.tusks)o+=`<path d="M${cx-7} ${my+1} l1.5 -7 l2 7Z M${cx+7} ${my+1} l-1.5 -7 l-2 7Z" fill="#f5efdc"/>`;
  if(s.fangs)o+=`<path d="M${cx-4} ${my+1} l1 4 l1 -4Z M${cx+4} ${my+1} l-1 4 l-1 -4Z" fill="#fff"/>`;
  if(x.includes('whiskers'))o+=`<g stroke="#f4efe6" stroke-width=".9"><path d="M${cx-8} ${cy+11} l-14 -3M${cx-8} ${cy+13} l-14 1M${cx+8} ${cy+11} l14 -3M${cx+8} ${cy+13} l14 1"/></g>`;
  return `<svg viewBox="0 0 120 120" role="img" aria-label="Portrait">${o}</svg>`;
}

