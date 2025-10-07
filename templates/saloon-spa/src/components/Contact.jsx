import React from "react";
import "../css/Contact.css";
import pin from "../assets/pin.png";
import phone from "../assets/phone.png";
import email from "../assets/email.png";
import time from "../assets/time.png";
import fb from "../assets/fb.png";
import insta from "../assets/insta.png";

export default function Contact() {
  const address = "123 Barber Street, Orlando, Canada";
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    address
  )}&z=12&output=embed`;

  return (
    <section className="contact" id="contact">
      <div className="contact__inner">
        <h2 className="contact__title">Visit Us</h2>
        <div className="contact__underline" />
        <p className="contact__sub">
          Find us in the heart of the city, where tranquility awaits
        </p>

        <div className="contact__grid">
          {/* Left: Info card */}
          <article className="contact__card">
            <h3 className="contact__cardTitle">Get in Touch</h3>

            <ul className="contact__list">
              <li className="row">
                <span className="badge"><img src={pin} alt="Location" /></span>
                <div>
                  <div className="row-label">Location</div>
                  <address className="row-value">
                    123 Barber Street, Orlando,<br /> Canada
                  </address>
                </div>
              </li>

              <li className="row">
                <span className="badge"><img src={phone} alt="Phone" /></span>
                <div>
                  <div className="row-label">Phone</div>
                  <a className="row-value link" href="tel:+919876543210">
                    +91 98765 43210
                  </a>
                </div>
              </li>

              <li className="row">
                <span className="badge"><img src={email} alt="Email" /></span>
                <div>
                  <div className="row-label">Email</div>
                  <a className="row-value link" href="mailto:info@luxespa.com">
                    info@luxespa.com
                  </a>
                </div>
              </li>

              <li className="row">
                <span className="badge"><img src={time} alt="Hours" /></span>
                <div>
                  <div className="row-label">Hours</div>
                  <div className="row-value">
                    Monday – Saturday: 9:00 AM – 8:00 PM<br />
                    Sunday: 10:00 AM – 6:00 PM
                  </div>
                </div>
              </li>
            </ul>

            <hr className="divider" />

            <div className="social">
              <span>Follow us on social media</span>
              <div className="icons">
                <a
                  aria-label="Facebook"
                  className="social-btn"
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={fb} alt="Facebook" />
                </a>
                <a
                  aria-label="Instagram"
                  className="social-btn"
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                >
                    <img src={insta} alt="Instagram" />
                </a>
              </div>
            </div>
          </article>

          {/* Right: Map */}
          <div className="contact__map">
            <iframe
              title="Luxe Spa location"
              src={mapSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
