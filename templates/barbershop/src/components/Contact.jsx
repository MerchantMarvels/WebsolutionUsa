import React, { useState } from "react";
import "../css/contact.css";
const IconPin = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
    <path fill="currentColor" d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5Z"/>
  </svg>
);
const IconPhone = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
    <path fill="currentColor" d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.1-.2c1.2.4 2.6.7 4 .7c.6 0 1 .4 1 1V20c0 1.1-.9 2-2 2C10.8 22 2 13.2 2 2c0-1.1.9-2 2-2h3.3c.6 0 1 .4 1 1c0 1.4.2 2.8.7 4c.1.4 0 .8-.3 1.1L6.6 10.8Z"/>
  </svg>
);
const IconMail = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
    <path fill="currentColor" d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4l-8 5L4 8V6l8 5l8-5v2Z"/>
  </svg>
);

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks! We'll be in touch.\n\n${JSON.stringify(form, null, 2)}`);
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-inner">
        <header className="contact-header">
          <h2>Get in Touch</h2>
          <p>Book your cut or visit us anytime.</p>
        </header>

        <div className="contact-grid">
          {/* form */}
          <form className="contact-form" onSubmit={onSubmit}>
            <label className="field">
              <span className="form-label">Name</span>
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={onChange}
                required
              />
            </label>

            <label className="field">
              <span className="form-label">Email</span>
              <input
                name="email"
                type="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={onChange}
                required
              />
            </label>

            <label className="field">
              <span className="form-label">Message</span>
              <textarea
                name="message"
                rows="6"
                placeholder="Your message..."
                value={form.message}
                onChange={onChange}
                required
              />
            </label>

            <button className="btn btn-accent" type="submit">Send Message</button>
          </form>

          {/* right column */}
          <div className="contact-side">
            <div className="info-card">
              <h3>Visit Us</h3>
              <ul className="info-list">
                <li className="info-row">
                  <span className="info-ico"><IconPin /></span>
                  <div>
                    <div className="info-title">Address</div>
                    <div className="info-text">123 Barber Street, Orlando, Canada</div>
                  </div>
                </li>
                <li className="info-row">
                  <span className="info-ico"><IconPhone /></span>
                  <div>
                    <div className="info-title">Phone</div>
                    <div className="info-text">+91 98765 43210</div>
                  </div>
                </li>
                <li className="info-row">
                  <span className="info-ico"><IconMail /></span>
                  <div>
                    <div className="info-title">Email</div>
                    <div className="info-text">info@barbershop.com</div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="map-card">
              <iframe
                title="Map"
                src="https://www.google.com/maps?q=Dallas,TX&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
