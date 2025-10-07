import React from "react";
import "../css/pricing.css"

const plans = [
  {
    name: "Standard",
    price: 39.99,
    features: [
      { text: "Nisi scelerisque eu ultrices", on: true },
      { text: "Urna porttitor rhoncus dolor purus non", on: true },
      { text: "Integer eget aliquet nibh praesent tristique", on: false },
      { text: "Lacus luctus accumsan tortor posuere", on: false },
      { text: "Nisl purus in mollis nunc sed id semper", on: false },
      { text: "Molestie nunc non blandit massa", on: false }
    ],
    cta: "Book",
    featured: false
  },
  {
    name: "Premium",
    price: 199.99,
    badge: "Best Choice",
    features: [
      { text: "Nisi scelerisque eu ultrices", on: true },
      { text: "Urna porttitor rhoncus dolor purus non", on: true },
      { text: "Integer eget aliquet nibh praesent tristique", on: true },
      { text: "Lacus luctus accumsan tortor posuere", on: true },
      { text: "Nisl purus in mollis nunc sed id semper", on: true },
      { text: "Molestie nunc non blandit massa", on: true }
    ],
    cta: "Book",
    featured: false
  },
  {
    name: "Advanced",
    price: 89.99,
    features: [
      { text: "Nisi scelerisque eu ultrices", on: true },
      { text: "Urna porttitor rhoncus dolor purus non", on: true },
      { text: "Integer eget aliquet nibh praesent tristique", on: true },
      { text: "Lacus luctus accumsan tortor posuere", on: true },
      { text: "Nisl purus in mollis nunc sed id semper", on: false },
      { text: "Molestie nunc non blandit massa", on: false }
    ],
    cta: "Book",
    featured: false
  }
];

export default function Pricing() {
  return (
    <section className="pricing" id="pricing">
      <div className="pricing__inner">
        <header className="pricing__header">
          <h2>Our Pricing</h2>
          <p>Simple. Transparent. No surprises.</p>
        </header>

        <div className="pricing__grid">
          {plans.map((p) => (
            <article
              key={p.name}
              className={`price-card ${p.featured ? "featured" : ""}`}
            >
              <div className="price-head">
                <h3>
                  {p.name}
                  {p.badge && <small className="badge">({p.badge})</small>}
                </h3>
                <div className="price">
                  <span className="currency">$</span>
                  <span className="amount">{p.price.toFixed(2)}</span>
                </div>
              </div>

              <ul className="price-features">
                {p.features.map((f, i) => (
                  <li key={i} className={f.on ? "" : "off"}>
                    {f.text}
                  </li>
                ))}
              </ul>

              <button className="btn btn-outline price-cta">{p.cta}</button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
