import React, { Fragment } from "react";
import { Query } from "react-apollo";
import { GET_POSTS_QUERY } from "../graphql/query";
import Post from "./Post";

const PostList = () => {
  return (
    <div className="container">
      <div className="row" id="post-list">
        <Query query={GET_POSTS_QUERY}>
          {({ data, loading, error }) => {
            if (loading) return <h4>loading...</h4>;
            if (error) return <h4>error!</h4>;
            return (
              <Fragment>
                {data.posts.map((post) => (
                  <Post key={post.id} post={post} />
                ))}
              </Fragment>
            );
          }}
        </Query>
      </div>
    </div>
  );
};

export default PostList;
