"use client";

import { useState } from "react";

const surprises = [
  { n:"01", big:"5.5 cm", title:"Tiny jar. Big story.", text:"A New Kingdom kohl jar from Hatnefer's tomb is only about 5.5 cm tall — and still contained traces of galena.", source:"The Met · Object 36.3.62" },
  { n:"02", big:"4 + 1", title:"Ancient beauty kit.", text:"One surviving set included kohl, a razor, tweezers, a whetstone and a mirror. Yes — basically a compact grooming kit.", source:"The Met · Object 26.7.837-related" },
  { n:"03", big:"MEN TOO", title:"It wasn't 'women's makeup'.", text:"The Met explicitly records cosmetics being used by both men and women in ancient Egypt.", source:"The Met · Object 16.1.36a,b" }
];

const eras = [
  ["c. 1887–1813 BCE","MIDDLE KINGDOM","A royal kohl jar","Obsidian + gold. Small enough to fit in your hand, precious enough to signal status."],
  ["c. 1550–1458 BCE","NEW KINGDOM","The beauty kit","Kohl, applicator, mirror, razor, tweezers and whetstone appear together."],
  ["c. 1491–1473 BCE","NEW KINGDOM","Galena leaves a trace","A kohl jar from Hatnefer's tomb still held residue identified as galena."],
  ["c. 1300–1080 BCE","RAMESSIDE","Two colours, two minerals","Museum records describe black galena and green malachite being prepared as eye paint."]
];

const materials = [
  ["GALENA","BLACK","Lead-bearing mineral used in black eye cosmetics.","●"],
  ["MALACHITE","GREEN","Mineral used to create green eye paint.","◆"],
  ["OCHRE","EARTH","Natural earth pigment producing warm tones.","●"],
  ["OILS","TEXTURE","Oils and unguents were part of ancient skin care.","✦"]
];

const objects = [
  { image:"https://collectionapi.metmuseum.org/api/collection/v1/iiif/543990/1228612/main-image", title:"Kohl Jar", date:"ca. 1491–1473 BCE", note:"Serpentinite + galena", href:"https://www.metmuseum.org/art/collection/search/543990" },
  { image:"https://collectionapi.metmuseum.org/api/collection/v1/iiif/547624/1228300/main-image", title:"Kohl Tube + Stick", date:"ca. 1550–1458 BCE", note:"Wood + ivory + copper", href:"https://www.metmuseum.org/art/collection/search/547624" },
  { image:"https://collectionapi.metmuseum.org/api/collection/v1/iiif/554687/1203907/main-image", title:"Blue Kohl Tube", date:"ca. 1550–1300 BCE", note:"Faience + gold + hematite", href:"https://www.metmuseum.org/art/collection/search/554687" }
];

