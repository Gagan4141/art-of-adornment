"use client";

import { useState } from "react";

const surprises = [
  { big:"MEN TOO", title:"Makeup wasn't 'for women'.", text:"Ancient Egyptian cosmetics were used by both men and women.", source:"THE MET" },
  { big:"3,000+", title:"Years before Sephora.", text:"Egyptian cosmetic objects survive from periods thousands of years ago.", source:"MUSEUM RECORDS" },
  { big:"MINERAL", title:"Your eyeliner had a geology lesson.", text:"Galena and malachite were among the minerals used for eye cosmetics.", source:"THE MET" },
  { big:"TINY", title:"Small object. Huge story.", text:"Cosmetic jars and applicators show that beauty was also about tools, storage and presentation.", source:"ARCHAEOLOGY" }
];

const eras = [
  ["c. 1887–1813 BCE","MIDDLE KINGDOM","A tiny luxury","Kohl containers could be made from valuable materials."],
  ["c. 1550–1458 BCE","NEW KINGDOM","Beauty becomes portable","Tubes, sticks and grooming tools turn adornment into a kit."],
  ["c. 1491–1473 BCE","NEW KINGDOM","Galena leaves a trace","A museum object from Hatnefer's tomb preserves evidence of black eye cosmetic use."],
  ["c. 1300–1080 BCE","RAMESSIDE","Black + green","Galena and malachite appear in records of ancient Egyptian eye paint."]
];

const materials = [
  ["GALENA","BLACK","Dark mineral pigment","●"],
  ["MALACHITE","GREEN","Green mineral pigment","◆"],
  ["OCHRE","EARTH","Warm earth pigment","●"],
  ["OILS","TEXTURE","Skin + scent","✦"]
];

const objects = [
  { image:"https://collectionapi.metmuseum.org/api/collection/v1/iiif/543990/1228612/main-image", title:"Kohl Jar", date:"ca. 1491–1473 BCE", note:"Serpentinite", href:"https://www.metmuseum.org/art/collection/search/543990" },
  { image:"https://collectionapi.metmuseum.org/api/collection/v1/iiif/547624/1228300/main-image", title:"Kohl Tube + Stick", date:"ca. 1550–1458 BCE", note:"Portable cosmetic", href:"https://www.metmuseum.org/art/collection/search/547624" },
  { image:"https://collectionapi.metmuseum.org/api/collection/v1/iiif/554687/1203907/main-image", title:"Blue Kohl Tube", date:"ca. 1550–1300 BCE", note:"Faience + gold", href:"https://www.metmuseum.org/art/collection/search/554687" }
];

