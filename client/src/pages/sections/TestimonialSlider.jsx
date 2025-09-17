// src/components/sections/TestimonialSlider.jsx
import { useEffect, useMemo, useState } from "react";
import "../css/testimonials.css";

export default function TestimonialSlider({ items = [], autoplayMs = 4000 }) {
  const data = useMemo(() => items ?? [], [items]);

  // cols = 3 (≥900px) or 1 (<900px)
  const getCols = () => (typeof window !== "undefined" && window.innerWidth >= 900 ? 3 : 1);
  const [cols, setCols] = useState(getCols);
  const [page, setPage] = useState(0);

  // group into pages based on cols
  const pages = useMemo(() => {
    const out = [];
    for (let i = 0; i < data.length; i += cols) out.push(data.slice(i, i + cols));
    // keep current page in range when cols changes
    if (page > Math.max(0, out.length - 1)) setPage(0);
    return out;
  }, [data, cols]); // eslint-disable-line

  // autoplay
  useEffect(() => {
    if (!pages.length) return;
    const id = setInterval(() => setPage((p) => (p + 1) % pages.length), autoplayMs);
    return () => clearInterval(id);
  }, [pages.length, autoplayMs]);

  // handle resize (debounced-ish)
  useEffect(() => {
    let t;
    const onResize = () => {
      clearTimeout(t);
      t = setTimeout(() => setCols(getCols()), 120);
    };
    window.addEventListener("resize", onResize);
    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  if (!data.length) return null;

  const prev = () => setPage((p) => (p - 1 + pages.length) % pages.length);
  const next = () => setPage((p) => (p + 1) % pages.length);

  return (
    <section className="ts-wrap">

      <span className="small-title">Our Testimonials</span>
      <h2 className="title">
          What Our Customers Say
      </h2>

      <div className="ts-slider">
        <button className="ts-arrow ts-arrow--left" onClick={prev} aria-label="Previous">‹</button>

        <div className="ts-track" style={{ transform: `translateX(-${page * 100}%)` }}>
          {pages.map((group, i) => (
            <div className="ts-page" key={i}>
              <div className="ts-grid" style={{ ["--cols"]: cols }}>
                {group.map((t, k) => (
                  <article className="ts-card" key={k}>
                    <div className="ts-content">
                        <div className="ts-stars">{"★".repeat(t.rating || 5)}</div>
                        <p className="ts-quote">“{t.quote}”</p>
                    </div>
                        <div className="ts-author-div">
                        <div className="ts-author">
                        <img src={t.avatar} alt={t.name} />
                        <div>
                            <h4>{t.name}</h4>
                            <span>{t.role}</span>
                        </div>
                        </div>
                        </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>

        <button className="ts-arrow ts-arrow--right" onClick={next} aria-label="Next">›</button>
      </div>

      <div className="ts-dots">
        {pages.map((_, i) => (
          <span key={i} className={`ts-dot ${i === page ? "is-active" : ""}`} onClick={() => setPage(i)} />
        ))}
      </div>
    </section>
  );
}
