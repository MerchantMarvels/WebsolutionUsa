import React, { useMemo, useState } from "react";
import "../styles/pricing-section.css";

const Check = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" {...props}>
    <circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
    <path d="M8.5 12l2.2 2.2L15.8 9" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

export default function PricingSection() {
  const [billing, setBilling] = useState("monthly"); // 'monthly' | 'yearly'
  // discount rule for yearly (2 months free = ×10/12)
  const yearlyFactor = 10 / 12;

  const plans = useMemo(
    () => [
      {
        id: "starter",
        title: "Starter Plan",
        color: "#fff",
        accent: "#f2f2f2",
        popular: false,
        priceMonthly: 299,
        features: [
          "Basic strategy consultation",
          "Social media setup",
          "Monthly performance reports",
          "Dedicated Support Team",
        ],
      },
      {
        id: "growth",
        title: "Growth Plan",
        color: "#e7dcff",
        accent: "#d9c9ff",
        popular: true,
        priceMonthly: 499,
        features: [
          "Designed for growing businesses",
          "Multi-channel marketing campaigns",
          "Bi-weekly performance reports",
          "Dedicated account manager",
        ],
      },
      {
        id: "enterprise",
        title: "Enterprise Plan",
        color: "#fff",
        accent: "#f2f2f2",
        popular: false,
        priceMonthly: 799,
        features: [
          "For large businesses with complex needs",
          "Full-service marketing strategy and execution",
          "Advanced analytics and custom reporting",
          "24/7 priority support",
        ],
      },
    ],
    []
  );

  const priceFor = (p) =>
    billing === "monthly"
      ? p.priceMonthly
      : Math.round(p.priceMonthly * yearlyFactor); // show monthly equivalent

  return (
    <section className="price">
      {/* header */}
      <div className="price-head">
        <div className="price-left">
          <span className="price-badge">● Pricing Plan</span>
          <h2 className="price-title">
            Plans designed to maximize
            <br />
            <span className="muted">ROI and fast growth</span>
          </h2>
        </div>
        <p className="price-intro">
          We combine strategy, creativity, and data to deliver impactful marketing solutions.
          From discovery to execution.
        </p>
      </div>

      {/* toggle bar */}
      <div className="price-toggle">
        <button
          className={`tg-btn ${billing === "monthly" ? "is-active" : ""}`}
          onClick={() => setBilling("monthly")}
          aria-pressed={billing === "monthly"}
        >
          Monthly
        </button>
       
        <button
          className={`tg-btn ${billing === "yearly" ? "is-active" : ""}`}
          onClick={() => setBilling("yearly")}
          aria-pressed={billing === "yearly"}
          title="2 months free"
        >
          Yearly
        </button>
      </div>

      {/* cards */}
      <div className="price-grid">
        {plans.map((p) => {
          const isPopular = p.popular;
          return (
            <article
              key={p.id}
              className={`card ${isPopular ? "card--popular" : ""}`}
              style={{ "--card-bg": p.color }}
            >
              <header className="card-top">
                <div className="card-icn" aria-hidden="true">✦</div>

                <div className="card-kicker">
                  {billing === "monthly" ? "Monthly Rate" : "Yearly (avg /mo)"}
                </div>
                {/* {isPopular && <span className="card-pop">Most Popular</span>} */}
                <h3 className="card-title">{p.title}</h3>
                <p className="card-blurb">
                  {p.id === "starter" &&
                    "Perfect for small businesses and startups looking to establish their digital presence."}
                  {p.id === "growth" &&
                    "Strategically designed growth plans to accelerate your business long-term success."}
                  {p.id === "enterprise" &&
                    "Solutions tailored for large businesses to optimize performance and drive innovation."}
                </p>
              </header>

              <div className="card-price">
                <span className="amount">${priceFor(p)}</span>
                <span className="per">/ month</span>
              </div>

              <div className="card-divider" />

              <div className="card-subhead">What’s Included:</div>
              <ul className="card-list">
                {p.features.map((f, i) => (
                  <li key={i}>
                    <Check />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <button className={`cta ${isPopular ? "cta--solid" : ""}`}>
                Get Started
              </button>
            </article>
          );
        })}
      </div>
    </section>
  );
}
