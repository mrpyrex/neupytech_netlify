import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="back-to-top">
          <i className="fas fa-chevron-up"></i>
        </div>
        <div className="footer-content text-center">
          <div className="row">
            <div className="col-md-6">
              <div className="social-media">
                <h4>Follow Along</h4>
                <ul className="social-icons">
                  <li>
                    <i className="fab fa-twitter"></i>
                  </li>
                  <li>
                    <i className="fab fa-facebook"></i>
                  </li>
                  <li>
                    <i className="fab fa-instagram"></i>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="newsletter-container">
                <h4>Newsletter</h4>
                <form
                  name="newsletter"
                  method="post"
                  className="newsletter-form"
                >
                  <input type="hidden" name="form-name" value="newsletter" />
                  <input
                    type="email"
                    className="newsletter-input"
                    placeholder="Your email"
                    name="email"
                  />

                  <button className="newsletter-btn">
                    <i className="fas fa-envelope"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center my-5">
          {new Date().getFullYear()} &copy; Neupytech Digital Agency. All Rights
          Reserved | <Link to="#">Privacy Policy</Link> |{" "}
          <Link to="#">Terms</Link> | <Link to="#">Support</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
