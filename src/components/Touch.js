import React from "react";

const Touch = () => {
  return (
    <section id="get-in-touch">
      <h2 className="text-center display-2">Get In Touch</h2>
      <div className="container">
        <div className="row">
          <div id="touch-form" className="col-md-6">
            <form action="">
              <div className="form-group">
                <label for="exampleInputEmail1">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                />
              </div>
              <div className="form-group">
                <label for="exampleInputEmail1">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                />
              </div>
              <div className="form-group">
                <label for="exampleInputEmail1">Phone</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                />
              </div>
              <div className="form-group">
                <label for="exampleFormControlTextarea1">Message</label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="5"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-block">
                Send
              </button>
            </form>
          </div>
          <div className="col-md-6">
            <div className="container">
              <div className="row" id="contact-address">
                <div className="col-sm-12 my-2">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>Ikot Udoma Estate Road, Eket, Akwa Ibom</span>
                </div>
                <div className="col-sm-12 my-2">
                  <i className="fas fa-phone"></i>
                  <span>
                    <a href="tel:+2347033197665">+234 70 33197665</a>
                  </span>
                </div>
                <div className="col-sm-12 my-2">
                  <i className="fas fa-mail-bulk"></i>
                  <span>
                    <a href="mailto:info@neupytech.com">Send email</a>
                  </span>
                </div>
              </div>
              <div className="row" id="contact-social">
                <a href="https://twitter.com/neupytech">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://www.instagram.com/neupytech">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://facebook.com/neupytech/">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </div>
              <div className="row" id="map"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Touch;
