import React from "react";
import "../css/Transformation.css";
import before1 from "../assets/before1.jpg";
import after1 from "../assets/after1.jpg";
import before2 from "../assets/before2.jpg";
import after2 from "../assets/after2.jpg";
import before3 from "../assets/before3.jpg";
import after3 from "../assets/after3.jpg";

const transformations = [
  {
    title: "Overgrown Backyard to Lush Paradise",
    before: before1,
    after: after1,
  },
  {
    title: "Overgrown Backyard to Lush Paradise",
    before: before2,
    after: after2,
  },
  {
    title: "Overgrown Backyard to Lush Paradise",
    before: before3,
    after: after3,
  },
];

const Transformation = () => {
  return (
    <section className="transformation" aria-labelledby="transform-heading">
      <div className="transformation__inner">
        <header className="transformation__head">
          <h2 id="transform-heading">See the Transformation</h2>
          <p>
            From overgrown to outstanding — check out our recent projects.
          </p>
        </header>

        <div className="transformation__grid">
          {transformations.map((item, index) => (
            <div className="transform-card" key={index}>
              <div className="transform-card__images">
                <div className="img-wrapper before">
                  <img src={item.before} alt="Before transformation" />
                  <span className="badge badge-before">Before</span>
                </div>
                <div className="img-wrapper after">
                  <img src={item.after} alt="After transformation" />
                  <span className="badge badge-after">After</span>
                </div>
              </div>
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Transformation;
