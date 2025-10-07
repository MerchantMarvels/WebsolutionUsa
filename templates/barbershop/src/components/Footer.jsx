import React from "react";
import "../css/footer.css"

const IconFB = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
    <path fill="currentColor" d="M13 10h3V7h-3c-1.7 0-3 1.3-3 3v2H8v3h2v6h3v-6h3l1-3h-4v-2c0-.6.4-1 1-1Z"/>
  </svg>
);
const IconIG = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
    <path fill="currentColor" d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3a6 6 0 1 1 0 12a6 6 0 0 1 0-12Zm0 2.5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7ZM18 6.5a1 1 0 1 1 0 2a1 1 0 0 1 0-2Z"/>
  </svg>
);
const IconX = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
    <path fill="currentColor" d="M13.4 10.7L20.5 3h-1.7l-6 6.6L7.3 3H3l7.4 10L3 21h1.7l6.3-7l5.8 7H21l-7.6-10.3Z"/>
  </svg>
);

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">
        {/* top */}
        <div className="footer__grid">
          <div className="footer__brand">
            <a className="brand" href="/templates/barbershop/" aria-label="Logo">
              <span className="brand-mark">✂</span>
              <span className="brand-text">LOGOIPSUM</span>
            </a>
            <p className="footer__about">
              Professional grooming services designed to bring out your best style.
            </p>
          </div>

          <nav className="footer__links" aria-label="Quick Links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/templates/barbershop/#services">Services</a></li>
              <li><a href="/templates/barbershop/#team">Our Team</a></li>
              <li><a href="/templates/barbershop/#pricing">Pricing</a></li>
              <li><a href="/templates/barbershop/#contact">Contact</a></li>
            </ul>
          </nav>

          <div className="footer__social">
            <h4>Follow Us</h4>
            <ul>
              <li><a href="#" aria-label="Facebook"><IconFB /></a></li>
              <li><a href="#" aria-label="Instagram"><IconIG /></a></li>
              <li><a href="#" aria-label="X / Twitter"><IconX /></a></li>
            </ul>
          </div>
        </div>

        {/* bottom */}
        <div className="footer__bottom">
          <span>© {year} Barbershop. All rights reserved.</span>
          <div className="footer__legal">
            <a href="#">Privacy</a>
            <span aria-hidden="true">•</span>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
