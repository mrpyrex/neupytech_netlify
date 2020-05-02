import React, { Fragment } from "react";

const Header = () => {
  return (
    <Fragment>
      <section id="header">
        <h1>Concieve. Succeed</h1>
        <p>
          Powerful websites, web apps, and interfaces that drive engagement,
          solve problems, and delight users.
        </p>
        <a className="header-btn" href="#get-in-touch">
          Let's Make It Happen
        </a>
      </section>
    </Fragment>
  );
};

export default Header;
