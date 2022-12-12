import { useQuery } from "@apollo/client";
import React from "react";
import { GET_PROJECTS_QUERY } from "../graphql/query";

const ProjectList = () => {
  const { data, loading, error } = useQuery(GET_PROJECTS_QUERY);
  if (loading) return <p>loading ...</p>;
  if (error) return <p>error!</p>;
  console.log("data", data);
  return <h1>Projects</h1>;
};

export default ProjectList;
