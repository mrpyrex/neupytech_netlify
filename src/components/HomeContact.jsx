import React from "react";
import contact from "../img/contact.png";
import { Link } from "react-router-dom";

const HomeContact = () => {
  return (
    <section className="home-contact">
      <div className="container">
        <div className="global-headline">
          <h2 className="sub-headline">Contact Us</h2>
        </div>
        <div className="row">
          <div className="col-md-6">
            <img src={contact} alt="" />
          </div>
          <div className="col-md-6 contact-info">
            <p>
              Ready to talk to us about your newly conceived project or you just
              want to update an existing one?
            </p>
            <Link to="/contact" className="btn btn-body">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeContact;
