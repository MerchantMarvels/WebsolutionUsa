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
                    <a href="/templates/landscaping/">Home</a>
                    <a href="/templates/landscaping/#services">Services</a>
                    <a href="/templates/landscaping/#about">About</a>
                    <a href="/templates/landscaping/#pricing">Pricing</a>
                    <button className="book-btn">Contact</button>
                </nav>
            </div>
        </header>
    );
};

export default Header;