export default function Home() {
  const [surprise, setSurprise] = useState(0);
  const [era, setEra] = useState(0);
  const [material, setMaterial] = useState<number | null>(null);
  const [quiz, setQuiz] = useState<string | null>(null);

  return <main>
    <nav className="nav">
      <a className="brand" href="#top"><span className="brand-mark">✦</span> ART OF ADORNMENT</a>
      <div className="nav-links"><a href="#surprises">Surprises</a><a href="#objects">Objects</a><a href="#timeline">Timeline</a><a href="#palette">Palette</a></div>
      <span className="edition">VOL. 04 · BEAUTY</span>
    </nav>

    <section id="top" className="hero">
      <div className="hero-copy">
        <p className="eyebrow">THE HISTORY OF MAKEUP · WITHOUT THE TEXTBOOK</p>
        <h1>Who <em>invented</em><br/>makeup?</h1>
        <p className="hero-sub">Nobody. And that's exactly what makes the story interesting.</p>
        <a className="scroll" href="#surprises"><span>↓</span> Show me something weird</a>
      </div>
      <div className="hero-art">
        <div className="hero-badge">MUSEUM<br/><b>ARCHIVE</b></div>
        <div className="hero-caption">FIG. 01 · ADORNMENT, c. 1550 BCE → NOW</div>
        <div className="sun"/><div className="face"><div className="eye e1"/><div className="eye e2"/><div className="nose"/><div className="mouth"/></div>
        <div className="ring r1"/><div className="ring r2"/>
        <span className="anno a1">KOHL<br/><small>MINERAL PIGMENT</small></span>
        <span className="anno a2">BEAUTY<br/><small>TOOLKIT</small></span>
      </div>
    </section>

    <section id="surprises" className="surprises">
      <div className="section-head compact"><div><p className="eyebrow">01 / WAIT, WHAT?</p><h2>Four facts<br/><i>worth stealing.</i></h2></div><p>Short enough to read. Strange enough to remember.</p></div>
      <div className="surprise-grid">{surprises.map((s,i)=><button key={s.big} onClick={()=>setSurprise(i)} className={surprise===i?"surprise active":"surprise"}>
        <span className="surprise-no">0{i+1}</span><strong>{s.big}</strong><h3>{s.title}</h3><p>{s.text}</p><small>{s.source}</small>
      </button>)}</div>
    </section>

    <section className="quiz">
      <div><p className="eyebrow">02 / QUICK TEST</p><h2>What was<br/><i>kohl for?</i></h2><p>Don't overthink it.</p></div>
      <div className="quiz-box">
        <div className="quiz-question">Ancient Egyptian eye cosmetics could be…</div>
        <div className="quiz-options">
          {["Just decoration","Part of beauty + ritual + daily life","Only for royalty"].map(x=><button key={x} onClick={()=>setQuiz(x)} className={quiz===x?"chosen":""}>{x}<span>→</span></button>)}
        </div>
        {quiz && <div className="quiz-answer">{quiz==="Part of beauty + ritual + daily life" ? "Exactly. The evidence points to cosmetics having more than one role." : "Not quite. The historical picture is more interesting: cosmetics could overlap with beauty, ritual and everyday life."}</div>}
      </div>
    </section>

    <section id="objects" className="objects">
      <div className="section-head"><div><p className="eyebrow">03 / THE EVIDENCE</p><h2>Not a drawing.<br/><i>An actual object.</i></h2></div><p>Scroll through things people actually held, carried and used.</p></div>
      <div className="object-grid">{objects.map((o,i)=><a className="object-card" href={o.href} target="_blank" rel="noreferrer" key={o.title}>
        <div className="object-image"><img src={o.image} alt={o.title}/><span>OPEN MUSEUM RECORD ↗</span><b>0{i+1}</b></div>
        <div className="object-meta"><span>{o.date}</span><span>{o.note}</span></div><h3>{o.title}</h3>
      </a>)}</div>
    </section>

    <section id="timeline" className="timeline">
      <div className="section-head compact"><div><p className="eyebrow">04 / THE RABBIT HOLE</p><h2>Pick a year.<br/><i>Get a surprise.</i></h2></div><p>No giant wall of text. Just the bit worth knowing.</p></div>
      <div className="timeline-layout">
        <div className="years">{eras.map((e,i)=><button key={e[0]} className={era===i?"year active":"year"} onClick={()=>setEra(i)}><span>{e[0]}</span><b>{e[1]}</b></button>)}</div>
        <article className="era-card"><div className="era-top"><span>CASE 0{era+1}</span><span>{eras[era][0]}</span></div><div className="era-body"><div className="era-number">0{era+1}</div><div><p className="place">{eras[era][1]}</p><h3>{eras[era][2]}</h3><p>{eras[era][3]}</p></div></div><a href="https://www.metmuseum.org/art/collection/search/560226" target="_blank" rel="noreferrer" className="case-link">GO DEEPER ↗</a></article>
      </div>
    </section>

    <section id="palette" className="palette">
      <div className="palette-head"><p className="eyebrow">05 / THE INGREDIENTS</p><h2>Open the<br/><i>ancient bag.</i></h2><p>Tap a tile. One ingredient. One tiny story.</p></div>
      <div className="material-grid">{materials.map((m,i)=><button className={material===i?"material open":"material"} key={m[0]} onClick={()=>setMaterial(material===i?null:i)}><span className={"material-symbol "+(i===1?"green":i===2?"red":"")}>{m[3]}</span><span className="material-no">0{i+1}</span><strong>{m[0]}</strong><small>{m[1]}</small><p>{material===i?m[2]:"Tap to reveal"}</p><b>{material===i?"−":"+"}</b></button>)}</div>
    </section>

    <section className="big-fact">
      <span className="big-fact-label">THE REAL ANSWER</span>
      <h2>Makeup has no<br/><i>birth certificate.</i></h2>
      <p>It is a collection of practices that kept changing — across places, materials, beliefs and people.</p>
      <a href="https://www.metmuseum.org/art/collection/search/560226" target="_blank" rel="noreferrer">START WITH THE OBJECTS ↗</a>
    </section>

    <footer><div><span className="brand-mark">✦</span><h2>ART OF<br/><i>ADORNMENT</i></h2></div><p>A visual rabbit hole built from museum objects.<br/>Curiosity first. Sources always available.</p><div className="footer-links"><a href="https://www.metmuseum.org/" target="_blank" rel="noreferrer">The Met ↗</a><a href="https://www.britishmuseum.org/" target="_blank" rel="noreferrer">British Museum ↗</a></div></footer>
  </main>;
}
