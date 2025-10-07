import React from "react";
import "../css/services.css";
import serviceImg1 from "../assets/Haircut.jpg";
import serviceImg2 from "../assets/beard.png";
import serviceImg3 from "../assets/grooming.jpg";
import serviceImg4 from "../assets/shaves.jpg";  

import serviceIcon1 from "../assets/haircut.png";
import serviceIcon2 from "../assets/beard-icon.png";
import serviceIcon3 from "../assets/grooming-icon.png";
import serviceIcon4 from "../assets/shaves-icon.png";

const services = [
  {
    title: "Haircuts",
    desc: "Trendy, classic, or custom cuts tailored to your look.",
    icon: serviceIcon1,
    img: serviceImg1
  },
  {
    title: "Beard Styling",
    desc: "Sharp edges and smooth trims for the perfect beard.",
    icon: serviceIcon2,
    img: serviceImg2
  },
  {
    title: "Grooming Packages",
    desc: "Complete head-to-toe grooming for men on the go.",
    icon: serviceIcon3,
    img: serviceImg3
  },
  {
    title: "Shaves",
    desc: "Luxurious hot towel shaves and precision finish.",
    icon: serviceIcon4,
    img: serviceImg4
  }
];

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="services__inner">
        <header className="services__header">
          <h2>Our Services</h2>
          <p>From classic cuts to modern styles, we've got you covered.</p>
        </header>

        <div className="services__grid">
          {services.map((s, i) => (
            <article className="service-card" key={i}>
              <div className="service-card__media">
                <img src={s.img} alt={`${s.title} preview`} />
                <img className="service-card__icon" src={s.icon} alt={`${s.title} icon`} />
                {/* <span className="service-card__icon" aria-hidden="true">{s.icon}</span> */}
              </div>

              <div className="service-card__body">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
