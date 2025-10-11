import React from "react";
import "../css/Footer.css";
import logo from "../assets/logo.png";
import fmail from '../assets/f-mail.png';
import fphone from '../assets/f-phone.png';
import fclock from '../assets/time.png';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* Left Section */}
        <div data-aos="fade-up" className="footer-col footer-about">
          <div className="footer-logo">
            <img
              src={logo}
              alt="Logo"
            />
          </div>
          <p>
            Bringing you the finest street food experience with locally sourced
            ingredients and bold, authentic flavors.
          </p>

          <div className="footer-socials">
            <a href="#" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="3" width="18" height="18" rx="5" stroke="white" />
                <circle cx="12" cy="12" r="4" stroke="white" />
                <circle cx="17.5" cy="6.5" r="1" fill="white" />
              </svg>
            </a>
            <a href="#" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M15 8h-2a2 2 0 0 0-2 2v2H9v3h2v6h3v-6h2.2l.3-3H14v-1.4c0-.4.3-.6.7-.6H17V8h-2z"
                  fill="white"
                />
              </svg>
            </a>
            <a href="#" aria-label="X">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M4 4l16 16M20 4L4 20" stroke="white" strokeWidth="2" />
              </svg>
            </a>
          </div>
        </div>

        {/* Middle Section - Quick Links */}
        <div data-aos="fade-up" className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/templates/food-truck/">Home</a></li>
            <li><a href="/templates/food-truck/#menu">Menu</a></li>
            <li><a href="/templates/food-truck/#locations">Locations</a></li>
            <li><a href="/templates/food-truck/#about">About</a></li>
            <li><a href="/templates/food-truck/#connect">Contact</a></li>
          </ul>
        </div>

        {/* Right Section - Contact */}
        <div data-aos="fade-up" className="footer-col">
          <h4>Contact</h4>
          <ul className="contact-info">
            <li>
              <span className="icon"><img src={fmail} alt="Email" /></span> hello@flavoronwheels.com
            </li>
            <li>
              <span className="icon"><img src={fphone} alt="Phone" /></span> (555) 123-4567
            </li>
            <li>
              <span className="icon"><img src={fclock} alt="Clock" /></span> Mon–Sat: 11AM – 9PM<br />
              Sunday: Closed
            </li>
          </ul>
        </div>
      </div>

      <div data-aos="fade-up" className="footer-bottom">
        © 2025 Flavor on Wheels. All rights reserved.
      </div>

      
    </footer>
  );
};

export default Footer;
