import React from "react";
import "../css/Offers.css";
import offerstar from "../assets/offer-star.png";
import offerbox from "../assets/offer-box.png";
import offertag from "../assets/offer-tag.png";

const OFFERS = [
  {
    icon: offerbox,
    title: "Bridal Bliss Package",
    desc: "Complete bridal package including makeup, hair styling, facial, manicure and pedicure",
    badge: "15% Off",
  },
  {
    icon: offerstar,
    title: "Weekend Relaxation Deal",
    desc: "Book any spa service on weekends and get 20% off your next visit",
    badge: "20% Off",
  },
  {
    icon: offertag,
    title: "Seasonal Glow Package",
    desc: "Facial + Body Spa + Hair Treatment combo for the ultimate refresh",
    badge: "₹4,500 (Save ₹1,500)",
  },
];

const OfferCard = ({ icon, title, desc, badge }) => (
  <article className="offer-card">
    <div className="offer-icon">
      {typeof icon === "string" && icon.length === 1 ? icon : <img src={icon} alt="" />}
    </div>
    <h3 className="offer-title">{title}</h3>
    <p className="offer-desc">{desc}</p>
    <span className="offer-badge">{badge}</span>
  </article>
);

export default function Offers({ items = OFFERS }) {
  return (
    <section className="offers" id="offers">
      <div className="offers__inner">
        <h2 className="offers__heading">Special Offers</h2>
        <div className="offers__underline" />
        <p className="offers__sub">
          Exclusive packages designed to give you more value and luxury
        </p>

        <div className="offers-grid">
          {items.map((o, i) => (
            <OfferCard key={i} {...o} />
          ))}
        </div>

        {/* First-time banner */}
        <div className="first-banner">
          <h4 className="first-title">First-Time Visitor?</h4>
          <p className="first-text">Enjoy 10% off on your first booking with us!</p>
          <div className="first-code">Use code: <strong>WELCOME10</strong></div>
        </div>
      </div>
    </section>
  );
}
