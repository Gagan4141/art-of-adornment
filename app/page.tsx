"use client";

import { useState } from "react";

const paths = [
  { id: "weird", icon: "✦", label: "GIVE ME THE WEIRD STUFF", title: "Beauty was never just beauty.", text: "Ancient cosmetics could sit somewhere between adornment, ritual, identity and everyday life." },
  { id: "science", icon: "◈", label: "SHOW ME THE SCIENCE", title: "Your eyeliner started as a rock.", text: "Galena became a dark pigment. Malachite brought green. Earth pigments added colour." },
  { id: "people", icon: "○", label: "WHO ACTUALLY WORE IT?", title: "Spoiler: not just women.", text: "The archaeological record shows cosmetics in contexts involving both men and women." },
];

const facts = [
  ["3000+", "YEARS", "before modern beauty counters, cosmetic objects were already being made and stored."],
  ["GALENA", "THE ROCK", "a lead sulfide mineral used as a dark eye cosmetic pigment."],
  ["GREEN", "MALACHITE", "a mineral pigment that could create the unmistakable green associated with ancient Egyptian eye paint."],
  ["TINY", "OBJECTS", "can reveal huge details about how people travelled, groomed, stored and applied cosmetics."],
];

const objects = [
  { image:"https://collectionapi.metmuseum.org/api/collection/v1/iiif/543990/1228612/main-image", title:"Kohl Jar", date:"ca. 1491–1473 BCE", material:"Serpentinite", detail:"A small container made for something used around the eyes.", href:"https://www.metmuseum.org/art/collection/search/543990" },
  { image:"https://collectionapi.metmuseum.org/api/collection/v1/iiif/547624/1228300/main-image", title:"Kohl Tube + Stick", date:"ca. 1550–1458 BCE", material:"Portable cosmetic", detail:"A container and applicator — essentially an ancient beauty kit.", href:"https://www.metmuseum.org/art/collection/search/547624" },
  { image:"https://collectionapi.metmuseum.org/api/collection/v1/iiif/554687/1203907/main-image", title:"Blue Kohl Tube", date:"ca. 1550–1300 BCE", material:"Faience + gold", detail:"A beautiful object for a practical ritual: storing cosmetic material.", href:"https://www.metmuseum.org/art/collection/search/554687" },
];

const eras = [
  ["c. 1887–1813 BCE","MIDDLE KINGDOM","A tiny luxury","Kohl containers could be made from valuable materials."],
  ["c. 1550–1458 BCE","NEW KINGDOM","Beauty becomes portable","Tubes, sticks and grooming tools turn adornment into a kit."],
  ["c. 1491–1473 BCE","NEW KINGDOM","Galena leaves a trace","A cosmetic jar from the period preserves evidence of black eye cosmetic use."],
  ["c. 1300–1080 BCE","RAMESSIDE","Black + green","Galena and malachite appear in records of ancient Egyptian eye paint."],
];

const materials = [
  ["GALENA","BLACK","Dark mineral pigment","●"],
  ["MALACHITE","GREEN","Green mineral pigment","◆"],
  ["OCHRE","EARTH","Warm earth pigment","●"],
  ["OILS","TEXTURE","A base for skin + scent","✦"],
];

