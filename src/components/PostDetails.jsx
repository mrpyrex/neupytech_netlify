import React from "react";
import { Query } from "react-apollo";
import { GET_POSTDETAIL_QUERY } from "../graphql/query";

const PostDetails = ({ match }) => {
  const id = match.params.id;
  const slug = match.params.slug;
  return (
    <section>
      <div className="container">
        <div className="row">
          <Query query={GET_POSTDETAIL_QUERY} variables={{ id, slug }}>
            {({ data, loading, error }) => {
              if (loading) return <h4>loading...</h4>;
              if (error) return <h4>error!</h4>;
              return (
                <div className="col-md-10">
                  <h2>{data.post.title}</h2>
                  <p>{data.post.content}</p>
                </div>
              );
            }}
          </Query>
        </div>
      </div>
    </section>
  );
};

export default PostDetails;
