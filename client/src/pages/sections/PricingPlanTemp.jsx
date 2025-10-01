import React, { useMemo, useState } from "react";
import "../../pages/css/Pricing.css";

export default function PricingPlans() {
  // Billing cycle state — default to "yearly" as requested
  const [billing, setBilling] = useState("yearly"); // "monthly" | "yearly"

  // Your plans. Kept your original `price` as the YEARLY price.
  const plans = useMemo(() => ([
    {
      title: "Basic Single Website",
      price: 149, // yearly
      features: [
        "1 page WordPress website",
        "Elementor Pro theme",
        "Domain need to bought by customer",
        "Free Hosting for 1st year",
        "Your Company Logo inserted. Note:- also can make one at good cost",
        "Web pages with your content..",
        "Contact Us page with form.",
        "Google site Map Created.",
        "Analytic Code inserted.",
        "Content need to be provider by customer can be written at extra cost (we can write SEO keyword intent as per requirement @ extra cost (on page Seo $149 with copyright free images))",
        "Email Support & Telephone / Skype Help.",
      ],
      cta: "Get in touch",
    },
    {
      title: "Basic website Development",
      price: 299, // yearly
      features: [
        "3 page WordPress website",
        "Elementor Pro theme",
        "Domain need to bought by customer",
        "Free Hosting for 1st year",
        "Your Company Logo inserted. Note:- also can make one at good cost",
        "Web pages with your content..",
        "Contact Us page with form.",
        "Google site Map Created.",
        "Analytic Code inserted.",
        "Content need to be provider by customer can be written at extra cost (we can write SEO keyword intent as per requirement @ extra cost (on page Seo $149 with copyright free images))",
        "Email Support & Telephone / Skype Help.",
      ],
      cta: "Get in touch",
    },
    {
      title: "Professional Business Website",
      price: 899, // yearly
      features: [
        "Domain need to bought by customer",
        "Free Hosting for 1st year",
        "Your Company Logo inserted. Note:- also can make one at good cost",
        "Web pages with your content..",
        "Contact Us page with form.",
        "Google site Map Created.",
        "Analytic Code inserted.",
        "Content need to be provider by customer can be written at extra cost (we can write SEO keyword intent as per requirement @ extra cost (on page Seo $149 with copyright free images))",
        "Email Support & Telephone / Skype Help.",
      ],
      cta: "Get in touch",
    },
    {
      title: "E-commerce Website upto 50 products",
      price: 1499, // yearly
      features: [
        "Domain need to bought by customer",
        "Elementor Pro theme",
        "Domain need to bought by customer",
        "Free Hosting for 1st year",
        "Your Company Logo inserted. Note:- also can make one at good cost",
        "Web pages with your content..",
        "Contact Us page with form.",
        "Google site Map Created.",
        "Analytic Code inserted.",
        "Content need to be provider by customer can be written at extra cost (we can write SEO keyword intent as per requirement @ extra cost (on page Seo $149 with copyright free images))",
        "Email Support & Telephone / Skype Help.",
      ],
      cta: "Get in touch",
    },
  ]), []);

  const getDisplayPrice = (yearlyPrice) =>
    billing === "yearly" ? yearlyPrice : Math.ceil(yearlyPrice / 12);

  const priceSuffix = billing === "yearly" ? "/yr" : "/mo";

  return (
    <section className="pp-wrap" id="pricing">
      <h2 className="pp-title">Pricing that grows <br /> with you</h2>

      {/* Tabs under H2 */}
      <div
        className="pp-tabs"
        role="tablist"
        aria-label="Billing cycle"
      >
        <button
          type="button"
          className={`pp-tab ${billing === "monthly" ? "active" : ""}`}
          role="tab"
          aria-selected={billing === "monthly"}
          aria-controls="pp-plans"
          onClick={() => setBilling("monthly")}
        >
          Monthly
        </button>
        <button
          type="button"
          className={`pp-tab ${billing === "yearly" ? "active" : ""}`}
          role="tab"
          aria-selected={billing === "yearly"}
          aria-controls="pp-plans"
          onClick={() => setBilling("yearly")}
        >
          Yearly
          <span className="pp-badge">15% OFF</span>
        </button>
      </div>

      <div className="pp-grid" id="pp-plans">
        {plans.map((p, i) => (
          <article className="pp-card" key={i}>
            <div className="pp-head">
              <h3 className="pp-name">{p.title}</h3>
              <div className="pp-price">
                $ {getDisplayPrice(p.price)}
                <span className="pp-price-suffix">{priceSuffix}</span>
              </div>
            </div>
            <div className="pp-sep" />
            <div className="pp-body">
              <ul className="pp-list">
                {p.features.map((f, idx) => (
                  <li className="pp-item" key={idx}>
                    <span className="pp-tick">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <button className="pp-cta">{p.cta}</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