export default function Home() {
  const [path, setPath] = useState("weird");
  const [fact, setFact] = useState(0);
  const [object, setObject] = useState(0);
  const [era, setEra] = useState(0);
  const [material, setMaterial] = useState<number | null>(null);
  const [quiz, setQuiz] = useState<string | null>(null);

  return <main>
    <nav className="nav">
      <a className="brand" href="#top"><span className="brand-mark">✦</span> ART OF ADORNMENT</a>
      <div className="nav-links"><a href="#rabbit-hole">Explore</a><a href="#evidence">Objects</a><a href="#timeline">Timeline</a><a href="#ingredients">Ingredients</a></div>
      <span className="edition">A VISUAL HISTORY · VOL. 04</span>
    </nav>

    <section id="top" className="hero">
      <div className="hero-copy">
        <p className="eyebrow">A HISTORY OF MAKEUP · IN 10 MINUTES</p>
        <h1>Who <em>invented</em><br/>makeup?</h1>
        <div className="hero-answer"><span>THE SHORT ANSWER</span><strong>Nobody.</strong><p>There was no first lipstick. No first eyeliner genius. Just thousands of experiments, materials and rituals.</p></div>
        <a className="scroll" href="#rabbit-hole"><span>↓</span> I want the strange version</a>
      </div>
      <div className="hero-art">
        <div className="hero-stamp">THE<br/><b>ARCHIVE</b><br/>IS OPEN</div>
        <div className="hero-caption">FIG. 01 · ADORNMENT / c. 1550 BCE → NOW</div>
        <div className="orbit o1"/><div className="orbit o2"/><div className="orbit o3"/>
        <div className="face"><div className="eye e1"/><div className="eye e2"/><div className="nose"/><div className="mouth"/></div>
        <span className="anno a1">KOHL<br/><small>MINERAL PIGMENT</small></span>
        <span className="anno a2">LOOK<br/><small>AT THE OBJECT</small></span>
        <span className="floating-word w1">ROCK</span><span className="floating-word w2">RITUAL</span><span className="floating-word w3">IDENTITY</span>
      </div>
    </section>

    <section id="rabbit-hole" className="rabbit">
      <div className="section-intro">
        <p className="eyebrow">01 / CHOOSE YOUR RABBIT HOLE</p>
        <h2>You decide<br/><i>what happens next.</i></h2>
        <p>No textbook route. Pick the question that bothers you most.</p>
      </div>
      <div className="path-grid">
        {paths.map(p=><button key={p.id} onClick={()=>setPath(p.id)} className={path===p.id ? "path-card active" : "path-card"}>
          <span className="path-icon">{p.icon}</span><span className="path-label">{p.label}</span>
          <strong>{p.title}</strong><p>{p.text}</p><span className="path-arrow">EXPLORE →</span>
        </button>)}
      </div>
      <div className="path-reveal">
        <span>YOU PICKED · {paths.find(p=>p.id===path)?.label}</span>
        <strong>{paths.find(p=>p.id===path)?.title}</strong>
        <p>{paths.find(p=>p.id===path)?.text}</p>
      </div>
    </section>

    <section className="fact-machine">
      <div className="fact-top"><p className="eyebrow">02 / WAIT, WHAT?</p><span>{String(fact+1).padStart(2,"0")} / 04</span></div>
      <div className="fact-main">
        <button className="fact-arrow left" onClick={()=>setFact((fact+3)%4)}>←</button>
        <div className="fact-copy"><small>{facts[fact][1]}</small><strong>{facts[fact][0]}</strong><h2>{facts[fact][2]}</h2></div>
        <button className="fact-arrow" onClick={()=>setFact((fact+1)%4)}>→</button>
      </div>
      <div className="fact-dots">{facts.map((_,i)=><button key={i} className={fact===i?"on":""} onClick={()=>setFact(i)}/>)}</div>
    </section>

    <section id="evidence" className="evidence">
      <div className="section-head">
        <div><p className="eyebrow">03 / SHOW ME THE RECEIPT</p><h2>Real objects.<br/><i>Real fingerprints.</i></h2></div>
        <p>Forget the reconstruction for a second. These are objects that survived long enough to tell us something.</p>
      </div>
      <div className="object-stage">
        <div className="object-visual"><img src={objects[object].image} alt={objects[object].title}/><span className="object-index">0{object+1}</span><a href={objects[object].href} target="_blank" rel="noreferrer">OPEN THE MET RECORD ↗</a></div>
        <div className="object-story">
          <span className="object-date">{objects[object].date}</span>
          <h3>{objects[object].title}</h3>
          <p className="object-material">{objects[object].material}</p>
          <p>{objects[object].detail}</p>
          <div className="object-nav">{objects.map((o,i)=><button key={o.title} onClick={()=>setObject(i)} className={object===i?"active":""}><span>0{i+1}</span>{o.title}</button>)}</div>
        </div>
      </div>
    </section>

    <section className="transformation">
      <div className="transform-title"><p className="eyebrow">04 / FROM EARTH TO EYELINE</p><h2>It started<br/><i>in the ground.</i></h2><p>Think less “makeup aisle”. More “material experiment”.</p></div>
      <div className="transform-line">
        <div className="transform-step"><b>01</b><div className="rock">◆</div><strong>FIND IT</strong><p>Mineral or earth pigment.</p></div>
        <div className="connector">→</div>
        <div className="transform-step"><b>02</b><div className="powder">•••</div><strong>GRIND IT</strong><p>Turn the material into pigment.</p></div>
        <div className="connector">→</div>
        <div className="transform-step"><b>03</b><div className="mix">◐</div><strong>MIX IT</strong><p>Combine pigment with a usable base.</p></div>
        <div className="connector">→</div>
        <div className="transform-step final"><b>04</b><div className="eye-mark">—◉—</div><strong>WEAR IT</strong><p>A tiny ritual becomes visible.</p></div>
      </div>
    </section>

    <section id="timeline" className="timeline">
      <div className="section-head compact"><div><p className="eyebrow">05 / JUMP THROUGH TIME</p><h2>Pick a year.<br/><i>Get one detail.</i></h2></div><p>History moves faster when you stop trying to read all of it.</p></div>
      <div className="timeline-layout">
        <div className="years">{eras.map((e,i)=><button key={e[0]} className={era===i?"year active":"year"} onClick={()=>setEra(i)}><span>{e[0]}</span><b>{e[1]}</b></button>)}</div>
        <article className="era-card"><div className="era-top"><span>CASE 0{era+1}</span><span>{eras[era][0]}</span></div><div className="era-body"><div className="era-number">0{era+1}</div><div><p className="place">{eras[era][1]}</p><h3>{eras[era][2]}</h3><p>{eras[era][3]}</p></div></div><a href="https://www.metmuseum.org/art/collection/search/560226" target="_blank" rel="noreferrer">GO DEEPER ↗</a></article>
      </div>
    </section>

    <section id="ingredients" className="ingredients">
      <div className="ingredient-intro"><p className="eyebrow">06 / OPEN THE ANCIENT BAG</p><h2>Four materials.<br/><i>One obsession.</i></h2><p>Tap one. Don't worry — the chemistry won't get annoying.</p></div>
      <div className="ingredient-grid">{materials.map((m,i)=><button key={m[0]} className={material===i?"ingredient open":"ingredient"} onClick={()=>setMaterial(material===i?null:i)}><span className={"ingredient-symbol "+(i===1?"green":i===2?"red":"")}>{m[3]}</span><small>0{i+1}</small><strong>{m[0]}</strong><em>{m[1]}</em><p>{material===i?m[2]:"TAP TO REVEAL"}</p><b>{material===i?"−":"+"}</b></button>)}</div>
    </section>

    <section className="quiz">
      <div className="quiz-heading"><p className="eyebrow">07 / ONE LAST TRAP</p><h2>So…<br/><i>why kohl?</i></h2><p>Pick the answer you think is closest.</p></div>
      <div className="quiz-box">
        <div className="quiz-question">Ancient Egyptian eye cosmetics could be…</div>
        {["Just decoration","Part of beauty + ritual + daily life","Only for royalty"].map(x=><button key={x} onClick={()=>setQuiz(x)} className={quiz===x?"chosen":""}><span>{x}</span><b>→</b></button>)}
        {quiz && <div className="quiz-answer"><strong>{quiz==="Part of beauty + ritual + daily life"?"YOU GOT THE IDEA.":"THE FUN PART IS THE NUANCE."}</strong><p>Cosmetics could overlap with beauty, ritual and everyday life. One object rarely gives us the whole story — which is exactly why archaeology gets interesting.</p></div>}
      </div>
    </section>

    <section className="final-reveal">
      <p className="eyebrow">THE ANSWER, FINALLY</p>
      <h2>There wasn't<br/><i>one inventor.</i></h2>
      <div className="final-line"/>
      <p>There were people experimenting with colour, texture, scent, identity and ritual — across thousands of years.</p>
      <a href="#evidence">NOW SHOW ME THE OBJECTS ↑</a>
    </section>

    <footer><div><span className="brand-mark">✦</span><h2>ART OF<br/><i>ADORNMENT</i></h2></div><p>A visual rabbit hole built from museum objects.<br/>Curiosity first. Sources always available.</p><div className="footer-links"><a href="https://www.metmuseum.org/" target="_blank" rel="noreferrer">The Met ↗</a><a href="https://www.britishmuseum.org/" target="_blank" rel="noreferrer">British Museum ↗</a></div></footer>
  </main>;
}
