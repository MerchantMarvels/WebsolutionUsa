import React, { useState } from "react";
import "../styles/Header.css";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-container">
        {/* Left: brand */}
        <a href="/" className="brand">
          <span className="brand-mark" aria-hidden="true">
            {/* subtle purple mark like the screenshot */}
            <svg width="26" height="22" viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="g" x1="0" y1="0" x2="26" y2="22" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#C0A3FF" />
                  <stop offset="1" stopColor="#8B5CF6" />
                </linearGradient>
              </defs>
              <path d="M5 17C5 11.477 9.477 7 15 7h6v4h-6a6 6 0 0 0-6 6H5Z" fill="url(#g)"/>
              <path d="M0 17C0 9.82 5.82 4 13 4h8v4h-8a9 9 0 0 0-9 9H0Z" fill="url(#g)" opacity=".55"/>
            </svg>
          </span>
          <span className="brand-text">Bizz.</span>
        </a>

        <div className="brand-divider" aria-hidden="true" />

        {/* Center: primary nav */}
        <nav className="primary-nav">
          <button className="nav-item with-caret" type="button">
            Home
           
          </button>
          <a className="nav-item" href="#about">About</a>
          <a className="nav-item" href="#pricing">Pricing</a>
          <a className="nav-item" href="#project">Project</a>
          <a className="nav-item" href="#blog">Blog</a>
        </nav>

        {/* Right: pages + CTA */}
        <div className="right-side">
          {/* <button className="nav-item with-caret" type="button">
            Pages
            <svg className="caret" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
              <path d="M2 3l3 3 3-3" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button> */}

          <a href="#contact" className="cta">Contact Us</a>

          {/* Mobile menu icon (hidden on desktop) */}
          <button
            className="hamburger"
            aria-label="Toggle menu"
            onClick={() => setOpen(v => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Mobile dropdown (kept very simple) */}
      {open && (
        <div className="mobile-panel">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#pricing">Pricing</a>
          <a href="#project">Project</a>
          <a href="#blog">Blog</a>
          <a href="#pages">Pages</a>
          <a className="cta" href="#contact">Contact Us</a>
        </div>
      )}
    </header>
  );
}
