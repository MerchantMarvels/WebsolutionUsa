import React from "react";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="ft">
      {/* Scoped styles */}
      

      {/* CTA band */}
      <div className="ft-cta">
        <div className="ft-cta__inner">
          <div>
            <h2 className="title">Digitally Transform &amp; Grow<br/>Your Business</h2>
            <p>
              Create or transform your own business website with us. We provide modern
              web services and websites so you can focus on your business while we handle
              your online presence.
            </p>
            <div className="ft-cta__btns">
              <a href="#services"><button className="ft-btn">Our service</button></a>
              <a href="tel:+13028772478"><button className="ft-btn--ghost">Contact us</button></a>
            </div>
          </div>

          {/* decorative arrows */}
          <div className="ft-cta__art" aria-hidden="true">
            <svg viewBox="0 0 600 380" fill="none">
              <path d="M150 360h80V110h40L190 20 110 110h40v250z" fill="#ff6a6a" opacity=".85"/>
              <path d="M360 360h80V170h36l-76-76-76 76h36v190z" fill="#ffb25a" opacity=".85"/>
              <path d="M470 360h70V230h28l-63-63-63 63h28v130z" fill="#9a83ff" opacity=".85"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="ft-main">
        {/* Brand & about */}
        <div className="ft-brand">
          <h3>WEBSOLUTIONSUSA</h3>
          <p>
            Web Solution USA is devoted to helping businesses of all sizes achieve a more
            modern web presence.
          </p>

          <div className="ft-contact">
            <div className="ft-row">
              <svg className="ft-ico" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4h20v16H2z" fill="none"/><path d="M4 6h16l-8 6L4 6zm0 2.3v9.7h16V8.3l-8 6-8-6z"/></svg>
              <a href="mailto:sales@websolutionusa.com">sales@websolutionusa.com</a>
            </div>
            <div className="ft-row">
              <svg className="ft-ico" viewBox="0 0 24 24" fill="currentColor"><path d="M6.6 10.8c1.2 2.4 3.2 4.4 5.6 5.6l2-2c.3-.3.7-.4 1.1-.3 1.2.4 2.5.7 3.8.7.6 0 1 .4 1 1v3.3c0 .6-.4 1-1 1C10.9 20.1 3.9 13.1 3.9 4.9c0-.6.4-1 1-1H8c.6 0 1 .4 1 1 0 1.3.2 2.6.7 3.8.1.4 0 .8-.3 1.1l-2 2z"/></svg>
              <a href="tel:+13028772478">+ 1302-877-2478</a>
            </div>
            <div className="ft-row">
              <svg className="ft-ico" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C7.6 2 4 5.6 4 10c0 5.5 8 12 8 12s8-6.5 8-12c0-4.4-3.6-8-8-8zm0 10.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 7.5 12 7.5s2.5 1.1 2.5 2.5S13.4 12.5 12 12.5z"/></svg>
              <span> • 8 The Green #16439 Dover DE 19901
              </span>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="ft-col">
          <h4>Our Services</h4>
          <ul className="ft-list">
            <li><a href="#services">Website Development</a></li>
            <li><a href="#services">Start-Up Services</a></li>
            <li><a href="#services">Digital Marketing Services</a></li>
            <li><a href="#services">Search Engine</a></li>
            <li><a href="#services">Optimization</a></li>
            <li><a href="#services">Application Development</a></li>
          </ul>
        </div>

        {/* Useful links */}
        <div className="ft-col">
          <h4>Useful Links</h4>
          <ul className="ft-list">
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Teams And Conditions</a></li>
            <li><a href="#pricing">Price</a></li>
            <li><a href="tel:+13028772478">Contact Us</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="ft-bottom">
        <div className="ft-copy">
          Copyright © {year} Websolutionsusa | Powered by websolutionsusa.com
        </div>
        <div className="ft-social">
          <a className="ft-s" href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
            {/* fb */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 22v-8h2.6l.4-3h-3V8.4c0-.9.3-1.5 1.6-1.5h1.5V4.2c-.8-.1-1.7-.2-2.5-.2-2.5 0-4.2 1.6-4.2 4.4V11H7v3h3v8h3.5z"/></svg>
          </a>
          <a className="ft-s" href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            {/* in */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9 6.9A2.4 2.4 0 1 1 6.9 2a2.4 2.4 0 0 1 0 4.9zM3.9 21h6V8.9h-6V21zM14 8.9h-5.9V21H14v-6.3c0-3.4 4.1-3.7 4.1 0V21H24v-7.5c0-6.3-6.9-6.1-10-3v-1.6z"/></svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
