// PricingPlans.jsx
import React, { useMemo, useState } from "react";
import "../css/Pricing.css";

export default function PricingPlans() {
  const [billing, setBilling] = useState("yearly"); // "monthly" | "yearly"

  // One-time Setup-Pack (replace priceIdOneTime with your real Stripe Price ID)
  const STARTER_PACK = {
    id: "setuppack",
    title: "Setup-Pack",
    oneTimeUSD: 79,
    priceIdOneTime: "price_1SAHQOBea2b6e5c2Z0V30Rwt",
  };

  // NEW: Enterprise Startup (one-time). Replace with your real Stripe Price ID.
  const ENTERPRISE_STARTUP = {
    id: "enterprise_startup",
    title: "Enterprise Startup",
    oneTimeUSD: 199, // <- set your real price
    priceIdOneTime: "price_1SAYP0Bea2b6e5c2DnzgWqUJ",// <- set your real Stripe Price ID
  };

  // Replace the product/price IDs with your real ones
  const plans = useMemo(
    () => [
      {
        id: "starter",
        title: "Starter",
        tagline: "Get your business online",
        monthly: 16.99,
        yearlyMonthly: 12.99,

        productIdMonthly: "prod_starter_monthly_XXXX",
        priceIdMonthly: "price_1SAH8hBea2b6e5c2syueZCcr",

        productIdYearly: "prod_starter_yearly_XXXX",
        priceIdYearly: "price_1SAHBcBea2b6e5c2udEOMvpe",

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
        priceIdMonthly: "price_1SAHCxBea2b6e5c2IzNjrEDP",

        productIdYearly: "prod_business_yearly_XXXX",
        priceIdYearly: "price_1SAHE1Bea2b6e5c2FZeS1ryi",

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
        priceIdMonthly: "price_1SAHFTBea2b6e5c2hHbJ8A4e",

        productIdYearly: "prod_enterprise_yearly_XXXX",
        priceIdYearly: "price_1SAHGEBea2b6e5c2xEDPMt6H",

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
    // e.g. 79 -> "79", 79.50 -> "79.50"
  };

  // Include the correct one-time pack automatically in Checkout
  const handleSelectPlan = async (plan) => {
    const isYearly = billing === "yearly";
    const planPriceId = isYearly ? plan.priceIdYearly : plan.priceIdMonthly;

    // Choose which one-time pack to add
    const selectedOneTimePack =
      plan.id === "enterprise" ? ENTERPRISE_STARTUP : STARTER_PACK;

    try {
      const response = await fetch("http://localhost:5000/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          priceId: planPriceId,
          starterPackPriceId: selectedOneTimePack.priceIdOneTime,
          billingCycle: isYearly ? "yearly" : "monthly",
          metadata: {
            planId: plan.id,
            planTitle: plan.title,
            oneTimePackId: selectedOneTimePack.id,
            oneTimePackTitle: selectedOneTimePack.title,
            starterPackApplied: "true",
          },
        }),
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

      {/* Billing toggle */}
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

          // UI should also reflect the correct one-time pack per plan
          const oneTimePack = p.id === "enterprise" ? ENTERPRISE_STARTUP : STARTER_PACK;

          return (
            <article className="pp-card elevate" key={p.id}>
              <div className="pp-head">
                <div className="pp-icon" aria-hidden>🧩</div>
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

                {/* Clear note that the right one-time pack is auto-included */}
                <div className="pp-addon" style={{ marginTop: 8, fontSize: 14, opacity: 0.9 }}>
                  + ${formatMoney(oneTimePack.oneTimeUSD)} one-time{" "}
                  <strong>{oneTimePack.title}</strong> applied at checkout
                </div>
              </div>

              <div className="pp-sep" />

              <ul className="pp-list">
                {p.features.map((f, idx) => (
                  <li className="pp-item" key={idx}>
                    <span className="pp-tick">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
                <li className="pp-item">
                  <input type="checkbox" checked readOnly aria-hidden style={{ marginRight: 8 }} />
                  <span>
                    {oneTimePack.title} (one-time ${formatMoney(oneTimePack.oneTimeUSD)}) — auto-included
                  </span>
                </li>
              </ul>

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
