import { useEffect, useRef, useState } from "react";
import "../styles/testimonials.css";
import testImg1 from "../assets/slider-img-02.jpg"
/* you can replace these images with your own assets */
const SLIDES = [
  {
    img: testImg1,
    quote:
      "My cat is very shy, but the staff made her feel so comfortable. I was worried about how she’d handle her first grooming session, but she came home calm and looking amazing! I’ll definitely be back.",
    name: "Sarah M.",
    role: "Golden Retriever Owner"
  },
  {
    img: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1200&auto=format&fit=crop",
    quote:
      "They handled our pup with so much care. The bath & brush left him fluffy and smelling great for days!",
    name: "Daniel P.",
    role: "Goldendoodle Owner"
  },
  {
    img: "https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1200&auto=format&fit=crop",
    quote:
      "Quick nail trim, zero stress. Booking again next month.",
    name: "Leah R.",
    role: "Rescue Cat Owner"
  }
];

export default function Testimonials({
  autoPlay = true,
  interval = 6000
}) {
  const [index, setIndex] = useState(0);
  const timer = useRef(null);
  const wrap = n => (n + SLIDES.length) % SLIDES.length;

  const go = dir => setIndex(i => wrap(i + dir));
  const to  = n => setIndex(() => wrap(n));

  useEffect(() => {
    if (!autoPlay) return;
    timer.current && clearInterval(timer.current);
    timer.current = setInterval(() => go(1), interval);
    return () => clearInterval(timer.current);
  }, [index, autoPlay, interval]);

  return (
    <section id="testimonials" className="pg-testimonials" aria-labelledby="tst-title">
      <div className="pg-testimonials__head">
        <p className="eyebrow">testimonials</p>
        <h2 id="tst-title" className="title">Don’t just our word for it</h2>
      </div>

      <div
        className="pg-tst__stage"
        onMouseEnter={() => timer.current && clearInterval(timer.current)}
        onMouseLeave={() => autoPlay && (timer.current = setInterval(() => go(1), interval))}
      >
        {SLIDES.map((s, i) => (
          <article
            key={i}
            className={`pg-tst__slide ${i === index ? "is-active" : "is-hidden"}`}
            aria-hidden={i !== index}
          >
            <div className="pg-tst__media">
              <img src={s.img} alt="" loading="lazy" />
            </div>

            <div className="pg-tst__content">
              <blockquote className="pg-tst__quote">
                “{s.quote}”
              </blockquote>
              <p className="pg-tst__name">{s.name}</p>
              <p className="pg-tst__role">{s.role}</p>
            </div>
          </article>
        ))}

        <div className="pg-tst__controls" aria-label="testimonial controls">
          <button
            className="pg-tst__arrow"
            onClick={() => go(-1)}
            aria-label="Previous testimonial"
          >
            ←
          </button>
          <div className="pg-tst__dots" role="tablist" aria-label="Choose testimonial">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === index}
                className={`pg-tst__dot ${i === index ? "is-active" : ""}`}
                onClick={() => to(i)}
              />
            ))}
          </div>
          <button
            className="pg-tst__arrow"
            onClick={() => go(1)}
            aria-label="Next testimonial"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
