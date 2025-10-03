import React, { useState } from "react";
import "../styles/faq-accordion.css";

const faqs = [
  {
    q: "What services do you offer?",
    a: "We offer creative and strategic services that help you build your brand, grow your presence, and connect with your audience."
  },
  {
    q: "How do I know which plan is right for me?",
    a: "Tell us your goals and timeline—We’ll map your needs to the right plan and suggest add-ons if needed."
  },
  {
    q: "How long does it take to see results?",
    a: "Most clients see early traction within 4–6 weeks, with compounding gains from month 2 onward."
  },
  {
    q: "Can I customize a package based on my needs?",
    a: "Absolutely. Every plan can be tailored with channels, reporting cadence, and service depth."
  },
  {
    q: "What makes your agency different from others?",
    a: "Strategy first. We pair brand, content, and data so every deliverable is tied to measurable outcomes."
  }
];

export default function FaqAccordion() {
  // one open at a time
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => setOpenIndex((cur) => (cur === i ? -1 : i));

  return (
    <section className="faq">
      <div className="faq-head">
        <span className="faq-badge">● Sustained Annual Growth</span>
        <h2 className="faq-title">Got questions?</h2>
        <p className="faq-sub">
          We combine strategy, creativity, and data to deliver impactful
          marketing solutions. From discovery to execution.
        </p>
      </div>

      <div className="faq-list" role="region" aria-labelledby="faq-title">
        {faqs.map((item, i) => {
          const open = openIndex === i;
          const panelId = `faq-panel-${i}`;
          const btnId = `faq-btn-${i}`;

          return (
            <div className={`faq-item ${open ? "is-open" : ""}`} key={i}>
              <h3 className="faq-q">
                <button
                  id={btnId}
                  className="faq-btn"
                  aria-expanded={open}
                  aria-controls={panelId}
                  onClick={() => toggle(i)}
                >
                  <span>{item.q}</span>
                  <Icon open={open} />
                </button>
              </h3>

              <div
                id={panelId}
                role="region"
                aria-labelledby={btnId}
                className="faq-panel"
                hidden={!open}
              >
                <p className="faq-a">{item.a}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* plus/minus icon */
function Icon({ open }) {
  return (
    <span className="ico" aria-hidden="true">
      <svg viewBox="0 0 24 24" className={`ico-svg ${open ? "minus" : "plus"}`}>
        <line x1="5" y1="12" x2="19" y2="12" />
        <line x1="12" y1="5" x2="12" y2="19" />
      </svg>
    </span>
  );
}
