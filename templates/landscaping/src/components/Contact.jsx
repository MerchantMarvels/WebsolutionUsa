import React, { useState } from "react";
import "../css/Contact.css";

const IconPhone = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M22 16.92v2a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.06A19.5 19.5 0 0 1 3.14 10.8 19.8 19.8 0 0 1 .08 2.18 2 2 0 0 1 2.06 0h2a2 2 0 0 1 2 1.72c.14 1.05.38 2.07.7 3.06a2 2 0 0 1-.45 2.11L5 8a16 16 0 0 0 7 7l1.11-1.31a2 2 0 0 1 2.11-.45c.99.32 2.01.56 3.06.7A2 2 0 0 1 22 16.92z" fill="currentColor"/>
  </svg>
);
const IconMail = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 2 8 6 8-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IconPin = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 22s7-5.33 7-12a7 7 0 1 0-14 0c0 6.67 7 12 7 12z" fill="none" stroke="currentColor" strokeWidth="2" />
    <circle cx="12" cy="10" r="3" fill="currentColor"/>
  </svg>
);
const IconClock = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 7v5l3 2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

 const address = "123 Barber Street, Orlando, Canada";
 const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    address
  )}&z=12&output=embed`;

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: wire to your backend or service (EmailJS, Formspree, etc.)
    alert("Message sent! (demo)");
    setForm({ name: "", email: "", phone: "", service: "", message: "" });
  };

  return (
    <section className="contact" id="contact" aria-labelledby="contact-heading">
      <div className="contact__inner">
        <header className="contact__head">
          <h2 id="contact-heading">Get in Touch</h2>
          <p>Ready to transform your outdoor space? Fill the form or call us today.</p>
        </header>

        <div className="contact__grid">
          {/* LEFT: info */}
          <aside className="contact__card contact__info">
            <h3>Contact Information</h3>

            <ul className="info-list" role="list">
              <li>
                <span className="icon"><IconPhone /></span>
                <div>
                  <div className="info-title">Phone</div>
                  <a href="tel:+919876543210">+91 98765 43210</a>
                </div>
              </li>

              <li>
                <span className="icon"><IconMail /></span>
                <div>
                  <div className="info-title">Email</div>
                  <a href="mailto:info@greenscapeexperts.com">info@greenscapeexperts.com</a>
                </div>
              </li>

              <li>
                <span className="icon"><IconPin /></span>
                <div>
                  <div className="info-title">Address</div>
                  <p>123 Green Avenue, Garden District<br/>Orlando, Canada</p>
                </div>
              </li>

              <li>
                <span className="icon"><IconClock /></span>
                <div>
                  <div className="info-title">Business Hours</div>
                  <p>Mon – Fri: 8:00 AM – 6:00 PM<br/>Sat: 9:00 AM – 4:00 PM<br/>Sun: Closed</p>
                </div>
              </li>
            </ul>

            <div className="map">
               <iframe
              title="Luxe Spa location"
              src={mapSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            </div>
          </aside>

          {/* RIGHT: form */}
          <div className="contact__card contact__form">
            <form onSubmit={handleSubmit} noValidate>
              <div className="field">
                <label htmlFor="name">Full Name <span aria-hidden="true">*</span></label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  required
                  value={form.name}
                  onChange={handleChange}
                />
              </div>

              <div className="field">
                <label htmlFor="email">Email Address <span aria-hidden="true">*</span></label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                  value={form.email}
                  onChange={handleChange}
                />
              </div>

              <div className="field">
                <label htmlFor="phone">Phone Number <span aria-hidden="true">*</span></label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  required
                  value={form.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="field">
                <label htmlFor="service">Service Type <span aria-hidden="true">*</span></label>
                <div className="selectwrap">
                  <select
                    id="service"
                    name="service"
                    required
                    value={form.service}
                    onChange={handleChange}
                  >
                    <option value="">Select a service</option>
                    <option>Lawn Mowing</option>
                    <option>Garden Design</option>
                    <option>Tree Trimming</option>
                    <option>Landscaping</option>
                  </select>
                  <span className="chev" aria-hidden="true">▾</span>
                </div>
              </div>

              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Tell us about your project..."
                  value={form.message}
                  onChange={handleChange}
                />
              </div>

              <button className="submit" type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
