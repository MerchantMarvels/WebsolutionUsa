import React, { useState } from "react";

const HeroBanner = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    time: ""
  });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    // replace with your submit logic
    alert(`Booking submitted!\n\n${JSON.stringify(form, null, 2)}`);
  };

  return (
    <section className="hero" role="banner" aria-label="Instant booking banner">
      <div className="hero-inner">
        <div className="hero-copy">
          <h1>
            Look Sharp.
            <br />
            Feel Confident.
          </h1>
          <p className="subhead">
            Professional grooming services designed to bring out your best style.
          </p>
          <a className="btn btn-primary" href="#book">
            Book Your Cut
          </a>
        </div>

        <form className="card" onSubmit={onSubmit} id="book" aria-label="Instant Booking">
          <h2 className="card-title">Instant Booking</h2>

          <label className="field">
            <span>Full Name</span>
            <input
              name="name"
              type="text"
              placeholder="John Doe"
              value={form.name}
              onChange={onChange}
              required
            />
          </label>

          <label className="field">
            <span>Phone</span>
            <input
              name="phone"
              type="tel"
              placeholder="+1 98765 43210"
              value={form.phone}
              onChange={onChange}
              required
            />
          </label>

          <label className="field">
            <span>Service</span>
            <select name="service" value={form.service} onChange={onChange} required>
              <option value="">Select a service</option>
              <option>Haircut</option>
              <option>Beard Trim</option>
              <option>Shave</option>
              <option>Coloring</option>
            </select>
          </label>

          <div className="row">
            <label className="field">
              <span>Date</span>
              <input
                name="date"
                type="date"
                value={form.date}
                onChange={onChange}
                required
              />
            </label>

            <label className="field">
              <span>Time</span>
              <input
                name="time"
                type="time"
                value={form.time}
                onChange={onChange}
                required
              />
            </label>
          </div>

          <button className="btn btn-accent" type="submit">
            Confirm Booking
          </button>
        </form>
      </div>
    </section>
  );
};

export default HeroBanner;
