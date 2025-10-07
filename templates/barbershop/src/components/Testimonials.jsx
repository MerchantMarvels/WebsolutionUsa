import React from "react";
import image1 from '../assets/tt1.png'
import image2 from '../assets/tt2.png'
import image3 from '../assets/tt3.png'
import "../css/testimonials.css"

const testimonials = [
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Coy Frappier",
    avatar:
      image1
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Ahmad Pasrand",
    avatar:
      image2
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Bill Gaston",
    avatar:
      image3
  }
];

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="t-inner">
        <header className="t-header">
          <h2>What Our Clients Say</h2>
          <p>Trusted by hundreds of happy customers.</p>
        </header>

        <div className="t-grid">
          {testimonials.map((t, i) => (
            <article className="t-item" key={i}>
              <div className="t-quotes" aria-hidden="true">“”</div>
              <p className="t-text">{t.quote}</p>
              <div className="t-profile">
                <img src={t.avatar} alt={`${t.name} avatar`} />
                <div className="t-name">{t.name}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
