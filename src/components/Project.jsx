import React from "react";

import { Link } from "react-router-dom";

const Project = ({ project }) => {
  return (
    <div className="project">
      <div className="projectimg">
        <Link to={`/projects/${project.id}/${project.slug}`}>
          <img src={project.projectImage} alt={project.title} />
        </Link>
      </div>
    </div>
  );
};

export default Project;
