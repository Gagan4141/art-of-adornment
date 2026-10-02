"use client";

import { useState } from "react";

const eras = [
  { year:"c. 4th millennium BCE", place:"Ancient Egypt", title:"Adornment leaves traces", text:"Mineral pigments, oils and carefully made containers belong to a much older history than the modern word “makeup.” Egypt preserves some of the clearest surviving evidence of this tradition.", tag:"ORIGINS" },
  { year:"c. 1887–1813 BCE", place:"Middle Kingdom Egypt", title:"Kohl becomes personal", text:"The Met records a kohl jar from the Middle Kingdom and notes that cosmetics were used by both men and women. Even the container could signal status.", tag:"EVERYDAY" },
  { year:"c. 1550–1300 BCE", place:"New Kingdom Egypt", title:"A portable beauty kit", text:"Kohl tubes, sticks and other grooming tools appear together in archaeological contexts. Some containers were designed to be carried, closed and reused.", tag:"TOOLKIT" },
  { year:"c. 1300–1080 BCE", place:"Ramesside Egypt", title:"Minerals become a palette", text:"Museum records describe eye paints made from materials including galena and malachite, ground into powder and prepared for application around the eyes.", tag:"MATERIALS" },
  { year:"Today", place:"Everywhere", title:"The ritual becomes an industry", text:"Modern cosmetics are manufactured at enormous scale, but the underlying idea remains familiar: pigment, texture, scent and presentation used to shape appearance and identity.", tag:"NOW" }
];

const facts = [
  ["No single inventor","There is no single person credited with inventing makeup. Cosmetic practices developed independently and changed across cultures and periods."],
  ["Men wore it too","The Met explicitly notes that ancient Egyptian cosmetics were used by both men and women."],
  ["The container mattered","Cosmetics were stored in purpose-made vessels, from practical tubes to highly crafted objects associated with status."],
  ["Kohl was a material, not one formula","The word describes eye cosmetics made from different powdered materials; museum records document galena and malachite among them."]
];

const objects = [
  { image:"https://collectionapi.metmuseum.org/api/collection/v1/iiif/543990/1228612/main-image", title:"Serpentinite Kohl Jar + Applicator", date:"New Kingdom · ca. 1492–1473 BCE", museum:"The Metropolitan Museum of Art", href:"https://www.metmuseum.org/art/collection/search/543990" },
  { image:"https://collectionapi.metmuseum.org/api/collection/v1/iiif/547624/1228300/main-image", title:"Kohl Tube + Stick", date:"New Kingdom · ca. 1550–1458 BCE", museum:"The Metropolitan Museum of Art", href:"https://www.metmuseum.org/art/collection/search/547624" },
  { image:"https://media.britishmuseum.org/media/Repository/Documents/2014_10/6_15/383bf5ca_0e15_4e2b_98b6_a3bc01047851/mid_00428968_001.jpg", title:"Ancient Egyptian Kohl Jar", date:"18th Dynasty", museum:"The British Museum", href:"https://www.britishmuseum.org/collection/object/Y_EA29336" }
];

