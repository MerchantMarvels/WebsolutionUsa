import React from "react";
import "../css/Footer.css";
import logo from "../assets/footer-logo.png"; // Import logo

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">
        {/* Brand */}
        <div className="footer__brand">
          <img className="footer__logo" src={logo} alt="Luxe Spa" />
          <p className="footer__tag">
            Your sanctuary for beauty, wellness, and rejuvenation in the heart of
            the city.
          </p>
        </div>

        {/* Quick Links */}
        <nav className="footer__col" aria-label="Quick links">
          <h4 className="footer__title">Quick Links</h4>
          <ul className="footer__list">
            <li><a href="/templates/saloon/#services">Services</a></li>
            <li><a href="/templates/saloon/#about">About Us</a></li>
            <li><a href="/templates/saloon/#gallery">Gallery</a></li>
            <li><a href="/templates/saloon/#offers">Special Offers</a></li>
          </ul>
        </nav>

        {/* Services */}
        <nav className="footer__col" aria-label="Services">
          <h4 className="footer__title">Services</h4>
          <ul className="footer__list">
            <li><a href="/templates/saloon/#services">Hair Styling</a></li>
            <li><a href="/templates/saloon/#services">Facial Treatments</a></li>
            <li><a href="/templates/saloon/#services">Massage Therapy</a></li>
            <li><a href="/templates/saloon/#services">Bridal Packages</a></li>
          </ul>
        </nav>

        {/* Contact */}
        <div className="footer__col">
          <h4 className="footer__title">Contact</h4>
          <address className="footer__addr">
            123 Spa Avenue, MG Road<br />
            Bangalore, Karnataka 560001
          </address>
          <a className="footer__link" href="tel:+919876543210">
            +91 98765 43210
          </a>
          <a className="footer__link" href="mailto:info@luxespa.com">
            info@luxespa.com
          </a>
        </div>
      </div>

      <div className="footer__bar">
        © {year} Luxe Spa &amp; Salon. All rights reserved.
      </div>
    </footer>
  );
}
