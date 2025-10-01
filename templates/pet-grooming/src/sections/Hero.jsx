import { Link } from "react-router-dom";
import dogImage from "../assets/dog-image.png"
import "../styles/hero.css";

export default function Hero() {
  return (
    <section id="hero" className="pg-hero" aria-labelledby="hero-title">
      <div className="pg-hero__wrap">
        {/* LEFT — copy */}
        <div className="pg-hero__copy">
          <h1 id="hero-title" className="pg-hero__title">
            <span>Pamper your pet</span>
            <span>with expert care</span>
          </h1>

          <p className="pg-hero__lead">
            Providing expert care and personalized grooming for happy, healthy
            pets every time
          </p>

          <div className="pg-hero__cta">
            <Link to="/booking" className="pg-btn">Book appointment</Link>
          </div>
        </div>

        {/* RIGHT — image + decorative shapes */}
        <div className="pg-hero__image">
          <img
            src={dogImage}
            alt="Happy, freshly groomed dog"
            loading="eager"
          />
          {/* small blue accents (pure CSS) */}
          <i className="pg-swish pg-swish--1" aria-hidden />
          <i className="pg-swish pg-swish--2" aria-hidden />
          <i className="pg-swish pg-swish--3" aria-hidden />
        </div>
      </div>
    </section>
  );
}
