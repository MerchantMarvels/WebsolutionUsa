import React from "react";
import "../styles/services-section.css";

const DotIcon = (props) => (
  <svg viewBox="0 0 12 12" aria-hidden="true" {...props}>
    <circle cx="6" cy="6" r="5" />
  </svg>
);

const PencilIcon = (props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
  </svg>
);

const FileIcon = (props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" fill="none" stroke="currentColor" strokeWidth="1.6"/>
    <path d="M14 2v6h6" fill="none" stroke="currentColor" strokeWidth="1.6"/>
  </svg>
);

const ChatIcon = (props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path d="M21 12a7 7 0 0 1-7 7H8l-5 3 1.5-4A7 7 0 1 1 21 12z" fill="none" stroke="currentColor" strokeWidth="1.6"/>
  </svg>
);

/** pill tag */
const Tag = ({ children }) => <span className="svc-tag">{children}</span>;

/** a single pastel card */
function ServiceCard({ tint, icon, title, text, tags = [] }) {
  const Icon = icon;
  return (
    <article className="svc-card" style={{ "--tint": tint }}>
      <div className="svc-icon">
        <Icon />
      </div>
      <h3 className="svc-card-title">{title}</h3>
      <p className="svc-card-text">{text}</p>
      <div className="svc-tags">
        {tags.map((t, i) => (
          <Tag key={i}>{t}</Tag>
        ))}
      </div>
    </article>
  );
}

/** main section */
export default function ServicesSection() {
  const items = [
    {
      tint: "#e5d4ff", // light purple
      icon: PencilIcon,
      title: "Brand Strategy",
      text:
        "We help businesses go beyond logos and colors crafting brand strategies that clarify their vision, differentiate them in the market, with the right audience.",
      tags: ["Brand", "Graphic Design", "Production"],
    },
    {
      tint: "#f6ddff", // light pink
      icon: FileIcon,
      title: "Content Marketing",
      text:
        "We help brands create and distribute impact content that builds trust, drives organic traffic, and turns audiences into loyal customers.",
      tags: ["SEO", "Content Writing", "Content Checker"],
    },
    {
      tint: "#f6f4b8", // light yellow
      icon: ChatIcon,
      title: "SEO Marketing",
      text:
        "Our SEO marketing services are designed to help your business rank higher on search engines, attract qualified traffic, and convert visitors into customers.",
      tags: ["SEO", "Research", "Site Analysis"],
    },
  ];

  return (
    <section className="svc">
      <div className="svc-header">
        <div className="svc-left">
          <span className="svc-badge ">
            <DotIcon className="svc-badge-dot" />
            <span>Our Service</span>
          </span>

          <h2 className="svc-title">
            How we make it happen
            <br />
            <span className="svc-title-dim">together with purpose</span>
          </h2>
        </div>

        <p className="svc-intro">
          We combine strategy, creativity, and data to deliver impactful
          marketing solutions. From discovery to execution.
        </p>
      </div>

      <div className="svc-grid">
        {items.map((it) => (
          <ServiceCard key={it.title} {...it} />
        ))}
      </div>
    </section>
  );
}
