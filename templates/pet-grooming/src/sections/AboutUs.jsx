import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import "../styles/about.css";
import sliderImg1 from "../assets/slider-Img-01.jpg";
import sliderImg2 from "../assets/slider-Img-02.jpg";
import sliderImg3 from "../assets/slider-Img-03.jpg";

  const TEAM = [
    { name: "Emma Reed", role: "Founder", img: sliderImg1  },
    { name: "Noah Patel", role: "Groomer", img: sliderImg2 },
    { name: "Mia Johnson", role: "Vet Assistant", img: sliderImg3 },
    { name: "Liam Chen", role: "Stylist", img: sliderImg1 },
    { name: "Ava García", role: "Trainer", img: sliderImg2 },
    { name: "Ethan Rossi", role: "Bath Specialist", img: sliderImg3 },
    { name: "Sofia Nguyen", role: "Reception", img:sliderImg1},
    { name: "Oliver Khan", role: "Stylist", img: sliderImg2 },
  ];

export default function AboutUs() {
  const sliderRef = useRef(null); // observe the container, not the super-wide marquee

  useEffect(() => {
    const container = sliderRef.current;
    if (!container) return;

    const marquee = container.querySelector(".pg-slider__marquee");
    if (!marquee) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        marquee.style.animationPlayState = entry.isIntersecting ? "running" : "paused";
      },
      { threshold: 0 } // any intersection counts (works great on mobile)
    );

    io.observe(container);
    return () => io.disconnect();
  }, []);

  return (
    <section id="grooming-about" className="pg-about" aria-labelledby="about-title">
      <div className="pg-about__wrap">
        <p className="pg-about__eyebrow">about us</p>
        <h2 id="about-title" className="pg-about__title">
          Bunch of loving people<br />with passion to pets
        </h2>
        <p className="pg-about__lead">
          Nam commodo suscipit quam. Nulla sit amet est. Aenean viverra rhoncus pede.
        </p>
        <div className="pg-about__cta">
          <Link className="pg-btn" to="/about">About us</Link>
        </div>
      </div>

      {/* slider */}
      <div className="pg-slider" ref={sliderRef} role="region" aria-label="Our team">
        <div className="pg-slider__marquee">
          <ul className="pg-slider__track">
            {TEAM.map((m, i) => (
              <li className="pg-card" key={`a-${i}`}>
                <figure><img src={m.img} alt={`${m.name}, ${m.role}`} loading="lazy" /></figure>
              </li>
            ))}
          </ul>
          <ul className="pg-slider__track" aria-hidden="true">
            {TEAM.map((m, i) => (
              <li className="pg-card" key={`b-${i}`}>
                <figure><img src={m.img} alt="" aria-hidden="true" /></figure>
              </li>
            ))}
          </ul>
        </div>
        
      </div>
    </section>
  );
}
