import React, { Fragment } from "react";

import Hero from "../components/Hero";
import HomeAbout from "../components/HomeAbout";
import HomeServices from "../components/HomeServices";
import HomeDifference from "../components/HomeDifference";
import HomeContact from "../components/HomeContact";

const Home = () => {
  return (
    <Fragment>
      <Hero />
      <HomeAbout />
      <HomeServices />
      <HomeDifference />
      <HomeContact />
    </Fragment>
  );
};

export default Home;
