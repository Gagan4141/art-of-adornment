"use client";

import {useEffect,useRef,useState} from "react";

const stages=[
  {label:"FIND",title:"It starts with a mineral.",copy:"A dark stone becomes the raw material."},
  {label:"GRIND",title:"Then the stone disappears.",copy:"Crush it. Powder it. Change its form."},
  {label:"MIX",title:"The powder becomes usable.",copy:"Material, texture and ritual meet."},
  {label:"WEAR",title:"Now it becomes adornment.",copy:"A tiny line changes the face."}
];

export default function Adornment2DStory(){
  const ref=useRef<HTMLDivElement>(null);
  const [stage,setStage]=useState(0);

  useEffect(()=>{
    const root=ref.current;
    if(!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    root.querySelectorAll<SVGCircleElement>(".pigment-particle").forEach((p,i)=>{
      p.animate(
        [{transform:"translate(0 0)",opacity:.15},
         {transform:"translate("+((i%7-3)*9)+"px "+(((i*3)%7-3)*7)+"px)",opacity:.85},
         {transform:"translate("+((i%5-2)*15)+"px "+(((i*4)%5-2)*11)+"px)",opacity:.1}],
        {duration:1500+(i%5)*180,delay:i*25,easing:"cubic-bezier(.2,.7,.2,1)",iterations:Infinity}
      );
    });
  },[]);

  return (
    <div ref={ref} className={"adornment-2d stage-"+stage}>
      <div className="adornment-2d-copy"><span>0{stage+1}</span><strong>{stages[stage].title}</strong><p>{stages[stage].copy}</p></div>
      <svg viewBox="0 0 720 560" role="img" aria-label="Animated coded illustration of an ancient cosmetic ritual">
        <defs>
          <radialGradient id="skin" cx="42%" cy="35%"><stop offset="0%" stopColor="#c58d6d"/><stop offset="100%" stopColor="#8d604c"/></radialGradient>
          <linearGradient id="robe" x1="0" x2="1"><stop stopColor="#25221d"/><stop offset="1" stopColor="#4a3c31"/></linearGradient>
          <filter id="soft"><feGaussianBlur stdDeviation="12"/></filter>
        </defs>
        <ellipse cx="360" cy="515" rx="245" ry="30" fill="#211c17" opacity=".13" filter="url(#soft)"/>
        <g className="scene-person">
          <path d="M205 515c15-116 76-174 155-174s140 58 155 174Z" fill="url(#robe)"/>
          <ellipse cx="360" cy="250" rx="132" ry="170" fill="url(#skin)"/>
          <path d="M231 181c10-102 70-139 130-139 69 0 118 50 130 139-35-37-70-50-125-50-58 0-96 20-135 50Z" fill="#211c17"/>
          <path d="M282 238q35-25 70 0" fill="none" stroke="#211c17" strokeWidth="8" strokeLinecap="round"/>
          <path d="M368 238q35-25 70 0" fill="none" stroke="#211c17" strokeWidth="8" strokeLinecap="round"/>
          <circle cx="320" cy="240" r="8" fill="#211c17"/><circle cx="400" cy="240" r="8" fill="#211c17"/>
          <path d="M360 248q-8 54 2 70" fill="none" stroke="#704936" strokeWidth="4" strokeLinecap="round"/>
          <path d="M329 337q31 17 62 0" fill="none" stroke="#71302d" strokeWidth="7" strokeLinecap="round"/>
          <path className="kohl-line" d="M278 237q42-32 86 2" fill="none" stroke="#171411" strokeWidth="6" strokeLinecap="round"/>
          <path className="kohl-line kohl-line-2" d="M356 239q43-34 88-2" fill="none" stroke="#171411" strokeWidth="6" strokeLinecap="round"/>
        </g>
        <g className="bowl">
          <ellipse cx="112" cy="445" rx="70" ry="20" fill="#302821"/><path d="M45 440q7 80 67 80t67-80Z" fill="#5b4a3d"/>
          <ellipse cx="112" cy="440" rx="67" ry="18" fill="#211c17"/><ellipse cx="112" cy="437" rx="46" ry="11" fill="#171411"/>
          <g className="pigment-particles">{Array.from({length:28},(_,i)=><circle key={i} className="pigment-particle" cx={88+(i%7)*8} cy={432+Math.floor(i/7)*3} r={i%3===0?3:2} fill="#a47a3b"/>)}</g>
        </g>
        <g className="brush"><path className="brush-handle" d="M98 423Q185 352 285 265" fill="none" stroke="#a47a3b" strokeWidth="9" strokeLinecap="round"/><path d="M282 268l31-27" stroke="#211c17" strokeWidth="7" strokeLinecap="round"/><circle className="brush-tip" cx="310" cy="241" r="5" fill="#171411"/></g>
        <circle className="stage-ring" cx="360" cy="250" r="190" fill="none" stroke="#211c17" strokeOpacity=".12"/>
        <text x="48" y="72" className="label">A SMALL ACT OF ADORNMENT</text><text x="48" y="101" className="sub">MINERAL → POWDER → PIGMENT → LINE</text>
      </svg>
      <div className="adornment-controls" role="tablist" aria-label="Animation stages">
        {stages.map((item,i)=><button type="button" role="tab" aria-selected={stage===i} key={item.label} className={stage===i?"active":""} onClick={()=>setStage(i)}><span>0{i+1}</span>{item.label}</button>)}
      </div>
    </div>
  );
}
