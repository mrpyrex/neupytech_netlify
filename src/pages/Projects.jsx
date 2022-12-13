import React from "react";
import ProjectList from "../components/ProjectList";
import { useQuery } from "@apollo/client";

const Projects = () => {
  return (
    <section id="jobs">
      <div className="container">
        <div className="global-headline">
          <h2 className="sub-headline">Projects</h2>
          <ProjectList />
        </div>
      </div>
    </section>
  );
};

export default Projects;
