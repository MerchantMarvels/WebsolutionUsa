import React from "react";

const Header = () => {
  return (
   <header className="header">
  <div className="inner">
    <a className="brand" href="/templates/barbershop/"><span className="brand-mark">✂</span><span className="brand-text">LOGOIPSUM</span></a>

    <input id="nav-toggle" type="checkbox" className="nav-toggle" aria-label="Toggle navigation" />
    <label htmlFor="nav-toggle" className="burger" aria-hidden="true">
      <span></span><span></span><span></span>
    </label>

    <nav className="nav">
      <a href="/templates/barbershop/#services">Services</a>
      <a href="/templates/barbershop/#team">Meet Our Barbers</a>
      <a href="/templates/barbershop/#pricing">Pricing</a>
      <a href="/templates/barbershop/#testimonials">Testimonial</a>
      <a href="/templates/barbershop/#gallery">Gallery</a>
    </nav>

    <a className="btn btn-outline" href="/templates/barbershop/#contact">Get in Touch</a>
  </div>
</header>

  );
};

export default Header;
