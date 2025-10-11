import React from "react";
import Slider from "react-slick";
import "../css/ReviewsSection.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviews = [
  {
    name: "Sarah Martinez",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop",
    rating: 5,
    text:
      "Best street tacos I’ve ever had! The flavors are incredible and the service is always friendly. Can’t wait for them to come back to my neighborhood!",
  },
  {
    name: "Michael Chen",
    avatar: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=200&h=200&fit=crop",
    rating: 5,
    text:
      "The signature burger is a game changer. Fresh ingredients, perfectly cooked, and that secret sauce is absolutely fire. Worth every penny!",
  },
  {
    name: "Emily Rodriguez",
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&h=200&fit=crop",
    rating: 5,
    text:
      "This food truck has ruined all other food trucks for me. Everything is made with such care and passion. The loaded fries are addictive!",
  },
  {
    name: "Jamal Patel",
    avatar: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=200&h=200&fit=crop",
    rating: 5,
    text:
      "Simple menu, bold flavors. Portions are generous and prices are fair. Staff is cheerful—love the vibes!",
  },
];

const QuoteMark = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path d="M10 6H6v6h4v6H4V8a2 2 0 0 1 2-2h4v0Z" fill="#EA580C"/>
    <path d="M20 6h-4v6h4v6h-6V8a2 2 0 0 1 2-2h4v0Z" fill="#EA580C"/>
  </svg>
);

const Star = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="#f59e0b">
    <path d="m12 2 2.8 6.5 7 .6-5.3 4.6 1.7 6.8-6.2-3.8-6.2 3.8 1.7-6.8L2.2 9.1l7-.6L12 2z"/>
  </svg>
);

const ReviewsSection = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3200,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 700, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="reviews">
      <div className="rv-head">
        <span data-aos="fade-up" className="chip">REVIEWS</span>
        <h2 data-aos="fade-up">Loved by Locals</h2>
        <p data-aos="fade-up">Don’t just take our word for it — hear from our amazing customers</p>
      </div>

      <div data-aos="fade-up" className="rv-slider-wrap">
        <Slider {...settings}>
          {reviews.map((r, i) => (
            <div key={i} className="rv-slide">
              <article className="rv-card">
                <div className="rv-top">
                  <div className="rv-user">
                    <img src={r.avatar} alt={r.name} className="rv-avatar" />
                    <div>
                      <div className="rv-name">{r.name}</div>
                      <div className="rv-stars">
                        {Array.from({ length: r.rating }).map((_, k) => (
                          <Star key={k} />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="rv-quote"><QuoteMark /></div>
                </div>

                <p className="rv-text">“{r.text}”</p>
              </article>
            </div>
          ))}
        </Slider>
      </div>

      <div data-aos="fade-up" className="rv-ctas">
        <button className="btn-solid">Read More</button>
        <button className="btn-outline">Leave a Review</button>
      </div>
    </section>
  );
};

export default ReviewsSection;
