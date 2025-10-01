import { Link } from "react-router-dom";
import "../styles/our-story.css";
import dogImage2 from "../assets/dog-image2.png";

function IconUsers() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
         aria-hidden focusable="false">
      <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
            stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      <circle cx="10" cy="7" r="4" stroke="currentColor" strokeWidth="1.8"/>
      <path d="M22 21v-2a4 4 0 0 0-3-3.87M17 3a4 4 0 0 1 0 7.73"
            stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  );
}
function IconBadge() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
         aria-hidden focusable="false">
      <path d="M12 2l3 3h4v4l3 3-3 3v4h-4l-3 3-3-3H5v-4l-3-3 3-3V5h4l3-3Z"
            stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
      <path d="M9.5 12.5l1.8 1.8 3.7-3.7" stroke="currentColor"
            strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  );
}
function IconHeart() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
         aria-hidden focusable="false">
      <path d="M20.8 4.6a5 5 0 0 0-7.1 0L12 6.3l-1.7-1.7a5 5 0 1 0-7.1 7.1l1.7 1.7L12 22l7.1-7.1 1.7-1.7a5 5 0 0 0 0-7.1Z"
            stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
    </svg>
  );
}

export default function OurStory() {
  return (
    <section id="our-story" className="pg-story" aria-labelledby="story-title">
      <div className="pg-story__wrap">

        {/* LEFT — copy */}
        <div className="pg-story__copy">
          <p className="pg-story__eyebrow">our story</p>

          <h2 id="story-title" className="pg-story__title">
            Caring for pets in<br/>California since 2006
          </h2>

          <p className="pg-story__lead">
            Nam commodo suscipit quam. Nulla sit amet est. Aenean viverra
            rhoncus pede.
          </p>

          <ul className="pg-story__bullets">
            <li><span className="ic"><IconUsers/></span> Trusted by thousands</li>
            <li><span className="ic"><IconBadge/></span> Certificate awarded</li>
            <li><span className="ic"><IconHeart/></span> Made by professionals</li>
          </ul>

          <Link to="/about" className="pg-story__btn">about us</Link>
        </div>

        {/* RIGHT — media */}
        <div className="pg-story__media">
          <img
            src={dogImage2}
            alt="Happy owner cuddling a golden retriever"
            loading="lazy"
          />
          {/* decorative red scribbles */}
          <i className="pg-scribble pg-scribble--1" aria-hidden />
          <i className="pg-scribble pg-scribble--2" aria-hidden />
          <i className="pg-scribble pg-scribble--3" aria-hidden />
        </div>
      </div>
    </section>
  );
}
