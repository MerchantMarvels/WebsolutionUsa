import React, { useEffect, useRef, useState } from "react";
import "../css/Services.css";
import hairIcon from "../assets/haircut.png";
import starIcon from "../assets/star.png";
import handIcon from "../assets/hand.png";
import brushIcon from "../assets/brush.png";
import crownIcon from "../assets/crown.png";
import dropIcon from "../assets/drop.png";

const servicesData = [
  {
    icon: hairIcon,
    title: "Hair Styling",
    desc: "Professional hair cutting, styling, coloring and treatment services",
    price: 800,
    duration: "45–90 mins",
  },
  {
    icon: starIcon,
    title: "Facial Treatments",
    desc: "Rejuvenating facials with organic products for glowing skin",
    price: 1200,
    duration: "60 mins",
  },
  {
    icon: handIcon,
    title: "Massage Therapy",
    desc: "Deep tissue, Swedish, and aromatherapy massage sessions",
    price: 1500,
    duration: "60–90 mins",
  },
  {
    icon: brushIcon,
    title: "Manicure & Pedicure",
    desc: "Complete nail care with luxury treatments and polish",
    price: 700,
    duration: "45 mins",
  },
  {
    icon: crownIcon,
    title: "Bridal Makeup",
    desc: "Complete bridal package with hair, makeup and styling",
    price: 3500,
    duration: "3–4 hours",
  },
  {
    icon: dropIcon,
    title: "Body Spa",
    desc: "Full body scrub, wrap and moisturizing treatments",
    price: 2500,
    duration: "90 mins",
  },
];

const ServiceCard = ({ icon, title, desc, price, duration }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.2 }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`service-card ${visible ? "fade-up-in" : "fade-up"}`}>
      <div className="service-icon"><img src={icon} alt='' /></div>
      <div className="service-price">
        <span>From</span> ₹{price}
      </div>
      <h3 className="service-title">{title}</h3>
      <p className="service-desc">{desc}</p>
      <div className="service-duration">{duration}</div>
    </div>
  );
};

const Services = () => {
  return (
    <section className="services-section" id="services">
      <h2 className="services-heading">Our Services</h2>
      <p className="services-subtext">
        Indulge in our curated selection of premium spa and salon treatments
      </p>

      <div className="services-grid">
        {servicesData.map((s, i) => (
          <ServiceCard key={i} {...s} />
        ))}
      </div>
    </section>
  );
};

export default Services;
