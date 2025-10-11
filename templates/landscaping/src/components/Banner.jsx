import React, { useEffect, useRef, useState } from "react";
import "../css/Banner.css";

const Stat = ({ label, to, suffix = "+" }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState(0);

  // Observe visibility
  useEffect(() => {
    const io = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.4 }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`stat ${visible ? "fade-up-in" : "fade-up"}`}>
      <div className="stat-number">
        {value}
        {suffix}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
};

const Banner = () => {
  // trigger initial fade-up on mount
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="hero">
      <div className="hero__overlay" />
      <div className="hero__content">
        <h1 className={`hero__title ${loaded ? "fade-up-in" : "fade-up"}`}>
          Transform Your Lawn into a
          <br className="br-md" />
          Beautiful, Green Paradise
        </h1>

        <p
          className={`hero__subtitle ${
            loaded ? "fade-up-in-delay1" : "fade-up"
          }`}
        >
          Professional lawn mowing, garden design, and landscaping
          <br className="br-md" /> services you can trust.
        </p>

        <button
          className={`hero__cta ${loaded ? "fade-up-in-delay2" : "fade-up"}`}
          onClick={() => window.alert("Booking flow here")}
        >
          Get a Free Estimate
        </button>

        <button
          className={`hero__cta hero__cta2 ${loaded ? "fade-up-in-delay2" : "fade-up"}`}
          onClick={() => window.alert("Booking flow here")}
        >
        Request a Quote
        </button>
      </div>
    </section>
  );
};

export default Banner;