export default function Home() {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState<number | null>(null);

  return <main>
    <nav className="nav">
      <a className="brand" href="#top"><span className="brand-mark">✦</span> ART OF ADORNMENT</a>
      <div className="nav-links"><a href="#story">Story</a><a href="#objects">Objects</a><a href="#timeline">Timeline</a><a href="#materials">Materials</a></div>
      <span className="edition">VOL. 02 · BEAUTY</span>
    </nav>

    <section id="top" className="hero">
      <div className="hero-copy reveal">
        <p className="eyebrow">A VISUAL HISTORY OF COSMETICS</p>
        <h1>Who <em>invented</em><br/>makeup?</h1>
        <p className="hero-sub">No one person did. The history of cosmetics is a long human experiment in pigment, ritual, identity and adornment — preserved in objects that still survive.</p>
        <a className="scroll" href="#story"><span>↓</span> Enter the archive</a>
      </div>
      <div className="hero-art">
        <div className="hero-caption">FIG. 01<br/><span>A face imagined from the visual language of ancient adornment</span></div>
        <div className="sun"/>
        <div className="face"><div className="eye e1"/><div className="eye e2"/><div className="nose"/><div className="mouth"/></div>
        <div className="ring r1"/><div className="ring r2"/>
        <span className="anno a1">KOHL<br/><small>MINERAL PIGMENT</small></span>
        <span className="anno a2">ADORNMENT<br/><small>IDENTITY + RITUAL</small></span>
      </div>
    </section>

    <section id="story" className="intro">
      <div className="section-num">01 / THE QUESTION</div>
      <div className="reveal">
        <p className="kicker">Forget the inventor myth.</p>
        <h2>Makeup wasn't <i>invented.</i><br/>It <span>evolved.</span></h2>
        <p className="lede">There is no single “first makeup.” People in different societies discovered ways to color, protect, scent and decorate the body using materials around them. Ancient Egypt gives us unusually rich surviving evidence — but it is one chapter in a much larger story.</p>
        <div className="source-note">Museum records are the backbone of this page. The Met documents Egyptian kohl sticks, jars and portable cosmetic kits spanning the Middle and New Kingdoms. <a href="https://www.metmuseum.org/art/collection/search/560226" target="_blank" rel="noreferrer">Read the object record ↗</a></div>
      </div>
    </section>

    <section id="objects" className="objects">
      <div className="section-head">
        <div><p className="eyebrow">02 / THE OBJECTS</p><h2>History you can<br/><i>hold in your hand.</i></h2></div>
        <p>Instead of imagining an ancient beauty routine, look at the surviving objects. Their shapes, materials and wear make the story tangible.</p>
      </div>
      <div className="object-grid">
        {objects.map((o,i)=><a className="object-card reveal" href={o.href} target="_blank" rel="noreferrer" key={o.title}>
          <div className="object-image"><img src={o.image} alt={o.title}/><span>VIEW OBJECT ↗</span></div>
          <div className="object-meta"><span>0{i+1}</span><span>{o.date}</span></div>
          <h3>{o.title}</h3><p>{o.museum}</p>
        </a>)}
      </div>
    </section>

    <section id="timeline" className="timeline">
      <div className="section-head"><div><p className="eyebrow">03 / THE LONG VIEW</p><h2>Five moments.<br/><i>One ancient ritual.</i></h2></div><p>Move through the timeline. Notice how the materials, containers and meanings of adornment changed.</p></div>
      <div className="timeline-layout">
        <div className="years">{eras.map((e,i)=><button key={e.year} className={active===i?"year active":"year"} onClick={()=>setActive(i)}><span>{e.year}</span><b>{e.place}</b></button>)}</div>
        <article className="era-card">
          <div className="era-top"><span>{eras[active].tag}</span><span>{String(active+1).padStart(2,"0")} / 05</span></div>
          <div className="era-body"><div className="era-number">{String(active+1).padStart(2,"0")}</div><div><p className="place">{eras[active].place}</p><h3>{eras[active].title}</h3><p>{eras[active].text}</p></div></div>
          <div className="era-line"><span>◈</span><span>ADORNMENT · IDENTITY · RITUAL</span></div>
        </article>
      </div>
    </section>

    <section id="materials" className="materials">
      <div className="material-title"><p className="eyebrow">04 / THE PALETTE</p><h2>What was<br/><i>makeup made of?</i></h2><p>Ancient cosmetics were closer to a small material laboratory than a modern makeup bag.</p></div>
      <div className="material-grid">
        <div className="material big"><span className="material-symbol">●</span><strong>GALENA</strong><small>DARK MINERAL PIGMENT</small><p>A lead-bearing mineral used in ancient Egyptian eye cosmetics. Museum records identify it as a major ingredient in black kohl.</p></div>
        <div className="material"><span className="material-symbol green">◆</span><strong>MALACHITE</strong><small>GREEN MINERAL PIGMENT</small><p>Ground to produce green eye paint.</p></div>
        <div className="material"><span className="material-symbol red">●</span><strong>OCHRE</strong><small>EARTH PIGMENT</small><p>Natural earth pigments supplied warm red and yellow tones.</p></div>
        <div className="material"><span className="material-symbol gold">✦</span><strong>OILS + UNGUENTS</strong><small>TEXTURE + SCENT</small><p>Oils and ointments were part of ancient personal-care practices.</p></div>
      </div>
    </section>

    <section className="quote"><div className="quote-mark">“</div><blockquote>When the object survives, the ritual becomes visible.</blockquote><p className="quote-credit">A museum-led way of reading beauty history</p><div className="quote-rule"/></section>

    <section id="myths" className="myths">
      <div className="section-head"><div><p className="eyebrow">05 / MYTHS & FACTS</p><h2>Let's clear<br/><i>the powder.</i></h2></div><p>Tap a card to reveal the historical context.</p></div>
      <div className="fact-grid">{facts.map((f,i)=><button className={open===i?"fact open":"fact"} key={f[0]} onClick={()=>setOpen(open===i?null:i)}><span>0{i+1}</span><div><h3>{f[0]}</h3><p>{f[1]}</p></div><b>{open===i?"−":"+"}</b></button>)}</div>
    </section>

    <footer>
      <div><span className="brand-mark">✦</span><h2>ART OF<br/><i>ADORNMENT</i></h2></div>
      <p>A small visual archive about a very old human ritual.<br/>Objects and claims are linked to museum records.</p>
      <div className="footer-links"><a href="https://www.metmuseum.org/art/collection/search/560226" target="_blank" rel="noreferrer">The Met ↗</a><a href="https://www.britishmuseum.org/collection/object/Y_EA29336" target="_blank" rel="noreferrer">British Museum ↗</a></div>
    </footer>
  </main>;
}
