import React from "react";
import PostList from "../components/PostList";

const Blog = () => {
  return (
    <section id="blog">
      <div className="global-headline">
        <h2 className="sub-headline">Blog</h2>
      </div>
      <PostList />
    </section>
  );
};

export default Blog;
