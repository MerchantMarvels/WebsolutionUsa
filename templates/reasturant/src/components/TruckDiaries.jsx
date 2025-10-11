import React from "react";
import "../css/TruckDiaries.css";
import image1 from '../assets/restaurant/gallery1.jpg';
import image2 from '../assets/restaurant/gallery2.png';
import image3 from '../assets/restaurant/gallery3.jpg';
import image4 from '../assets/restaurant/gallery4.jpg';
import image5 from '../assets/restaurant/gallery5.jpg';
import image6 from '../assets/restaurant/gallery6.jpg';
import image7 from '../assets/restaurant/gallery7.jpg';
import image8 from '../assets/menu1.jpg';

const photos = {
  a: image1,
  b: image2,
  c: image3,
  d: image4,
  e: image5,
  f: image6,
  g: image7,
  h: image8,
};

const TruckDiaries = () => {
  return (
    <section id="gallery" className="td-section">
      <div className="td-header">
        <span data-aos="fade-up" className="td-chip">GALLERY</span>
        <h2 data-aos="fade-up" className="td-title">Behind the Scenes</h2>
        <p data-aos="fade-up" className="td-sub">Every dish tells a story. Every customer becomes family.</p>
      </div>

      <div data-aos="fade-up" className="td-grid">
        <img className="td-img img-a" src={photos.a} alt="Food truck at night" />
        <img className="td-img img-b" src={photos.b} alt="Colorful food truck" />
        <img className="td-img img-c" src={photos.c} alt="Tacos close up" />
        <img className="td-img img-d" src={photos.d} alt="Food truck window" />
        <img className="td-img img-e" src={photos.e} alt="Friends with food" />
        <img className="td-img img-f" src={photos.f} alt="Vintage trailer" />
        <img className="td-img img-g" src={photos.g} alt="Crew posing" />
        <img className="td-img img-h" src={photos.h} alt="Sandwich and fries" />
      </div>
    </section>
  );
};

export default TruckDiaries;
