import React, { useState } from "react";
import logo from "../assets/logo.png"; // Import logo
import Icon from "../assets/arrow.png"; // Import cart icon
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
                    <a href="/templates/food-truck/">Home</a>
                    <a href="/templates/food-truck/#menu">Our Menu</a>
                    <a href="/templates/food-truck/#gallery">Gallery</a>
                    <a href="/templates/food-truck/#locations">Locations</a>
                    <a href="/templates/food-truck/#connect">Connect</a>
                    <button className="book-btn">Order Now <img src={Icon} alt="Cart" /></button>
                </nav>
            </div>
        </header>
    );
};

export default Header;
