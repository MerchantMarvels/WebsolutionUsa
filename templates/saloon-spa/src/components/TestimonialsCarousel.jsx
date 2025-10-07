import React from "react";
import Slider from "react-slick";
import "../css/TestimonialsCarousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DEFAULT_ITEMS = [
  {
    name: "Anita George",
    service: "Massage Therapy",
    text:
      "Best massage I've ever had! The therapists are incredibly skilled and the ambiance is so peaceful.",
    stars: 5,
  },
  {
    name: "Priya Sharma",
    service: "Facial Treatment",
    text:
      "The facial treatment left my skin glowing for weeks. Absolutely worth every rupee!",
    stars: 5,
  },
  {
    name: "Ritu Malhotra",
    service: "Body Spa",
    text:
      "Professional service and such a relaxing atmosphere. I come here every month now.",
    stars: 5,
  },
  {
    name: "Priya Sharma",
    service: "Facial Treatment",
    text:
      "The facial treatment left my skin glowing for weeks. Absolutely worth every rupee!",
    stars: 5,
  },
  // add more to see autoplay loop kick in
];

const StarRow = ({ n = 5 }) => (
  <div className="stars" aria-label={`${n} out of 5 stars`}>
    {"★★★★★".slice(0, n)}
  </div>
);

const PrevArrow = ({ onClick }) => (
  <button aria-label="Previous" className="nav prev" onClick={onClick}>‹</button>
);
const NextArrow = ({ onClick }) => (
  <button aria-label="Next" className="nav next" onClick={onClick}>›</button>
);

export default function TestimonialsCarousel({ items = DEFAULT_ITEMS }) {
  const autoplay = items.length > 3;     // only autoplay if >3
  const infinite = items.length > 3;     // loop only if >3
  const arrows = items.length > 1;       // show arrows if more than one

  const settings = {
    dots: true,
    arrows,
    infinite,
    autoplay,
    autoplaySpeed: 3500,
    speed: 600,
    cssEase: "ease",
    slidesToShow: 3,          // desktop default
    slidesToScroll: 1,
    pauseOnHover: true,
    pauseOnFocus: true,
    adaptiveHeight: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,     // tablet
        settings: { slidesToShow: 2, slidesToScroll: 1 }
      },
      {
        breakpoint: 640,      // mobile: exactly 1 slide only
        settings: { slidesToShow: 1, slidesToScroll: 1, arrows: false }
      },
    ],
  };

  return (
    <section className="testi" id="reviews">
      <div className="testi__inner">
        <h2 className="testi__title">Client Stories</h2>
        <div className="testi__underline" />
        <p className="testi__sub">
          Hear what our valued clients have to say about their experiences
        </p>

        <Slider {...settings} className="slick-wrapper">
          {items.map((t, i) => (
            <article key={i} className="card">
              <header className="card__top">
                <StarRow n={t.stars || 5} />
                <span className="quote">❝❞</span>
              </header>
              <p className="card__text">“{t.text}”</p>
              <hr className="card__rule" />
              <div className="card__user">
                <div className="name">{t.name}</div>
                <div className="service">{t.service}</div>
              </div>
            </article>
          ))}
        </Slider>
      </div>
    </section>
  );
}
