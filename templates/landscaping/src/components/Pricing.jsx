import React from "react";
import "../css/Pricing.css";

const Check = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20 6 9 17l-5-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const plans = [
  {
    name: "Residential Plan",
    subtitle: "Perfect for homeowners",
    priceMain: "$299",
    priceNote: "/month",
    cta: "Book Now",
    featured: false,
    items: [
      "Weekly lawn mowing",
      "Edge trimming",
      "Debris cleanup",
      "Basic fertilization",
      "Seasonal aeration",
    ],
  },
  {
    name: "Commercial Plan",
    subtitle: "Ideal for large properties",
    priceMain: "Custom",
    priceNote: "quote",
    cta: "Get a Quote",
    featured: true,
    items: [
      "Customized schedule",
      "Complete maintenance",
      "Mulching services",
      "Tree & shrub care",
      "Priority support",
    ],
  },
  {
    name: "Seasonal Plan",
    subtitle: "For seasonal needs",
    priceMain: "$899",
    priceNote: "/season",
    cta: "Book Now",
    featured: false,
    items: [
      "Spring/Fall cleanup",
      "Leaf removal",
      "Gutter cleaning",
      "Garden bed prep",
      "Mulch installation",
    ],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="pricing" aria-labelledby="pricing-heading">
      <div className="pricing__inner">
        <header className="pricing__head">
          <h2 id="pricing-heading">Affordable Plans for Every Need</h2>
          <p>Choose the plan that fits your property best.</p>
        </header>

        <div className="pricing__grid">
          {plans.map((p) => (
            <article
              key={p.name}
              className={`plan ${p.featured ? "plan--featured" : ""}`}
              tabIndex={0}
            >
              {p.featured && (
                <div className="plan__badge" aria-label="Most Popular">
                  Most Popular
                </div>
              )}

              <header className="plan__header">
                <h3 className="plan__title">{p.name}</h3>
                <p className="plan__subtitle">{p.subtitle}</p>

                <div className="plan__price">
                  <span className={`plan__priceMain ${p.priceMain === "Custom" ? "is-custom" : ""}`}>
                    {p.priceMain}
                  </span>
                  <span className="plan__priceNote">{p.priceNote}</span>
                </div>
              </header>

              <ul className="plan__list">
                {p.items.map((t) => (
                  <li key={t}>
                    <span className="tick"><Check /></span>
                    {t}
                  </li>
                ))}
              </ul>

              <button className={`plan__cta ${p.featured ? "primary" : ""}`} type="button">
                {p.cta}
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
