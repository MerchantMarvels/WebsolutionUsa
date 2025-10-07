import React from "react";
import "../css/barbers.css";
import BarberImg1 from "../assets/bb1.jpg";
import BarberImg2 from "../assets/bb2.jpg";
import BarberImg3 from "../assets/bb3.jpg";

const team = [
  {
    name: "Marlon McDonald",
    role: "Master Barber",
    img: BarberImg1,
    socials: { x: "#", fb: "#", ig: "#" }
  },
  {
    name: "Jerry Banks",
    role: "Beard Specialist",
    img: BarberImg2,
    socials: { x: "#", fb: "#", ig: "#" }
  },
  {
    name: "John Bailey",
    role: "Style Expert",
    img: BarberImg3,
    socials: { x: "#", fb: "#", ig: "#" }
  }
];

const IconX = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
    <path fill="currentColor" d="M13.4 10.7L20.5 3h-1.7l-6 6.6L7.3 3H3l7.4 10L3 21h1.7l6.3-7l5.8 7H21l-7.6-10.3Z"/>
  </svg>
);
const IconFB = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
    <path fill="currentColor" d="M13 10h3V7h-3c-1.7 0-3 1.3-3 3v2H8v3h2v6h3v-6h3l1-3h-4v-2c0-.6.4-1 1-1Z"/>
  </svg>
);
const IconIG = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
    <path fill="currentColor" d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3a6 6 0 1 1 0 12a6 6 0 0 1 0-12Zm0 2.5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7ZM18 6.5a1 1 0 1 1 0 2a1 1 0 0 1 0-2Z"/>
  </svg>
);

export default function Barbers() {
  return (
    <section id="team" className="team">
      <div className="team__inner">
        <header className="team__header">
          <h2>Meet Our Barbers</h2>
          <p>Skilled hands. Sharp eyes. Decades of experience.</p>
        </header>

        <div className="team__grid">
          {team.map((b) => (
            <article key={b.name} className="team-card">
              <div className="team-card__photo">
                <img src={b.img} alt={`${b.name} portrait`} />
              </div>

              <div className="team-card__meta">
                <h3>{b.name}</h3>
                <span className="role">{b.role}</span>

                <ul className="socials" aria-label={`${b.name} social links`}>
                  <li>
                    <a href={b.fb} aria-label="Facebook">
                      <IconFB />
                    </a>
                  </li>
                  <li>
                    <a href={b.ig} aria-label="Instagram">
                      <IconIG />
                    </a>
                  </li>
                  <li>
                    <a href={b.x} aria-label="X / Twitter">
                      <IconX />
                    </a>
                  </li>
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