export default function Home() {
  const [surprise, setSurprise] = useState(0);
  const [era, setEra] = useState(0);
  const [openMaterial, setOpenMaterial] = useState<number | null>(null);

  return <main>
    <nav className="nav">
      <a className="brand" href="#top"><span className="brand-mark">✦</span> ART OF ADORNMENT</a>
      <div className="nav-links"><a href="#surprises">Wait, what?</a><a href="#objects">Objects</a><a href="#timeline">Timeline</a><a href="#palette">Palette</a></div>
      <span className="edition">VOL. 03 · BEAUTY</span>
    </nav>

    <section id="top" className="hero">
      <div className="hero-copy">
        <p className="eyebrow">THE HISTORY OF MAKEUP · IN 5 MINUTES</p>
        <h1>Who <em>invented</em><br/>makeup?</h1>
        <p className="hero-sub">Spoiler: nobody. But the things humans did with pigment 3,000+ years ago? <strong>Way more interesting.</strong></p>
        <a className="scroll" href="#surprises"><span>↓</span> Give me the good stuff</a>
      </div>
      <div className="hero-art">
        <div className="hero-badge">MUSEUM<br/><b>ARCHIVE</b></div>
        <div className="hero-caption">FIG. 01 · ANCIENT ADORNMENT</div>
        <div className="sun"/><div className="face"><div className="eye e1"/><div className="eye e2"/><div className="nose"/><div className="mouth"/></div>
        <div className="ring r1"/><div className="ring r2"/>
        <span className="anno a1">KOHL<br/><small>c. 1550 BCE</small></span>
        <span className="anno a2">MINERAL<br/><small>+ OIL + TOOL</small></span>
      </div>
    </section>

    <section id="surprises" className="surprises">
      <div className="section-head compact"><div><p className="eyebrow">01 / BEFORE YOU SCROLL</p><h2>Three things<br/><i>you didn't expect.</i></h2></div><p>Real objects. Real museum records. Zero textbook energy.</p></div>
      <div className="surprise-grid">
        {surprises.map((s,i)=><button key={s.n} onClick={()=>setSurprise(i)} className={surprise===i?"surprise active":"surprise"}>
          <span className="surprise-no">{s.n}</span><strong>{s.big}</strong><h3>{s.title}</h3><p>{s.text}</p><small>{s.source}</small>
        </button>)}
      </div>
      <div className="swipe-hint">TAP A CARD · FOLLOW THE RABBIT HOLE ↗</div>
    </section>

    <section id="objects" className="objects">
      <div className="section-head"><div><p className="eyebrow">02 / DON'T TAKE OUR WORD FOR IT</p><h2>Meet the<br/><i>evidence.</i></h2></div><p>These aren't illustrations. They're surviving objects from museum collections.</p></div>
      <div className="object-grid">{objects.map((o,i)=><a className="object-card" href={o.href} target="_blank" rel="noreferrer" key={o.title}>
        <div className="object-image"><img src={o.image} alt={o.title}/><span>OPEN MUSEUM RECORD ↗</span><b>0{i+1}</b></div>
        <div className="object-meta"><span>{o.date}</span><span>{o.note}</span></div><h3>{o.title}</h3>
      </a>)}</div>
    </section>

    <section id="timeline" className="timeline">
      <div className="section-head compact"><div><p className="eyebrow">03 / THE RABBIT HOLE</p><h2>Follow the<br/><i>powder.</i></h2></div><p>Pick a moment. One click = one tiny historical detour.</p></div>
      <div className="timeline-layout">
        <div className="years">{eras.map((e,i)=><button key={e[0]} className={era===i?"year active":"year"} onClick={()=>setEra(i)}><span>{e[0]}</span><b>{e[1]}</b></button>)}</div>
        <article className="era-card"><div className="era-top"><span>CASE FILE 0{era+1}</span><span>{eras[era][0]}</span></div><div className="era-body"><div className="era-number">0{era+1}</div><div><p className="place">{eras[era][1]}</p><h3>{eras[era][2]}</h3><p>{eras[era][3]}</p></div></div><a href="https://www.metmuseum.org/art/collection/search/560226" target="_blank" rel="noreferrer" className="case-link">OPEN THE MUSEUM TRAIL ↗</a></article>
      </div>
    </section>

    <section id="palette" className="palette">
      <div className="palette-head"><p className="eyebrow">04 / WHAT'S IN THE BAG?</p><h2>The ancient<br/><i>makeup shelf.</i></h2><p>Tap a material. Think of it as a 3,000-year-old ingredient reveal.</p></div>
      <div className="material-grid">{materials.map((m,i)=><button className={openMaterial===i?"material open":"material"} key={m[0]} onClick={()=>setOpenMaterial(openMaterial===i?null:i)}><span className={"material-symbol "+(i===1?"green":i===2?"red":"")}>{m[3]}</span><span className="material-no">0{i+1}</span><strong>{m[0]}</strong><small>{m[1]}</small><p>{m[2]}</p><b>{openMaterial===i?"−":"+"}</b></button>)}</div>
    </section>

    <section className="big-fact"><span className="big-fact-label">THE PLOT TWIST</span><h2>It wasn't just<br/><i>about looking good.</i></h2><p>Ancient Egyptian eye cosmetics could be decorative, but museum records also connect them with practical and ritual ideas. The same little jar could sit at the intersection of beauty, daily life and belief.</p><a href="https://www.metmuseum.org/art/collection/search/543963" target="_blank" rel="noreferrer">SEE THE BES COSMETIC CONTAINER ↗</a></section>

    <footer><div><span className="brand-mark">✦</span><h2>ART OF<br/><i>ADORNMENT</i></h2></div><p>A visual rabbit hole built from museum objects and records.<br/>Curiosity first. Footnotes when you want them.</p><div className="footer-links"><a href="https://www.metmuseum.org/" target="_blank" rel="noreferrer">The Met ↗</a><a href="https://www.britishmuseum.org/" target="_blank" rel="noreferrer">British Museum ↗</a></div></footer>
  </main>;
}
