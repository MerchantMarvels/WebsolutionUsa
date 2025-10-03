import React, { useState } from "react";
import "../styles/footer.css";

export default function SiteFooter() {
  const [email, setEmail] = useState("");

  function onSubscribe(e) {
    e.preventDefault();
    // TODO: hook up to your API
    alert(`Thanks! We'll reach out at: ${email}`);
    setEmail("");
  }

  return (
    <footer className="ft">
      {/* Top CTA banner */}
      <div className="ft-cta">
        <div className="ft-cta__inner">
          <span className="ft-badge">
            <SparkIcon />
            Digital Marketing Agency
          </span>

          <h2 className="ft-cta__title">
            Take your marketing to<br />the next level
          </h2>

          <p className="ft-cta__sub">
            Ready to transform your brand’s digital presence? Our expert team is here to
            help you achieve measurable growth and lasting success.
          </p>

          <a href="#book" className="ft-cta__btn">
            <PhoneIcon />
            <span>Book a Free Call</span>
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="ft-main">
        <div className="ft-container">
          {/* brand + newsletter */}
          <div className="ft-brand">
            <div className="ft-logo">
              <LogoMark /> <span>Bizz.</span>
            </div>

            <p className="ft-tag">
              Ready to transform your brand’s digital presence?
              <br />
              Our expert team is here to help you achieve.
            </p>

            <form className="ft-form" onSubmit={onSubscribe}>
              <label htmlFor="ft-email" className="sr-only">
                Email address
              </label>
              <input
                id="ft-email"
                type="email"
                required
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" className="ft-sub">Subscribe</button>
            </form>
          </div>

          {/* link columns */}
          <nav className="ft-links">
            <div className="ft-col">
              <div className="ft-col__title">Main Pages</div>
              <ul>
                <li><a href="/home-02">Home</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/projects">Projects</a></li>
                <li><a href="/pricing">Pricing</a></li>
                <li><a href="/contact">Contact Us</a></li>
              </ul>
            </div>

            <div className="ft-col">
              <div className="ft-col__title">Utility Pages</div>
              <ul>
                <li><a href="/privacy">Privacy Policy</a></li>
                <li><a href="/terms">Terms &amp; Conditions</a></li>
              </ul>
            </div>

            <div className="ft-col">
              <div className="ft-col__title">Social</div>
              <ul>
                <li><a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a></li>
                <li><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
                <li><a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a></li>
                <li><a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a></li>
              </ul>
            </div>
          </nav>
        </div>
      </div>

      {/* bottom bar */}
      <div className="ft-bottom">
        <div className="ft-container ft-bottom__row">
          <div>© 2025 All rights reserved</div>
          <div>Powered by <a href="#">Websolutionusa</a></div>
        </div>
      </div>
    </footer>
  );
}

/* ==== tiny inline icons ==== */
function SparkIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2l1.8 4.6L18 8l-4.2 1.4L12 14l-1.8-4.6L6 8l4.2-1.4L12 2z" fill="currentColor" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M6.6 10.8c1.5 3 3.6 5.1 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.2 1 .4 2 .6 3.1.6.7 0 1.3.6 1.3 1.3v3.5c0 .7-.6 1.3-1.3 1.3C9.6 22 2 14.4 2 5.3 2 4.6 2.6 4 3.3 4H6.8c.7 0 1.3.6 1.3 1.3 0 1.1.2 2.1.6 3.1.1.4 0 .9-.3 1.2L6.6 10.8z"/>
    </svg>
  );
}
function LogoMark() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12c0-3.9 3.1-7 7-7 1.6 0 3 .5 4.2 1.4C14.9 7 13.1 9.4 13 12c-.1 2.6 1.4 5 3.7 6.4-1.2.9-2.7 1.4-4.3 1.4-3.9 0-7-3.1-7-7z" fill="#fff"/>
    </svg>
  );
}
