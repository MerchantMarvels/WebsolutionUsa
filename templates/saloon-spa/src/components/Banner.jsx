import React, { useEffect, useRef, useState } from "react";
import "../css/Banner.css";
import calendarIcon from "../assets/calendar-icon.png";
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

  // Count up when visible
  useEffect(() => {
    if (!visible) return;

    const duration = 1200; // ms
    const start = performance.now();

    const step = (now) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
      setValue(Math.floor(eased * to));
      if (t < 1) requestAnimationFrame(step);
      else setValue(to);
    };

    const r = requestAnimationFrame(step);
    return () => cancelAnimationFrame(r);
  }, [visible, to]);

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
          Rejuvenate Your Mind,<br className="br-md" /> Body &amp; Soul
        </h1>

        <p className={`hero__subtitle ${loaded ? "fade-up-in-delay1" : "fade-up"}`}>
          Experience luxury spa treatments designed to restore
          your natural glow.
        </p>

        <button
          className={`hero__cta ${loaded ? "fade-up-in-delay2" : "fade-up"}`}
          onClick={() => window.alert("Booking flow here")}
        >
          <span className="hero__cta-icon" aria-hidden><img src={calendarIcon} alt="Calendar Icon" /></span>
          Book Your Session Today
        </button>

        {/* Stats */}
        <div className="hero__stats">
          <Stat label="Years Experience" to={10} />
          <Stat label="Happy Clients" to={5000} />
          <Stat label="Certified Staff" to={100} suffix="%" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
