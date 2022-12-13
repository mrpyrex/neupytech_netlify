import { useQuery } from "@apollo/client";
import React from "react";
import { GET_PROJECTS_QUERY } from "../graphql/query";
import Project from "./Project";
import Spinner from "./Spinner";

const ProjectList = () => {
  const { data, loading, error } = useQuery(GET_PROJECTS_QUERY);
  if (loading) return <Spinner />;
  if (error) return <p>error!</p>;
  console.log("data", data);
  return (
    <>
      {!loading && !error && (
        <div className="projects">
          {data.projects.map((project) => (
            <Project project={project} key={project.id} />
          ))}
        </div>
      )}
    </>
  );
};

export default ProjectList;
