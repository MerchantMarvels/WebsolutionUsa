// src/components/sections/TeamCarousel.jsx
import { useEffect, useMemo, useState } from "react";
import "../css/TeamCarousel.css";

export default function TeamCarousel({
  members = [],
  autoplayMs = 5000,
  showDots = true,
}) {
  // responsive columns
  const getCols = () => {
    const w = typeof window !== "undefined" ? window.innerWidth : 1200;
    if (w >= 1200) return 4;
    if (w >= 900) return 3;
    if (w >= 600) return 2;
    return 1;
  };

  const [cols, setCols] = useState(getCols);
  const data = useMemo(() => members ?? [], [members]);

  // paginate by cols
  const [page, setPage] = useState(0);
  const pages = useMemo(() => {
    const out = [];
    for (let i = 0; i < data.length; i += cols) out.push(data.slice(i, i + cols));
    // keep page in range if cols changed
    if (page > Math.max(0, out.length - 1)) setPage(0);
    return out;
    // eslint-disable-next-line
  }, [data, cols]);

  // autoplay
  useEffect(() => {
    if (!pages.length) return;
    const id = setInterval(() => setPage((p) => (p + 1) % pages.length), autoplayMs);
    return () => clearInterval(id);
  }, [pages.length, autoplayMs]);

  // resize listener
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
    <section className="team-wrap">
      {/* Scoped styles so it renders right away */}


      <h2 className="title">Our Team</h2>

      <div className="team-slider">
        <div
          className="team-track"
          style={{ transform: `translateX(-${page * 100}%)` }}
        >
          {pages.map((group, i) => (
            <div className="team-page" key={i}>
              <div className="team-grid" style={{ ["--cols"]: cols }}>
                {group.map((m, k) => (
                  <article className="team-card" key={k}>
                    <img className="team-photo" src={m.photo} alt={m.name} />
                    <h3 className="team-name">{m.name}</h3>
                    <p className="team-role">{m.role}</p>
                    <div className="team-sep" />
                    <div className="team-actions">
                      {m.linkedin && (
                        <a
                          className="team-link"
                          href={m.linkedin}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${m.name} on LinkedIn`}
                          title="LinkedIn"
                        >
                          in
                        </a>
                      )}
                      {/* add more icons if needed */}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* arrows centered under the row */}
        <div className="team-arrow">
          <button className="team-btn" onClick={() => setPage((p) => (p - 1 + pages.length) % pages.length)} aria-label="Previous">‹</button>
          <button className="team-btn" onClick={() => setPage((p) => (p + 1) % pages.length)} aria-label="Next">›</button>
        </div>
      </div>

      {showDots && (
        <div className="team-dots">
          {pages.map((_, i) => (
            <span
              key={i}
              className={`team-dot ${i === page ? "is-active" : ""}`}
              onClick={() => setPage(i)}
            />
          ))}
        </div>
      )}
    </section>
  );
}
