import React, { useEffect, useState } from "react";
import "../css/hero.css";
import PhoneIcon from "../assets/phone.png";
import ClockIcon from "../assets/time.png";
import pinIcon from "../assets/pin.png";
/** Reusable typewriter hook */
function useTypewriter(words, { typeSpeed = 90, deleteSpeed = 50, delay = 1200 } = {}) {
  const [text, setText] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx % words.length];

    const tick = () => {
      if (!isDeleting) {
        // typing
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) {
          setTimeout(() => setIsDeleting(true), delay);
          return;
        }
      } else {
        // deleting
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setIsDeleting(false);
          setWordIdx((i) => (i + 1) % words.length);
        }
      }
    };

    const timeout = setTimeout(tick, isDeleting ? deleteSpeed : typeSpeed);
    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIdx, words, typeSpeed, deleteSpeed, delay]);

  return text;
}

export default function HeroBanner() {
  const typed = useTypewriter(["Street Food", "Gourmet Bites", "Local Flavor", "Street Food"], {
    typeSpeed: 70,
    deleteSpeed: 40,
    delay: 900,
  });

  return (
    <section className="hero">
      <div className="hero__bg" />
      <div data-aos="fade-right"  className="hero__content">
        <div   className="hero__badge">
          <span className="dot" /> Fresh &amp; Local Ingredients
        </div>

        <h1 className="hero__title">
          <span className="hero__typed">{typed}</span>
          <span className="hero__comma">,</span>
          <br />
          <span className="hero__accent">Elevated</span>
        </h1>

        <p className="hero__subtitle">
          Experience gourmet flavors on wheels. From farm to truck to your table.
        </p>

        <div className="hero__ctas">
          <a className=" book-btn " href="#order">
            <span>Order Now</span>
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M13 5l7 7-7 7M5 12h14" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          </a>

          <a className="btn btn--ghost" href="#find">
            <img src={pinIcon} alt="location" />
            <span>Find Us</span>
          </a>
        </div>

        <div className="hero__info">
          <div className="banner-chip">
            <div className="chip__icon">
              <img src={PhoneIcon} alt="time" />
            </div>
            <div>
              <div className="chip__label">Call us</div>
              <div className="chip__value">(555) 123-4567</div>
            </div>
          </div>

          <div className="banner-chip">
            <div className="chip__icon">
              <img src={ClockIcon} alt="time" />
            </div>
            <div>
              <div className="chip__label">Open</div>
              <div className="chip__value">Mon–Sat: 11AM – 9PM</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
