import React, { useEffect, useRef } from "react";
import "../styles/portfolio-section.css";

// demo images — replace with yours
import pf01 from "../assests/pf-01.jpg";
import pf02 from "../assests/pf-02.jpg";
import pf03 from "../assests/pf-03.jpg";

const DotIcon = (props) => (
  <svg viewBox="0 0 12 12" aria-hidden="true" {...props}>
    <circle cx="6" cy="6" r="5" />
  </svg>
);

export default function PortfolioSection() {
  const projects = [
    {
      id: "01",
      year: "2025",
      title: "Lukox. Project Amplify",
      desc:
        "We combine strategy, creativity, and data to deliver impactful marketing solutions.",
      tags: ["Social Media Branding", "Rebranding"],
      images: [pf03, pf01, pf02],
    },
    {
      id: "02",
      year: "2024",
      title: "Vector. Identity Refresh",
      desc:
        "A modern visual system that strengthened recall and improved conversion across channels.",
      tags: ["Identity", "System"],
      images: [pf02, pf03, pf01],
    },
    {
      id: "03",
      year: "2024",
      title: "Azurey. Campaign Sprint",
      desc:
        "Fast GTM with measurable lift in CTR and assisted revenue within 6 weeks.",
      tags: ["Campaign", "Growth"],
      images: [pf01, pf02, pf03],
    },
  ];

  const containerRef = useRef(null);
  const cardRefs = useRef([]);
  const headerRef = useRef(null); // NEW: measure header

  // sticky stack progress + dynamic top offset
  useEffect(() => {
    const cards = cardRefs.current.filter(Boolean);
    if (!cards.length) return;

    const isMobile = () => window.matchMedia("(max-width: 900px)").matches;

    // distance from viewport top where the cards should stick (header height + small gap)
    let stickyTop = 120;

    const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

    const measureSticky = () => {
      const headerEl = headerRef.current;
      stickyTop = headerEl ? headerEl.getBoundingClientRect().height + 16 : 120;
      if (containerRef.current) {
        containerRef.current.style.setProperty("--stick", `${stickyTop}px`);
      }
    };

    const tick = () => {
      if (isMobile()) {
        cards.forEach((el) => el.style.setProperty("--p", "0"));
        return;
      }

      // progress for card i is how much the NEXT card overlaps the current one (0..1)
      for (let i = 0; i < cards.length; i++) {
        const el = cards[i];
        const next = cards[i + 1];
        if (!next) {
          el.style.setProperty("--p", "0");
          continue;
        }

        const rect = el.getBoundingClientRect();
        const nextRect = next.getBoundingClientRect();

        const h = rect.height;
        const overlap = (stickyTop + h) - nextRect.top; // px overlapped by next
        const p = clamp(overlap / h, 0, 1);

        el.style.setProperty("--p", p.toFixed(4));
      }
    };

    let raf;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(tick);
    };

    const onResize = () => {
      measureSticky();
      onScroll();
    };

    measureSticky();
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(raf);
    };
  }, []);

  // simple one-time reveal (optional)
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("is-visible")),
      { threshold: 0.25 }
    );
    cardRefs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="portfolio">
      {/* header */}
      <div className="portfolio-header" ref={headerRef}>
        <div className="left">
          <span className="badge">
            <DotIcon className="badge-dot" />
            <span>Selected Projects</span>
          </span>

          <h2 className="title">
            Portfolio of impactful and
            <br />
            <span className="title-dim">successful campaigns</span>
          </h2>
        </div>

        <p className="intro">
          We combine strategy, creativity, and data to deliver impactful
          marketing solutions. From discovery to execution.
        </p>
      </div>

      {/* sticky stack */}
      <div className="stack" ref={containerRef}>
        {projects.map((p, i) => (
          <article
            key={p.id}
            className="project stack-item"
            // IMPORTANT: later items should overlay earlier ones
            style={{ zIndex: i + 1 }}
            ref={(el) => (cardRefs.current[i] = el)}
          >
            <div className="project-info">
              <div className="project-id">{p.id} //</div>
              <div className="project-meta">
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.desc}</p>
                <a href="#" className="project-link">
                  <span>→</span> View Project
                </a>
              </div>
            </div>

            <div className="project-gallery">
              <div className="tags">
                {p.tags.map((t, idx) => (
                  <span key={idx} className="tag">
                    {t}
                  </span>
                ))}
              </div>
              <div className="images">
                {p.images.map((src, idx) => (
                  <img key={idx} src={src} alt="" loading="lazy" />
                ))}
              </div>
              <div className="year">© {p.year}</div>
            </div>
          </article>
        ))}
      </div>

      {/* CTA */}
      <a href="#" className="project-large-link">
        <div className="project-link-arrow-block">
          <div className="project-link-arrow-group">
            <img
              src="https://cdn.prod.website-files.com/688d31d885372b14ca5e3d8b/68911b1699c75da88a7d6546_Arrow.svg"
              alt="Arrow"
              className="project-link-arrow"
            />
          </div>
        </div>
        <div className="project-link-text-wrap">
          <div className="project-link-text-group">
            <div className="text-style-h1 project-link-title">View All Projects</div>
          </div>
        </div>
      </a>
    </section>
  );
}
