import { Link } from "react-router-dom";
import "../styles/pricing.css";

const PLANS = [
  {
    title: "Basic grooming",
    price: 150,
    color: "blue",
    blurb:
      "Pets needing regular maintenance with no major grooming requirements.",
    features: ["relaxing bath", "brushing", "ear cleaning", "nail trimming"],
    cta: { label: "Get started", to: "/booking" }
  },
  {
    title: "Standard grooming",
    price: 250,
    color: "yellow",
    blurb:
      "Pets that need a full grooming session including a fresh haircut.",
    features: ["same as basic+", "haircut", "teeth brushing", "basic medical check"],
    cta: { label: "Get started", to: "/booking" },
    featured: true
  },
  {
    title: "Pro grooming",
    price: 400,
    color: "red",
    blurb:
      "Pets requiring extra attention to their coat, teeth, and skin care.",
    features: ["same as standard +", "de-shedding", "coat whitening", "extra medical check"],
    cta: { label: "Get started", to: "/booking" }
  }
];

export default function Pricing() {
  return (
    <section className="pg-pricing" aria-labelledby="pricing-title">
      <div id="price-section"  className="pg-pricing__head">
        <p className="eyebrow">Pricing</p>
        <h2 id="pricing-title" className="title">We can help your buddies</h2>
      </div>

      <ul className="pg-pricing__grid">
        {PLANS.map((p, i) => (
          <li key={i} className={`pg-price ${p.featured ? "is-featured" : ""}`}>
            <div className={`pg-price__pill pill-${p.color}`}>
              ${p.price.toFixed(2)} USD
            </div>

            <h3 className="pg-price__title">{p.title}</h3>
            <p className="pg-price__blurb">{p.blurb}</p>

            <hr className="pg-price__rule" />

            <ul className="pg-price__list">
              {p.features.map((f, j) => (
                <li key={j}><span aria-hidden>✓</span>{f}</li>
              ))}
            </ul>

            <Link className={`pg-price__btn pg-price__btn btn-yellow `} to={p.cta.to}>
              {p.cta.label}
            </Link>
          </li>
        ))}
      </ul>

      <p className="pg-pricing__foot">
        We offer professional care for dogs, cats and other domestic pets.
        <span> </span>
        <Link to="/pricing">compare plans <u>here</u></Link>
      </p>
    </section>
  );
}
