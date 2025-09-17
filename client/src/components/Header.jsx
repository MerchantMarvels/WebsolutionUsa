import { useState, useEffect } from "react";
import "./Header.css";

export default function Header() {
    const [open, setOpen] = useState(false);

    const handleClose = () => setOpen(false);

    // Close on ESC key
    useEffect(() => {
        const onKeyDown = (e) => {
            if (e.key === "Escape") handleClose();
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, []);

    return (
        <header className={`site-header ${open ? "is-open" : ""}`}>
            <div className="nav-wrap">
                {/* Left: logo */}
                <a className="brand" href="/" aria-label="Web Solution USA">
                    <img src="/logo.png" alt="Logo" />
                </a>

                {/* Center: pill menu */}
                <nav className="nav-pill" aria-label="Primary">
                    {/* Hamburger button */}
                    <button
                        className="hamburger"
                        onClick={() => setOpen(true)}
                        aria-expanded={open}
                        aria-controls="mobileMenu"
                    >
                        <span />
                        <span />
                        <span />
                    </button>

                    {/* Backdrop */}
                    {open && <div className="backdrop" onClick={handleClose} />}

                    {/* Drawer menu */}
                    <ul id="mobileMenu" className="nav-list">
                        <button
                            className="close-btn"
                            onClick={handleClose}
                            aria-label="Close menu"
                        >
                            ✕
                        </button>
                        <li><a href="#home" onClick={handleClose}>Home <span className="chev">▾</span></a></li>
                        <li><a href="#services" onClick={handleClose}>Services <span className="chev">▾</span></a></li>
                        <li><a href="#pricing" onClick={handleClose}>Price</a></li>
                        <li><a href="tel:+13028772478" onClick={handleClose}>Contact us</a></li>
                    </ul>
                </nav>

                {/* Right: actions */}
                <div className="actions">
                    {/* <a className="link" href="#login">Login</a> */}
                    <a className="btn" href="tel:+13028772478">Get support </a>
                </div>
            </div>
        </header>
    );
}
