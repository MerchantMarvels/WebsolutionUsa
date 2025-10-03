import React, { useEffect, useRef } from "react";
import "../styles/testimonials-section.css";

const Avatar = ({ src, alt }) => (
  <img className="tst-avatar" src={src} alt={alt} loading="lazy" />
);

/** Vertical auto-scroll column (seamless) */
function VerticalColumn({ items, reverse = false, speed = 24 }) {
  const trackRef = useRef(null);
  const wrapRef = useRef(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const track = trackRef.current;
    if (!wrap || !track) return;

    // build list (duplicate for seamless loop)
    track.innerHTML = "";
    const makeCard = (c, key) => {
      const el = document.createElement("article");
      el.className = "tst-card";
      el.innerHTML = `
        <header class="tst-card-head">
          <img class="tst-avatar" src="${c.avatar}" alt="${c.name}" />
          <div>
            <div class="tst-name">${c.name}</div>
            <div class="tst-role">${c.role}</div>
          </div>
        </header>
        <div class="tst-sep"></div>
        <p class="tst-quote">${c.quote}</p>
      `;
      return el;
    };
    const src = reverse ? [...items].reverse() : items;

    src.forEach((c, i) => track.appendChild(makeCard(c, i)));
    // duplicate until track is tall enough
    while (track.scrollHeight < wrap.clientHeight * 2) {
      src.forEach((c, i) => track.appendChild(makeCard(c, "dup" + i)));
    }

    let y = 0;
    let last = performance.now();
    let raf;
    const dir = reverse ? -1 : 1; // up vs down

    const step = (now) => {
      const dt = (now - last) / 1000;
      last = now;

      // px per sec
      y -= dir * speed * dt;
      track.style.transform = `translate3d(0, ${y}px, 0)`;

      // recycle first/last child depending on direction
      const first = track.firstElementChild;
      const lastEl = track.lastElementChild;

      if (dir === 1) {
        // moving down: when first card fully above, push to end
        if (first && first.getBoundingClientRect().bottom <= wrap.getBoundingClientRect().top) {
          y += first.offsetHeight + parseFloat(getComputedStyle(first).marginBottom || 0);
          track.appendChild(first);
          track.style.transform = `translate3d(0, ${y}px, 0)`;
        }
      } else {
        // moving up: when last card fully below, move to start
        if (lastEl && lastEl.getBoundingClientRect().top >= wrap.getBoundingClientRect().bottom) {
          y -= lastEl.offsetHeight + parseFloat(getComputedStyle(lastEl).marginBottom || 0);
          track.prepend(lastEl);
          track.style.transform = `translate3d(0, ${y}px, 0)`;
        }
      }

      raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);

    const onEnter = () => track.style.animationPlayState = "paused";
    const onLeave = () => track.style.animationPlayState = "running";
    // pause by toggling a flag via CSS? simpler: add/remove a class to stop rAF — but we keep it running and pause via pointer events speed 0
    // easier: on hover, set speed to 0 by setting data-paused
    let paused = false;
    const setPaused = (p) => { paused = p; };
    wrap.addEventListener("mouseenter", () => setPaused(true));
    wrap.addEventListener("mouseleave", () => setPaused(false));

    // replace step to respect paused (without rebuilding)
    const oldStep = step;
    cancelAnimationFrame(raf);
    const stepped = (now) => {
      let dt = (now - last) / 1000;
      last = now;
      if (paused) dt = 0;
      // inline step body (copied, but simpler)
      y -= dir * speed * dt;
      track.style.transform = `translate3d(0, ${y}px, 0)`;

      const first2 = track.firstElementChild;
      const last2 = track.lastElementChild;

      if (dir === 1) {
        if (first2 && first2.getBoundingClientRect().bottom <= wrap.getBoundingClientRect().top) {
          y += first2.offsetHeight + parseFloat(getComputedStyle(first2).marginBottom || 0);
          track.appendChild(first2);
          track.style.transform = `translate3d(0, ${y}px, 0)`;
        }
      } else {
        if (last2 && last2.getBoundingClientRect().top >= wrap.getBoundingClientRect().bottom) {
          y -= last2.offsetHeight + parseFloat(getComputedStyle(last2).marginBottom || 0);
          track.prepend(last2);
          track.style.transform = `translate3d(0, ${y}px, 0)`;
        }
      }
      raf = requestAnimationFrame(stepped);
    };
    raf = requestAnimationFrame(stepped);

    return () => cancelAnimationFrame(raf);
  }, [items, reverse, speed]);

  return (
    <div className="tst-col carousel-vert" ref={wrapRef}>
      <div className="tst-ghost" aria-hidden="true">“ ”</div>
      <div className="tst-track" ref={trackRef} />
    </div>
  );
}

export default function TestimonialsSection() {
  const left = [
    {
      name: "Max Turner",
      role: "Marketing Manager",
      quote:
        "Their innovative thinking and clear strategy elevated our brand far beyond expectations. The collaboration was smooth, deadlines were met with ease, and the end results consistently surpassed what we envisioned with the best outcome.",
      avatar: "https://i.pravatar.cc/80?img=12",
    },
    {
      name: "Zoe Carter",
      role: "Growth Lead",
      quote:
        "Clear communication and reliable delivery. The team acted like true partners invested in our success.",
      avatar: "https://i.pravatar.cc/80?img=29",
    },
  ];

  const right = [
    {
      name: "Ethan Cole",
      role: "Brand Strategist",
      quote:
        "From concept to execution, their creative and strategic approach made a real impact. We’re thrilled with the results.",
      avatar: "https://i.pravatar.cc/80?img=33",
    },
    {
      name: "Leo Bennett",
      role: "Creative Director",
      quote:
        "They brought creativity and strategy that elevated our campaigns. The team was agile and thoughtful at every step.",
      avatar: "https://i.pravatar.cc/80?img=47",
    },
    {
      name: "Priya Shah",
      role: "Product Marketing",
      quote:
        "Strategy backed by data and flawless execution. Exactly what we needed to scale.",
      avatar: "https://i.pravatar.cc/80?img=24",
    },
  ];

  const featured = {
    badge: "CEO of Merkil",
    img:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=800&auto=format&fit=crop",
    quote:
      "Their creativity and strategic approach took our brand to the next level. Truly impressed with the results and the entire project.",
    stats: [
      { value: "98%", label: "Satisfied Client Rate" },
      { value: "08+", label: "Brands experiences." },
    ],
  };

  return (
    <section className="tst">
      <div className="tst-header">
        <span className="tst-badge">● Client Feedback</span>
        <h2 className="tst-title">
          Trusted by brands worldwide
          <br />
          <span className="tst-dim">and growing every day</span>
        </h2>
      </div>

      <div className="tst-grid">
        {/* LEFT — vertical carousel (scrolling down) */}
        <VerticalColumn items={left} reverse={false} speed={22} />

        {/* CENTER — unchanged */}
        <div className="tst-featured">
          <div className="tst-featured-top">
            <span className="tst-chip">{featured.badge}</span>
          </div>
          <img className="tst-featured-img" src={featured.img} alt="Client portrait" />
          <blockquote className="tst-featured-quote">
            “{featured.quote}”
          </blockquote>
          <div className="tst-stats">
            {featured.stats.map((s, i) => (
              <div className="tst-stat" key={i}>
                <div className="tst-stat-value">{s.value}</div>
                <div className="tst-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — vertical carousel (scrolling up for contrast) */}
        <VerticalColumn items={right} reverse={true} speed={26} />
      </div>
    </section>
  );
}
