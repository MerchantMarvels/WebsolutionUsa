import React from "react";
import logo from "../assets/footer-logo.png"; // Import logo
import "../css/Footer.css";



const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="footer">
            <div className="footer__inner">
                {/* Brand */}
                <div className="ft__col">
                    <div className="logo">
                        <img src={logo} alt="Logo" />
                    </div>
                    <p className="ft__tagline">Growing Beautiful Lawns Since 2012</p>
                </div>

                {/* Quick Links */}
                <div className="ft__col">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="/templates/landscaping/">Home</a></li>
                        <li><a href="/templates/landscaping/#services">Services</a></li>
                        <li><a href="/templates/landscaping/#about">About</a></li>
                        <li><a href="/templates/landscaping/#pricing">Pricing</a></li>
                        <li><a href="/templates/landscaping/#contact">Contact</a></li>
                    </ul>
                </div>

                {/* Services */}
                <div className="ft__col">
                    <h4>Services</h4>
                    <ul>
                        <li><a href="/templates/landscaping/#services">Lawn Mowing</a></li>
                        <li><a href="/templates/landscaping/#services">Garden Design</a></li>
                        <li><a href="/templates/landscaping/#services">Tree Trimming</a></li>
                        <li><a href="/templates/landscaping/#services">Landscaping</a></li>
                    </ul>
                </div>

                {/* Connect */}
                <div className="ft__col">
                    <h4>Connect With Us</h4>
                    <div className="ft__social">
                        <a href="#" aria-label="Facebook" className="icon">
                            <svg viewBox="0 0 24 24"><path d="M15 3h-2.2A3.8 3.8 0 0 0 9 6.8V9H7v3h2v9h3v-9h2.2L15 9h-3V6.8c0-.44.36-.8.8-.8H15V3z" fill="currentColor" /></svg>
                        </a>
                        <a href="#" aria-label="Instagram" className="icon">
                            <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2" /><circle cx="12" cy="12" r="3.5" fill="none" stroke="currentColor" strokeWidth="2" /><circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" /></svg>
                        </a>
                        <a href="#" aria-label="Location" className="icon">
                            <svg viewBox="0 0 24 24"><path d="M12 21s7-5.33 7-12a7 7 0 1 0-14 0c0 6.67 7 12 7 12z" fill="none" stroke="currentColor" strokeWidth="2" /><circle cx="12" cy="9.5" r="2.5" fill="currentColor" /></svg>
                        </a>
                    </div>
                    <address className="ft__addr">
                        123 Green Avenue, Garden District<br />
                        Orlando, Canada
                    </address>
                </div>
            </div>

            <div className="footer__divider" aria-hidden="true"></div>

            <div className="footer__bottom">
                <p>© {year} GreenScape Experts. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
