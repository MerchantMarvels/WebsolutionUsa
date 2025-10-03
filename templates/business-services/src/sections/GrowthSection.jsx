import React, { useEffect, useRef, useState } from "react";
import "../styles/growth-section.css";

export default function GrowthSection() {
  const circleRef = useRef(null);
  const [deg, setDeg] = useState(0);

  // rotate on scroll
  useEffect(() => {
    const el = circleRef.current;
    if (!el) return;

    let raf;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight || 800;
        const mid = rect.top + rect.height / 2 - vh / 2;
        const range = vh * 0.8;
        const t = Math.max(-1, Math.min(1, -mid / range));
        setDeg(t * 12); // slight tilt
        raf = null;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="growth">
      <div className="growth-header">
        <span className="growth-badge">● Sustained Annual Growth</span>
        <h2 className="growth-title">
          Consistent performance <span className="muted">over the year</span>
        </h2>
        <p className="growth-sub">
          Our annual growth reflects the impact of focused strategy, innovation,
          and client trust. Each year, we continue to scale, expand our reach,
          and deliver measurable value—driven by data, insight, and consistent
          execution.
        </p>
      </div>

      <div className="growth-grid">
        {/* LEFT: Circle */}
        <div className="growth-circle-wrap" ref={circleRef}>
          <img
            src="https://cdn.prod.website-files.com/688d31d885372b14ca5e3d8b/68911ed2da0080a9f83b105b_Circle.avif"
            alt="Annual Performance Circle"
            className="growth-circle"
            style={{
              transform: `rotateZ(${deg}deg)`,
            }}
          />
          <div className="circle-text-wrap">
            <div className="circle-text">
              Annual <br /> Performance
            </div>
          </div>
        </div>

        {/* RIGHT: list */}
        <div className="growth-list">
          <div className="growth-item">
            <span className="rate purple">46% Annual Rate</span>
            <h3>Brand Strategy</h3>
            <p>
              We bring bold ideas to life through strategic marketing and design
              that captivate, connect, and convert.
            </p>
          </div>

          <div className="growth-item">
            <span className="rate pink">34% Annual Rate</span>
            <h3>Content Marketing</h3>
            <p>
              We deliver consistent, insight-driven content that builds trust,
              grows reach, and converts.
            </p>
          </div>

          <div className="growth-item">
            <span className="rate yellow">20% Annual Rate</span>
            <h3>SEO Marketing</h3>
            <p>
              We help brands rank higher, attract qualified traffic, and turn
              visitors into customers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
