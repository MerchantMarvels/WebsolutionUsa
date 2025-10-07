import React from "react";
import "../css/gallery.css";
import Before1Img from '../assets/b1.jpg';
import After1Img from '../assets/a1.jpg';
import Before2Img from '../assets/b2.png';
import After2Img from '../assets/a2.jpg';
import Before3Img from '../assets/b3.jpg';
import After3Img from '../assets/a3.jpg';
import Before4Img from '../assets/b4.png';
import After4Img from '../assets/a4.jpg';

const items = [
  {
    title: "Modern Fade",
    before:
      Before1Img,
    after:
      After1Img
  },
  {
    title: "Beard Sculpting",
    before:
      Before2Img,
    after:
      After2Img
  },
  {
    title: "Classic Cut",
    before:
      Before3Img,
    after:
      After3Img
  },
  {
    title: "Full Grooming",
    before:
      Before4Img,
    after:
      After4Img
  }
];

export default function BeforeAfterGallery() {
  return (
    <section className="ba" id="gallery">
      <div className="ba__inner">
        <header className="ba__header">
          <h2>Before &amp; After Gallery</h2>
          <p>See the transformation. Get inspired.</p>
        </header>

        <div className="ba__grid">
          {items.map((it, i) => (
            <article className="ba-card" key={i}>
              <div className="ba-media">
                <div className="ba-img is-before">
                  <img src={it.before} alt={`${it.title} — before`} />
                  <span className="ba-badge before">Before</span>
                </div>
                <div className="ba-img is-after">
                  <img src={it.after} alt={`${it.title} — after`} />
                  <span className="ba-badge after">After</span>
                </div>
              </div>
              <div className="ba-meta">
                <h3>{it.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
