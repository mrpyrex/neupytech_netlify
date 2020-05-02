import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="footer">
      <div class="container text-center">
        {new Date().getFullYear()} &copy; Neupytech Digital Agency. All Rights
        Reserved | <Link to="#">Privacy Policy</Link> |{" "}
        <Link to="#">Terms</Link> | <Link to="#">Support</Link>
      </div>
    </footer>
  );
};

export default Footer;
