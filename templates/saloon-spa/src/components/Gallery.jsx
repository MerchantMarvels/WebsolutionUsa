import React, { useEffect, useRef, useState } from "react";
import "../css/Gallery.css";
import aboutImage1 from "../assets/about1.jpg";
import aboutImage2 from "../assets/about2.jpg";
import aboutImage3 from "../assets/about3.jpg";
import aboutImage4 from "../assets/about4.jpg";
import aboutImage5 from "../assets/about5.png";
import aboutImage6 from "../assets/about6.png";

// Replace with your own imports/paths
const IMAGES = [
  aboutImage1,
  aboutImage2,
  aboutImage3,
  aboutImage4,
  aboutImage5,
  aboutImage6,
  
];

const Item = ({ src, alt = "Gallery image", onClick }) => {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setShow(true),
      { threshold: 0.25 }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <button
      ref={ref}
      className={`gallery-item ${show ? "fade-up-in" : "fade-up"}`}
      onClick={onClick}
      aria-label="Open image"
    >
      <img src={src} alt={alt} loading="lazy" />
    </button>
  );
};

const Gallery = () => {
  const [loaded, setLoaded] = useState(false);
  const [active, setActive] = useState(null); // index of open image

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 40);
    return () => clearTimeout(t);
  }, []);

  // close on ESC
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section className="gallery" id="gallery">
      <div className="gallery__inner">
        <h2 className={`gallery__title ${loaded ? "fade-up-in" : "fade-up"}`}>
          Gallery
        </h2>
        <div className="gallery__underline" />
        <p className={`gallery__sub ${loaded ? "fade-up-in-delay1" : "fade-up"}`}>
          Step into our serene sanctuary and experience the ambiance of luxury
        </p>

        <div className="gallery-grid">
          {IMAGES.map((src, i) => (
            <Item key={i} src={src} onClick={() => setActive(i)} />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {active !== null && (
        <div className="lightbox" onClick={() => setActive(null)}>
          <figure className="lightbox__content" onClick={(e) => e.stopPropagation()}>
            <img src={IMAGES[active]} alt="" />
            <button
              className="lightbox__close"
              aria-label="Close"
              onClick={() => setActive(null)}
            >
              ×
            </button>
          </figure>
        </div>
      )}
    </section>
  );
};

export default Gallery;
