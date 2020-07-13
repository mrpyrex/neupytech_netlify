import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <h1>
          <span className="first-word">Concieve.</span> Succeed
        </h1>
        <div className="headline-description">
          <p>
            We design powerful websites and mobile apps that drive engagement,
            solve problems, and delight users
          </p>
        </div>
        <div className="single-animation">
          <Link to="/contact" className="btn cta-btn">
            Let's Start
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
