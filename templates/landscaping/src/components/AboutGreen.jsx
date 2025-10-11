import React, { useEffect, useRef, useState } from "react";
import "../css/AboutGreen.css";

import about1 from "../assets/before3.jpg";
import about2 from "../assets/after3.jpg";
import ecoIcon from "../assets/leaf.png";
import certIcon from "../assets/Certified.png";
import expIcon from "../assets/team.png";

const Counter = ({ to = 100, duration = 1400, suffix = "", prefix = "" }) => {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        if (prefersReduced) return setVal(to);

        const start = performance.now();
        const tick = (now) => {
          const t = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - t, 3);
          setVal(Math.round(to * eased));
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    });

    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {val}
      {suffix}
    </span>
  );
};

const AboutGreen = () => {
  return (
    <section className="ag-about" id="about">
      <div className="ag-inner">
        {/* Left Section */}
        <div className="ag-left">
          <h2>About GreenScape Experts</h2>
          <p className="ag-lead">
            With over 10 years of experience, our certified team delivers eco-friendly lawn care and landscaping solutions that transform outdoor spaces into beautiful, sustainable environments.
          </p>
          <p className="ag-sub">
            We take pride in our commitment to environmental responsibility, using sustainable practices and eco-friendly products that are safe for your family, pets, and the planet.
          </p>

          <div className="ag-features">
            <div className="ag-feature">
              <div className="ag-feature__icon">
                <img src={ecoIcon} alt="eco" />
              </div>
              <div>
                <div className="ag-feature__title">Eco-Friendly</div>
                <div className="ag-feature__text">Sustainable methods</div>
              </div>
            </div>

            <div className="ag-feature">
              <div className="ag-feature__icon">
                <img src={certIcon} alt="certified" />
              </div>
              <div>
                <div className="ag-feature__title">Certified</div>
                <div className="ag-feature__text">Licensed experts</div>
              </div>
            </div>

            <div className="ag-feature">
              <div className="ag-feature__icon">
                <img src={expIcon} alt="experienced" />
              </div>
              <div>
                <div className="ag-feature__title">Experienced</div>
                <div className="ag-feature__text">10+ years serving</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="ag-right">
          <div className="ag-mosaic">
            <div className="ag-pill ag-pill--top">
              <div className="ag-pill__big">
                <Counter to={10} duration={1500} />
              </div>
              <div className="ag-pill__small">Years of <br></br>Experience</div>
            </div>

            <img src={about1} alt="Project Before" className="ag-img ag-img--a" />
            <img src={about2} alt="Project After" className="ag-img ag-img--b" />

            <div className="ag-pill ag-pill--bottom">
              <div className="ag-pill__big">
                <Counter to={100} duration={1600} suffix="+" />
              </div>
              <div className="ag-pill__small">Projects <br></br>Completed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutGreen;
