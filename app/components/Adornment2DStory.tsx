"use client";

import {useEffect,useRef} from "react";

export default function Adornment2DStory(){
  const ref=useRef<HTMLDivElement>(null);

  useEffect(()=>{
    const root=ref.current;
    if(!root) return;
    const reduce=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if(reduce) return;
    const particles=root.querySelectorAll<SVGCircleElement>(".pigment-particle");
    particles.forEach((p,i)=>{
      p.animate(
        [{transform:"translate(0 0)",opacity:0},
         {transform:"translate("+((i%7-3)*10)+"px "+(((i*3)%7-3)*8)+"px)",opacity:.9},
         {transform:"translate("+((i%5-2)*18)+"px "+(((i*4)%5-2)*14)+"px)",opacity:0}],
        {duration:1200+(i%5)*180,delay:i*35,easing:"cubic-bezier(.2,.7,.2,1)",iterations:Infinity}
      );
    });
  },[]);

  return (
    <div ref={ref} className="adornment-2d" aria-label="Animated illustration showing mineral pigment becoming kohl">
      <svg viewBox="0 0 720 560" role="img">
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
          <circle cx="320" cy="240" r="8" fill="#211c17"/>
          <circle cx="400" cy="240" r="8" fill="#211c17"/>
          <path d="M360 248q-8 54 2 70" fill="none" stroke="#704936" strokeWidth="4" strokeLinecap="round"/>
          <path d="M329 337q31 17 62 0" fill="none" stroke="#71302d" strokeWidth="7" strokeLinecap="round"/>
          <path className="kohl-line" d="M278 237q42-32 86 2" fill="none" stroke="#171411" strokeWidth="6" strokeLinecap="round"/>
          <path className="kohl-line kohl-line-2" d="M356 239q43-34 88-2" fill="none" stroke="#171411" strokeWidth="6" strokeLinecap="round"/>
        </g>
        <g className="bowl">
          <ellipse cx="112" cy="445" rx="70" ry="20" fill="#302821"/>
          <path d="M45 440q7 80 67 80t67-80Z" fill="#5b4a3d"/>
          <ellipse cx="112" cy="440" rx="67" ry="18" fill="#211c17"/>
          <ellipse cx="112" cy="437" rx="46" ry="11" fill="#171411"/>
          <g className="pigment-particles">
            <circle key="0" className="pigment-particle" cx="88" cy="432" r="3" fill="#a47a3b"/><circle key="1" className="pigment-particle" cx="96" cy="432" r="2" fill="#a47a3b"/><circle key="2" className="pigment-particle" cx="104" cy="432" r="2" fill="#a47a3b"/><circle key="3" className="pigment-particle" cx="112" cy="432" r="3" fill="#a47a3b"/><circle key="4" className="pigment-particle" cx="120" cy="432" r="2" fill="#a47a3b"/><circle key="5" className="pigment-particle" cx="128" cy="432" r="2" fill="#a47a3b"/><circle key="6" className="pigment-particle" cx="136" cy="432" r="3" fill="#a47a3b"/><circle key="7" className="pigment-particle" cx="88" cy="435" r="2" fill="#a47a3b"/><circle key="8" className="pigment-particle" cx="96" cy="435" r="2" fill="#a47a3b"/><circle key="9" className="pigment-particle" cx="104" cy="435" r="3" fill="#a47a3b"/><circle key="10" className="pigment-particle" cx="112" cy="435" r="2" fill="#a47a3b"/><circle key="11" className="pigment-particle" cx="120" cy="435" r="2" fill="#a47a3b"/><circle key="12" className="pigment-particle" cx="128" cy="435" r="3" fill="#a47a3b"/><circle key="13" className="pigment-particle" cx="136" cy="435" r="2" fill="#a47a3b"/><circle key="14" className="pigment-particle" cx="88" cy="438" r="2" fill="#a47a3b"/><circle key="15" className="pigment-particle" cx="96" cy="438" r="3" fill="#a47a3b"/><circle key="16" className="pigment-particle" cx="104" cy="438" r="2" fill="#a47a3b"/><circle key="17" className="pigment-particle" cx="112" cy="438" r="2" fill="#a47a3b"/><circle key="18" className="pigment-particle" cx="120" cy="438" r="3" fill="#a47a3b"/><circle key="19" className="pigment-particle" cx="128" cy="438" r="2" fill="#a47a3b"/><circle key="20" className="pigment-particle" cx="136" cy="438" r="2" fill="#a47a3b"/><circle key="21" className="pigment-particle" cx="88" cy="441" r="3" fill="#a47a3b"/><circle key="22" className="pigment-particle" cx="96" cy="441" r="2" fill="#a47a3b"/><circle key="23" className="pigment-particle" cx="104" cy="441" r="2" fill="#a47a3b"/><circle key="24" className="pigment-particle" cx="112" cy="441" r="3" fill="#a47a3b"/><circle key="25" className="pigment-particle" cx="120" cy="441" r="2" fill="#a47a3b"/><circle key="26" className="pigment-particle" cx="128" cy="441" r="2" fill="#a47a3b"/><circle key="27" className="pigment-particle" cx="136" cy="441" r="3" fill="#a47a3b"/>
          </g>
        </g>
        <g className="brush">
          <path className="brush-handle" d="M98 423Q185 352 285 265" fill="none" stroke="#a47a3b" strokeWidth="9" strokeLinecap="round"/>
          <path d="M282 268l31-27" stroke="#211c17" strokeWidth="7" strokeLinecap="round"/>
          <circle className="brush-tip" cx="310" cy="241" r="5" fill="#171411"/>
        </g>
        <text x="48" y="72" className="label">A SMALL ACT OF ADORNMENT</text>
        <text x="48" y="101" className="sub">MINERAL → POWDER → PIGMENT → LINE</text>
      </svg>
    </div>
  );
}
