import React from "react";
import warranty from "../img/warranty.png";
import check from "../img/check.png";
import clock from "../img/clock.png";

const HomeDifference = () => {
  return (
    <section className="home-difference">
      <div className="container">
        <div className="global-headline">
          <h2 className="sub-headline">What Makes Us Different</h2>
        </div>
        <div className="row difference-content">
          <div className="col-md-4">
            <img src={warranty} alt="" />
            <h4>Assurance of quality</h4>
          </div>
          <div className="col-md-4">
            <img src={check} alt="" />
            <h4>Resolve Business Issues</h4>
          </div>
          <div className="col-md-4">
            <img src={clock} alt="" />
            <h4>Timely Delivery</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeDifference;
