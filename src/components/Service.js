import React from "react";
import bullhorn from "../img/bullhorn.svg";
import email from "../img/email.svg";
import mobiledev from "../img/mobiledev.svg";
import webdev from "../img/webdev.svg";

const Service = () => {
  return (
    <section id="service">
      <div className="container">
        <h2>Our Services</h2>
        <div className="row">
          <div className="col-md-3 text-center">
            <div className="icon">
              <img src={webdev} alt="" />
            </div>
            <h3>Web Development</h3>
            <p>
              We combine visually appealing user interface to bring your
              audience the best user experience backed by effective
              functionality. We are also your one-stop shop for SEO, hosting and
              maintenance.
            </p>
          </div>
          <div className="col-md-3 text-center">
            <div className="icon">
              <img src={mobiledev} alt="" />
            </div>
            <h3>Mobile Apps</h3>
            <p>
              Your unique ideas are transformed into user-friendly mobile apps
              that run and perfom swiftly on both Android and IOS devices.
            </p>
          </div>
          <div className="col-md-3 text-center">
            <div className="icon">
              <img src={email} alt="" />
            </div>
            <h3>Digital Marketing</h3>
            <p>
              Our goal is to leverage customer brands in creating digital
              strategies unique to their products effectively and efficiently
              through various digital channels.
            </p>
          </div>
          <div className="col-md-3 text-center">
            <div className="icon">
              <img src={bullhorn} alt="" />
            </div>
            <h3>Social Media Marketing</h3>
            <p>
              Through social networking on platforms such as Facebook and
              Instagram, we bring our customers brands identity; making every
              like and comment count in sales figures.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
