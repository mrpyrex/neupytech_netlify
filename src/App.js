import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PostDetails from "./components/PostDetails";
import ProjectInfo from "./pages/ProjectInfo";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 400,
      duration: 2000,
    });
  }, []);
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route exact path="/projects/:id/:slug" component={ProjectInfo} />
        <Route path="/projects" component={Projects} />
        <Route exact path="/blog/:id/:slug" component={PostDetails} />
        <Route path="/blog" component={Blog} />
        <Route path="/about" component={About} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
