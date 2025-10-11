import React from "react";
import "../css/Services.css";
import lawnIcon from "../assets/lawn.png";
import gardenIcon from "../assets/garden.png";
import treeIcon from "../assets/tree.png";
import landscapingIcon from "../assets/Landscaping.png";

const services = [
  {
    title: "Lawn Mowing",
    desc:
      "Keep your lawn neat, healthy, and perfectly trimmed with our professional mowing services.",
    icon: lawnIcon,
  },
  {
    title: "Garden Design",
    desc:
      "Custom garden layouts that blend beauty and function to create your dream outdoor space.",
    icon: gardenIcon,
  },
  {
    title: "Tree Trimming",
    desc:
      "Safe and professional tree pruning to maintain the health and beauty of your trees.",
    icon: treeIcon,
  },
  {
    title: "Landscaping",
    desc:
      "Complete outdoor transformation for homes and businesses with expert solutions.",
    icon: landscapingIcon,
  },
];

const Services = () => {
  return (
    <section id="services" className="services" aria-labelledby="services-heading">
      <div className="services__inner">
        <header className="services__head">
          <h2 id="services-heading">Our Services</h2>
          <p>
            Professional lawn care and outdoor solutions tailored to your space.
          </p>
        </header>

        <ul className="services__grid">
          {services.map((s) => (
            <li key={s.title} className="service-card">
              <span className="service-card__icon" aria-hidden="true">
               <img src={s.icon} alt="" />
              </span>
              <h3 className="service-card__title">{s.title}</h3>
              <p className="service-card__desc">{s.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Services;
