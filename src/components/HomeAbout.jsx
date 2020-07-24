import React from "react";
import about from "../img/about.png";
import { Link } from "react-router-dom";

const HomeAbout = () => {
  return (
    <section
      data-aos="fade-up"
      data-aos-easing="ease-in-out"
      className="home-about"
    >
      <div className="container">
        <div className="global-headline">
          <h2 className="sub-headline">About Us</h2>
        </div>
        <div className="row">
          <div className="col-md-6 animate-left home-about-info">
            <p>
              We are about making every project a truely memorable experience as
              we don't just take your order and serve out a website or a mobile
              app. At <a href="neupytech.com">neupytech</a> we ensure that we
              get to know what you are all about and tailor your app to suit
              your market and audience.
            </p>
            <Link to="/about" className="btn btn-body">
              Learn more
            </Link>
          </div>
          <div className="col-md-6 animate-right">
            <img src={about} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
