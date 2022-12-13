import { useQuery } from "@apollo/client";
import React from "react";
import Spinner from "../components/Spinner";
import { GET_PROJECT_DETAIL } from "../graphql/query";

const ProjectInfo = (props) => {
  const slug = props.match.params.slug;
  const { data, loading, error } = useQuery(GET_PROJECT_DETAIL, {
    variables: { slug },
  });

  console.log("data :>> ", data);

  if (loading) return <Spinner />;
  if (error) return <h4>error!</h4>;

  return (
    <section>
      <div className="container">
        <div className="projectinfo">
          <h2 className="projecttitle">{data.project.title}</h2>
          <img src={data.project.projectImage} alt={data.project.title} />
          <div className="info">
            <h4>Description</h4>
            <p>{data.project.description}</p>
            <hr />
            <h4>Client: {data.project.client}</h4>
            <hr />
            <h4>Industry: {data.project.industry}</h4>
            {/* <hr />
              <h4>Stacks: </h4> */}
            <hr />
            <h4>
              URL:
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={data.project.projectUrl}
              >
                {data.project.projectUrl}
              </a>
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectInfo;
