import { Link } from "react-router-dom";
import "../styles/services.css";

/* Simple inline icons so you don't need any library */
const IcHeart = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M20.8 4.6a5 5 0 0 0-7.1 0L12 6.3l-1.7-1.7a5 5 0 1 0-7.1 7.1l1.7 1.7L12 22l7.1-7.1 1.7-1.7a5 5 0 0 0 0-7.1Z"
      stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
  </svg>
);
const IcTub = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M4 14h16m-14 0v2a4 4 0 0 0 4 4h4a4 4 0 0 0 4-4v-2M7 6a2 2 0 1 1 4 0v8"
      stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);
const IcScissors = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
    <circle cx="5" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.6"/>
    <circle cx="5" cy="18" r="2.5" stroke="currentColor" strokeWidth="1.6"/>
    <path d="M7 7l14 9M7 17l7-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);

const SERVICES = [
  {
    title: "Full grooming",
    desc:
      "A comprehensive service that includes a bath, haircut, nail trimming, ear cleaning, and brushing for a fresh, clean look, ensuring your pet feels their best.",
    icon: <IcHeart />,
    tint: "blue"
  },
  {
    title: "Bath & Brush",
    desc:
      "A soothing bath with pet-friendly shampoo, followed by brushing to remove loose fur, prevent matting, and leave your pet looking refreshed.",
    icon: <IcTub />,
    tint: "yellow"
  },
  {
    title: "Nail Trimming",
    desc:
      "Quick and gentle nail clipping to keep your pet’s paws healthy and prevent discomfort or issues when walking.",
    icon: <IcScissors />,
    tint: "red"
  }
];

export default function Services() {
  return (
    <section id="services" className="pg-services" aria-labelledby="services-title">
      <div className="pg-services__head">
        <p className="eyebrow">services</p>
        <h2 id="services-title" className="title">We can help your buddies</h2>
      </div>

      <ul className="pg-services__grid">
        {SERVICES.map((s, i) => (
          <li key={i} className="pg-card">
            <div className={`pg-card__icon tint-${s.tint}`} aria-hidden>
              {s.icon}
            </div>
            <h3 className="pg-card__title">{s.title}</h3>
            <p className="pg-card__desc">{s.desc}</p>
            <Link to="/services" className="pg-card__more">read more</Link>
          </li>
        ))}
      </ul>

      <div className="pg-services__cta">
        <Link to="/services" className="pg-btn">see all services</Link>
      </div>
    </section>
  );
}
