import { useQuery } from "@apollo/client";
import React from "react";
import { GET_POSTS_QUERY } from "../graphql/query";
import Spinner from "./Spinner";

const PostList = () => {
  const { data, loading, error } = useQuery(GET_POSTS_QUERY);
  if (loading) return <Spinner />;
  if (error) return <p>error!</p>;
  console.log("data", data);
  return <>{!loading && !error && <div className="posts">posts</div>}</>;
};

export default PostList;
