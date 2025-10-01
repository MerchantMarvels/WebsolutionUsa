// src/components/Header.jsx
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/header.css";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="pg-header">
      <div className="pg-wrap">
        {/* LEFT: burger (shown only on mobile) */}
        <button
          className="pg-burger"
          aria-controls="primary-navigation"
          aria-expanded={open ? "true" : "false"}
          onClick={() => setOpen(!open)}
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="line" />
          <span className="line" />
          <span className="line" />
        </button>

        {/* LEFT (desktop): nav */}
        <nav
          className={`pg-nav ${open ? "is-open" : ""}`}
          aria-label="Primary"
          id="primary-navigation"
        >
          <NavLink to="/#our-banner" end onClick={() => setOpen(false)}>Home</NavLink>
          <a href="/templates/pet-grooming/#grooming-about" onClick={() => setOpen(false)}>About</a>
          <a href="/templates/pet-grooming/#grooming-services" onClick={() => setOpen(false)}>services</a>
           <a href="/templates/pet-grooming/#grooming-price" onClick={() => setOpen(false)}>pricing</a>
           
        </nav>

        {/* CENTER: brand */}
        <Link className="pg-brand" to="/" onClick={() => setOpen(false)}>
          <span className="pg-logo" aria-hidden>🌼</span>
          <span className="pg-brand-text">Pet Grooming</span>
        </Link>

        {/* RIGHT: actions (Cart stays on mobile; CTA hides) */}
        <div className="pg-actions">
          {/* <Link to="/cart" className="pg-cart">Cart <span>(0)</span></Link> */}
          <Link to="/" className="pg-cta">Buy template</Link>
        </div>
      </div>
    </header>
  );
}
