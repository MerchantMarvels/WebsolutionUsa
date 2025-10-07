import React, { useEffect, useRef, useState } from "react";
import "../css/About.css";
import aboutImage1 from "../assets/about1.jpg";
import aboutImage2 from "../assets/about2.jpg";
import aboutImage3 from "../assets/about3.jpg";
import aboutImage4 from "../assets/about4.jpg";

import certifiedIcon from "../assets/Certified.png";
import TeamIcon from "../assets/team.png";
import CareIcon from "../assets/care.png";
import qualityIcon from "../assets/quality.png";

// Replace these with your own images or imports
const img1 = aboutImage1;
const img2 = aboutImage2;
const img3 = aboutImage3;
const img4 = aboutImage4;

const Feature = ({ icon, title, text, delay = 0 }) => {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setShow(true),
      { threshold: 0.2 }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`feature ${show ? "fade-up-in" : "fade-up"}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="feature__icon">{icon}</div>
      <div>
        <div className="feature__title">{title}</div>
        <div className="feature__text">{text}</div>
      </div>
    </div>
  );
};

const About = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 30);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="about" id="about">
      <div className="about__inner">
        {/* Left column */}
        <div className="about__left">
          <h2 className={`about__title ${loaded ? "fade-up-in" : "fade-up"}`}>
            Where Wellness <br className="br-md" /> Meets Luxury
          </h2>
          <div className="about__underline" />

          <p className={`about__para ${loaded ? "fade-up-in-delay1" : "fade-up"}`}>
            For over a decade, we've been dedicated to providing transformative
            wellness experiences that rejuvenate both body and spirit. Our sanctuary
            combines ancient healing traditions with modern therapeutic techniques.
          </p>

          <p className={`about__para ${loaded ? "fade-up-in-delay2" : "fade-up"}`}>
            Every treatment is personalized to your unique needs, delivered by
            certified therapists in an atmosphere of tranquility and care. We
            believe true beauty radiates from within, and our mission is to help
            you discover your most radiant self.
          </p>

          <div className="about__features">
            <Feature
               icon={<img src={certifiedIcon} alt="Certified Excellence" />}
              title="Certified Excellence"
              text="Award-winning spa"
              delay={60}
            />
            <Feature
              icon={<img src={TeamIcon} alt="Expert Team" />}
              title="Expert Team"
              text="Certified therapists"
              delay={120}
            />
            <Feature
              icon={<img src={CareIcon} alt="Personalized Care" />}
              title="Personalized Care"
              text="Tailored treatments"
              delay={180}
            />
            <Feature
              icon={<img src={qualityIcon} alt="Quality Products" />}
              title="Quality Products"
              text="Organic & premium"
              delay={240}
            />
          </div>
        </div>

        {/* Right column – image mosaic */}
        <div className="about__right">
          <div className="mosaic">
            <img src={img1} alt="" className="mosaic__img mosaic__img--a fade-up-in" />
            <img src={img2} alt="" className="mosaic__img mosaic__img--b fade-up-in" />
            <img src={img3} alt="" className="mosaic__img mosaic__img--c fade-up-in" />
            <img src={img4} alt="" className="mosaic__img mosaic__img--d fade-up-in" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
