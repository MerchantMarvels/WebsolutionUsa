import React from "react";
import "../css/ConnectedSection.css";

const socials = [
  { label: "Instagram", href: "#", icon: "instagram" },
  { label: "Facebook", href: "#", icon: "facebook" },
  { label: "X", href: "#", icon: "x" },
  { label: "TikTok", href: "#", icon: "tiktok" },
];

const delivery = [
  { label: "UberEats", href: "#" },
  { label: "DoorDash", href: "#" },
  { label: "Swiggy", href: "#" },
  { label: "Zomato", href: "#" },
];

// tiny inline icons
const Icon = ({ name }) => {
  switch (name) {
    case "instagram":
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="3" width="18" height="18" rx="5" stroke="#ef4444" />
          <circle cx="12" cy="12" r="4" stroke="#ef4444" />
          <circle cx="17.5" cy="6.5" r="1" fill="#ef4444" />
        </svg>
      );
    case "facebook":
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M15 8h-2a2 2 0 0 0-2 2v2H9v3h2v6h3v-6h2.2l.3-3H14v-1.4c0-.4.3-.6.7-.6H17V8h-2z" fill="#ef4444"/>
        </svg>
      );
    case "x":
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M4 4l16 16M20 4L4 20" stroke="#ef4444" strokeWidth="2" />
        </svg>
      );
    case "tiktok":
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M15 3v3a5 5 0 0 0 5 5" stroke="#ef4444" strokeWidth="2"/>
          <path d="M12 7v8a3 3 0 1 1-3-3" stroke="#ef4444" strokeWidth="2"/>
        </svg>
      );
    default:
      return null;
  }
};

const ConnectedSection = () => {
  return (
    <section id="connect" className="connect">
      <div className="connect-head">
        <span data-aos="fade-up" className="chip">CONNECT</span>
        <h2 data-aos="fade-up">Stay Connected</h2>
        <p data-aos="fade-up">Follow for daily specials, location updates, and delicious content</p>
      </div>

      <div className="connect-grid">
        <div data-aos="fade-right" className="card">
          <div className="card-title">Social Media</div>
          <div className="pill-grid">
            {socials.map((s) => (
              <a key={s.label} href={s.href} className="pill" aria-label={s.label}>
                {s.icon && <Icon name={s.icon} />}
                <span>{s.label}</span>
              </a>
            ))}
          </div>
        </div>

        <div data-aos="fade-left" className="card">
          <div className="card-title">Order Online</div>
          <div className="pill-grid">
            {delivery.map((d) => (
              <a key={d.label} href={d.href} className="pill">
                {d.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div data-aos="fade-up" className="cta-wrap">
        <button className="order-btn">Order Now</button>
      </div>
    </section>
  );
};

export default ConnectedSection;
