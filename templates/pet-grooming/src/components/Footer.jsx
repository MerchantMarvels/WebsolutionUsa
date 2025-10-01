import { Link } from "react-router-dom";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="pg-footer">
      <div className="pg-wrap">

        {/* ===== top grid ===== */}
        <div className="pg-foot-grid">
          <div className="pg-foot-col">
            <h4>Main pages</h4>
            <ul className="pg-links">
              <li><Link to="/pet-grooming/#hero">Home</Link></li>
              <li><a href="/pet-grooming/#about">About</a></li>
              <li><a href="/pet-grooming/#our-story">Our Story</a></li>
              <li><a href="/pet-grooming/#services">Services</a></li>
            </ul>
          </div>

          <div className="pg-foot-col">
            <h4>Other</h4>
            <ul className="pg-links">
              <li><a href="/pet-grooming/#testimonials">Testimonials</a></li>
              <li><Link to="/pet-grooming/#price-section">Pricing</Link></li>
            </ul>
          </div>

          {/* <div className="pg-foot-col">
            <h4>CMS pages</h4>
            <ul className="pg-links">
              <li><Link to="/service/1">Service single</Link></li>
              <li><Link to="/team/1">Team inner</Link></li>
              <li><Link to="/blog/slug">Blog post</Link></li>
              <li><Link to="/product/sku">Product</Link></li>
            </ul>
          </div>

          <div className="pg-foot-col">
            <h4>Template</h4>
            <ul className="pg-links">
              <li><Link to="/style-guide">Style guide</Link></li>
              <li><Link to="/licenses">Licenses</Link></li>
              <li><Link to="/changelog">Changelog</Link></li>
              <li><Link to="/all-pages">All pages</Link></li>
              <li><a href="https://webflow.com/templates" target="_blank" rel="noreferrer">More templates</a></li>
            </ul>
          </div> */}

          {/* contact card */}
          <aside className="pg-contact">
            <h4>Let's talk</h4>
            <ul className="pg-contact-list">
              <li>
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 6.5A2.5 2.5 0 0 1 4.5 4h15A2.5 2.5 0 0 1 22 6.5v11A2.5 2.5 0 0 1 19.5 20h-15A2.5 2.5 0 0 1 2 17.5v-11Zm2.4-.5 7.1 5.3a1 1 0 0 0 1.2 0l7.1-5.3H4.4Zm15.1 2.2-6.2 4.6a3 3 0 0 1-3.6 0L3.6 8.2V17.5c0 .28.22.5.5.5h15c.28 0 .5-.22.5-.5V8.2Z"/></svg>
                <a href="mailto:hi@petgrooming.com">hi@petgrooming.com</a>
              </li>
              <li>
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 10.8a15.7 15.7 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1.02-.25c1.12.34 2.32.52 3.58.52a1 1 0 0 1 1 1v3.25a1 1 0 0 1-1 1C11.61 21 3 12.39 3 2.99a1 1 0 0 1 1-1H7.25a1 1 0 0 1 1 1c0 1.26.18 2.46.52 3.58a1 1 0 0 1-.25 1.02L6.6 10.8Z"/></svg>
                <a href="tel:+1800000000">+1 800 000 000</a>
              </li>
              <li>
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z"/></svg>
                California, USA
              </li>
            </ul>

            <div className="pg-socials">
              <a href="#" aria-label="Instagram" className="pg-ico">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Zm5.75 1a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"/></svg>
              </a>
              <a href="#" aria-label="YouTube" className="pg-ico">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M23 7.5c0-1.2-.97-2.17-2.17-2.17C18.62 5 15 5 12 5s-6.62 0-8.83.33A2.17 2.17 0 0 0 1 7.5c-.02 1.67-.02 3.33 0 5 0 1.2.97 2.17 2.17 2.17C5.38 15 9 15 12 15s6.62 0 8.83-.33A2.17 2.17 0 0 0 23 12.5c.02-1.67.02-3.33 0-5ZM10 13.75V7.25L15.5 11 10 13.75Z"/></svg>
              </a>
              <a href="#" aria-label="Telegram" className="pg-ico">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21.94 4.3c.36-.87-.5-1.71-1.36-1.36L2.9 9.35a.9.9 0 0 0 .06 1.68l5.95 2.2 2.2 5.95a.9.9 0 0 0 1.68.06L21.94 4.3ZM9.7 13.3l7.15-6.6-5.8 7.92-.2 2.38-1.15-3.7Z"/></svg>
              </a>
              <a href="#" aria-label="Dribbble" className="pg-ico">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2Zm6.44 7.6a7.9 7.9 0 0 0-4.6-4.6c1.22 1.75 2.15 3.65 2.79 5.62.64-.34 1.27-.7 1.82-1.02ZM12 4.2a7.8 7.8 0 0 1 3.63.9c-.94.67-2 .97-3.2 1.04-1.3.07-2.75-.2-4.33-.84A7.86 7.86 0 0 1 12 4.2Zm-6.44 6.2a7.8 7.8 0 0 1 3.1-5.4c1.97.84 3.72 1.2 5.27 1.12 1.06-.06 2.02-.3 2.88-.73A7.8 7.8 0 0 1 19.8 12c-2.83-.26-5.08.1-6.8 1.08-.46-.98-.98-1.95-1.58-2.9-1.34.44-3 .88-5.06 1.22Zm.24 2.2c2.18-.39 3.95-.83 5.32-1.28.54.88 1.02 1.79 1.45 2.72-1.41.8-2.53 1.98-3.34 3.55a7.84 7.84 0 0 1-3.43-5Zm5.2 5.2c.63-1.18 1.5-2.1 2.6-2.78.44 1.2.8 2.46 1.05 3.78A7.8 7.8 0 0 1 12 19.8Z"/></svg>
              </a>
            </div>

            <Link to="/buy" className="pg-btn">Buy template</Link>
          </aside>
        </div>

        {/* ===== bottom brand/credit row ===== */}
        <div className="pg-foot-bottom">
          <div className="pg-brand-mini">
            <span aria-hidden className="pg-logo">🐾</span>
            <span>Pet Grooming</span>
          </div>
          <p className="pg-credit">
           Copyright © 2025 Websolutionsusa | Powered by <a href="https://websolutionusa.com/">websolutionsusa.com </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
