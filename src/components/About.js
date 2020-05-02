import React from "react";
import idea from "../img/idea.jpg";

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2 className="display-2">About Us</h2>
            <p>
              We are about making every project a truely memorable experience as
              we don't just take your order and serve out a website or a mobile
              app. At <a href="">neupytech</a> we ensure that we get to know
              what you are all about and tailor your app to suit your market and
              audience.
            </p>
            <a href="#" className="btn btn-outline-primary">
              Learn more
            </a>
          </div>
          <div className="col-md-6 my-4">
            <img src={idea} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
