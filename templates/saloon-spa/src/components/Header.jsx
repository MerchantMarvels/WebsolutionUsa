import React, { useState } from "react";
import logo from "../assets/logo.png"; // Import logo
import "../css/Header.css"; // Import styles

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        {/* Hamburger icon for mobile */}
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        {/* Navigation Links */}
        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          <a href="/templates/saloon/#services">Services</a>
          <a href="/templates/saloon/#about">About</a>
          <a href="/templates/saloon/#gallery">Gallery</a>
          <a href="/templates/saloon/#reviews">Reviews</a>
          <a href="/templates/saloon/#offers">Offers</a>
          <a href="/templates/saloon/#contact">Contact</a>
          <button className="book-btn">Book Now</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
