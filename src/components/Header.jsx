import React, { useState } from "react";
import neupytech1 from "../img/neupytech1.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header>
      <div className="container">
        <div className="menu-toggle" onClick={() => setToggle(!toggle)}>
          {toggle ? (
            <i className="fas fa-times"></i>
          ) : (
            <i className="fas fa-bars"></i>
          )}
        </div>
        <nav className="nav">
          <Link className="logo" to="/">
            <img src={neupytech1} alt="www.neupytech.com" />
          </Link>
          <ul className={toggle ? "nav-list open" : "nav-list"}>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/projects" className="nav-link">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/blog" className="nav-link">
                Blog
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
