import React from "react";
import "../styles/Banner.css";
import callIcon from "../assests/call.png";
import heroImg from "../assests/banner_image.jpg"; // replace with your image path

const Banner = () => {
  return (
    <section className="banner">
      <div className="container">
        {/* LEFT TEXT */}
        <div className="banner-text">
          <span className="badge">Digital Marketing Agency</span>
          <h1>
            We help bold brands grow with{" "}
            <span className="highlight">strategic from marketing</span>
          </h1>
          <p>
            We help bold brands grow with strategic marketing, creative storytelling, 
            and data-driven campaigns that connect and inspire action.
          </p>
          <div className="cta-group">
            <a href="#call" className="btn primary">
              <img className="icon" src={callIcon} alt="Call Icon" /> Book a Free Call
            </a>
            <a href="#projects" className="btn secondary">
              <span>→</span> Our Projects
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="banner-image">
          <img src={heroImg} alt="Team working" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
