import React from "react";
import "../css/OurStory.css";
import heartIcon from "../assets/heart.png";
import tagIcon from "../assets/tag.png";
import teamIcon from "../assets/team.png";

import image from  '../assets/restaurant/our-story.jpg';

const HeartIcon = () => (
  <img src={heartIcon} alt="Heart Icon" />
);

const AwardIcon = () => (
  <img src={tagIcon} alt="Award Icon" />
);

const TeamIcon = () => (
   <img src={teamIcon} alt="Team Icon" />
);

const OurStory = () => {
  return (
    <section className="story">
      <div className="story-inner">
        {/* Left */}
        <div data-aos="fade-right" className="story-left">
          <span className="chip">ABOUT</span>
          <h2 className="title">
            Our <span className="stroke">Story</span>
          </h2>

          <p className="lead">
            What started as a dream in 2019 has rolled into a community favorite.
            We&apos;re not just serving food — we&apos;re creating experiences.
          </p>

          <p className="muted">
            Every dish is crafted with love, grilled to perfection, and served
            with genuine hospitality. We believe in quality ingredients, bold
            flavors, and bringing people together.
          </p>

          {/* Mission card */}
          <div className="mission">
            <div className="mission-icon">
              <HeartIcon />
            </div>
            <div className="mission-text">
              <div className="mission-title">Our Mission</div>
              <div className="mission-sub">
                Serving bold flavors with local love — one plate at a time,
                bringing communities together through exceptional street food.
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="stats">
            <div className="stat">
              <div className="stat-icon"><AwardIcon /></div>
              <div className="stat-value">50K+</div>
              <div className="stat-label">Happy Customers</div>
            </div>
            <div className="stat">
              <div className="stat-icon"><TeamIcon /></div>
              <div className="stat-value">6</div>
              <div className="stat-label">Team Members</div>
            </div>
          </div>
        </div>

        {/* Right */}
        <div data-aos="fade-left" className="story-right">
          <div className="photo-wrap">
            <img
              src={image}
              alt="Guests at the food truck"
            />
            <div className="badge">
              <div className="badge-year">Est. 2019</div>
              <div className="badge-sub">Serving Fresh Since</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
