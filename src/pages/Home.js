import React, { Fragment } from "react";
import Header from "../components/Header";
import Service from "../components/Service";
import About from "../components/About";
import Touch from "../components/Touch";
const Home = () => {
  return (
    <Fragment>
      <Header />
      <Service />
      <About />
      <Touch />
    </Fragment>
  );
};

export default Home;
