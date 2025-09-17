// PricingPlans.jsx
import React, { useMemo, useState } from "react";
import "../css/Pricing.css";
// Optional: if you want to call your backend from here
// import API from "../api";

export default function PricingPlans() {
  // already in your file
  const [billing, setBilling] = useState("yearly"); // "monthly" | "yearly"

  // ⬇️ Add your real Stripe IDs here (examples shown)
  const plans = useMemo(
    () => [
      {
        id: "starter",
        title: "Starter",
        tagline: "Get your business online",
        monthly: 16.99,           // month-to-month (UI only)
        yearlyMonthly: 12.99,     // per-month when billed yearly (UI only)

        // DIFFERENT products for monthly vs yearly
        productIdMonthly: "prod_starter_monthly_XXXX",
        priceIdMonthly:   "price_1S8QD5PnwNNsbFaWqtjZmsCO",

        productIdYearly:  "prod_starter_yearly_XXXX",
        priceIdYearly:    "price_starter_yearly_XXXX",

        features: [
          "Custom Domain",
          "Website Hosting",
          "Professional Email (1 account)",
          "Website ready in 7 days",
          "Mobile Responsive Design",
          "5 Web Pages",
          "Contact / Lead Form",
          "On-page SEO",
        ],
        badge: "Best value",
        cta: "Choose Starter",
      },
      {
        id: "business",
        title: "Business",
        tagline: "Grow with more tools & integrations",
        monthly: 49.99,
        yearlyMonthly: 39.99,

        productIdMonthly: "prod_business_monthly_XXXX",
        priceIdMonthly:   "price_business_monthly_XXXX",

        productIdYearly:  "prod_business_yearly_XXXX",
        priceIdYearly:    "price_business_yearly_XXXX",

        features: [
          "Everything in Starter Plan",
          "Advanced SEO Optimization",
          "2 Professional Emails",
          "Booking / Enquiry Forms",
          "Invoicing System",
          "Team Management Tools",
          "Calendar Integration",
          "Google Business Integration",
          "Ongoing Website Management (up to 5 pages)",
        ],
        badge: "Most popular",
        cta: "Choose Business",
      },
      {
        id: "enterprise",
        title: "Enterprise",
        tagline: "Scale operations & sell online",
        monthly: 99.99,
        yearlyMonthly: 79.99,

        productIdMonthly: "prod_enterprise_monthly_XXXX",
        priceIdMonthly:   "price_enterprise_monthly_XXXX",

        productIdYearly:  "prod_enterprise_yearly_XXXX",
        priceIdYearly:    "price_enterprise_yearly_XXXX",

        features: [
          "Everything in Business Plan",
          "Payment Gateway Integration",
          "2000 Words of Written Content",
          "SEO Boost Campaign",
          "Facebook & Google Ads Management",
          "SMS & Email Marketing Automation",
          "3rd Party App Integrations",
          "Live Chat Support",
          "E-commerce Store Setup (up to 500 products)",
        ],
        badge: "Pro suite",
        cta: "Choose Enterprise",
      },
    ],
    []
  );

  const annualTotal = (perMonthYearly) => perMonthYearly * 12;

  const formatMoney = (n) => {
    const f = Number(n).toFixed(2);
    return f.endsWith(".00") ? f.slice(0, -3) : f;
  };

 // ✅ Drop-in replacement
const handleSelectPlan = async (plan) => {
  const isYearly = billing === "yearly";
  const priceId = isYearly ? plan.priceIdYearly : plan.priceIdMonthly;
  // (optional) if you also need the productId:
  // const productId = isYearly ? plan.productIdYearly : plan.productIdMonthly;

  try {
    const response = await fetch("http://localhost:5000/api/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include", // keep if your backend uses cookies/sessions
      body: JSON.stringify({ priceId }), // add productId here if your backend expects it
    });

    if (!response.ok) {
      const text = await response.text();
      throw new Error(`HTTP ${response.status}: ${text}`);
    }

    const session = await response.json();
    if (session?.url) {
      window.location.href = session.url;
    } else {
      throw new Error("Missing checkout URL in response");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Failed to start checkout. See console for details.");
  }
};


  return (
    <section className="pp-wrap" id="pricing">
      <h2 className="title">
        Pricing that grows <br /> with you
      </h2>

      {/* toggle (kept as-is) */}
      <div className="pp-tabs" role="tablist" aria-label="Billing cycle">
        <button
          type="button"
          className={`pp-tab ${billing === "monthly" ? "active" : ""}`}
          role="tab"
          aria-selected={billing === "monthly"}
          onClick={() => setBilling("monthly")}
        >
          Monthly
        </button>
        <button
          type="button"
          className={`pp-tab ${billing === "yearly" ? "active" : ""}`}
          role="tab"
          aria-selected={billing === "yearly"}
          onClick={() => setBilling("yearly")}
        >
          Yearly
        </button>
      </div>

      <div className="pp-grid" id="pp-plans">
        {plans.map((p) => {
          const big = billing === "yearly" ? p.yearlyMonthly : p.monthly;
          const suffix = "/mo";
          const billedAnnually = `$${formatMoney(annualTotal(p.yearlyMonthly))} billed annually`;

          return (
            <article className="pp-card elevate" key={p.id}>
              <div className="pp-head">
                <div className="pp-icon" aria-hidden>
                  🧩
                </div>
                <div className="pp-badge">{p.badge}</div>
                <h3 className="pp-name">{p.title}</h3>
                <p className="pp-tagline">{p.tagline}</p>
              </div>

              <div className="pp-priceStack">
                <div className="pp-priceBig">
                  <span className="pp-currency">$</span>{" "}
                  <span className="pp-amount">{formatMoney(big)}</span>
                  <span className="pp-suffix">{suffix}</span>
                </div>

                {billing === "yearly" ? (
                  <div className="pp-billedAnnually">{billedAnnually}</div>
                ) : (
                  <div className="pp-billedAnnually">Billed monthly</div>
                )}
              </div>

              <div className="pp-sep" />

              <ul className="pp-list">
                {p.features.map((f, idx) => (
                  <li className="pp-item" key={idx}>
                    <span className="pp-tick">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              {/* ⬇️ Only change here: wire the click to use correct IDs */}
              <button className="pp-cta" onClick={() => handleSelectPlan(p)}>
                {p.cta}
              </button>
            </article>
          );
        })}
      </div>
    </section>
  );
}
