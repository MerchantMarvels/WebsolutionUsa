import React from "react";
import "../css/LocationsSection.css";
import Pin from '../assets/white-pin.png';

const weekly = [
  { day: "Monday", place: "Downtown Plaza", time: "11:00 AM - 3:00 PM" },
  { day: "Tuesday", place: "Tech Park West", time: "11:30 AM - 2:30 PM" },
  { day: "Wednesday", place: "University Square", time: "12:00 PM - 8:00 PM" },
  { day: "Thursday", place: "Business District", time: "11:00 AM - 3:00 PM" },
  { day: "Friday", place: "Riverside Market", time: "5:00 PM - 10:00 PM" },
  { day: "Saturday", place: "Festival Grounds", time: "12:00 PM - 9:00 PM" },
];

const events = [
  {
    title: "Summer Food Festival",
    venue: "Central Park",
    date: "July 15–17, 2025",
    time: "10:00 AM - 8:00 PM",
  },
  {
    title: "Street Food Championship",
    venue: "Harbor Square",
    date: "August 5, 2025",
    time: "12:00 PM - 10:00 PM",
  },
  {
    title: "Music & Munchies Night",
    venue: "Amphitheater Plaza",
    date: "August 20, 2025",
    time: "6:00 PM - 11:00 PM",
  },
];

const CalendarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="5" width="18" height="16" rx="3" stroke="#94a3b8" strokeWidth="1.6"/>
    <path d="M8 3v4M16 3v4M3 9h18" stroke="#94a3b8" strokeWidth="1.6"/>
  </svg>
);

const ClockIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="9" stroke="#94a3b8" strokeWidth="1.6"/>
    <path d="M12 7v5l3 2" stroke="#94a3b8" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);

const PinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12z" stroke="#94a3b8" strokeWidth="1.6"/>
    <circle cx="12" cy="10" r="2.8" stroke="#94a3b8" strokeWidth="1.6"/>
  </svg>
);

const LocationsSection = () => {
  return (
    <section id="locations" className="locs">
      <div className="locs-head">
        <span data-aos="fade-up" className="chip">LOCATIONS</span>
        <h2 data-aos="fade-up">Where to Find Us</h2>
        <p data-aos="fade-up">We're always on the move, bringing fresh flavors to your neighborhood</p>
      </div>

      <div className="locs-grid">
        {/* Weekly Schedule */}
        <div data-aos="fade-right" className="panel">
          <div className="panel-title">Weekly Schedule</div>
          <div className="week-list">
            {weekly.map((w) => (
              <div key={w.day} className="week-item">
                <div className="week-left">
                  <span className="day">{w.day}</span>
                  <span className="place">
                    <PinIcon /> {w.place}
                  </span>
                </div>
                <div className="time">{w.time}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div data-aos="fade-left" className="panel">
          <div className="panel-title">Upcoming Events</div>

          <div className="events">
            {events.map((e) => (
              <article className="event-card" key={e.title}>
                <div className="event-main">
                  <h3>{e.title}</h3>
                  <div className="venue">{e.venue}</div>
                </div>

                <div className="pills">
                  <span className="pill">
                    <CalendarIcon /> {e.date}
                  </span>
                  <span className="pill">
                    <ClockIcon /> {e.time}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div data-aos="fade-up" className="cta-wrap">
        <button className="book-btn cta">
          <img
            src={Pin}
            alt="Track Our Truck"
          />
          Track Our Truck
        </button>
      </div>
    </section>
  );
};

export default LocationsSection;
