import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  return (
    <div className="col-md-6">
      <div className="card mb-3">
        <div className="row no-gutters">
          <div className="col-md-4">
            <Link to={`/blog/${post.id}/${post.slug}`}>
              <img src={post.thumb} alt={post.title} className="card-img" />
            </Link>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{post.title}</h5>
              <p className="card-text">
                {post.content.length > 121
                  ? post.content.substring(0, 120) + "..."
                  : post.content}
              </p>
              <p className="card-text d-flex">
                <Link className="mr-auto">{post.category.catTitle}</Link>
                <small className="text-muted">
                  Last updated <Moment fromNow>{post.createdAt}</Moment>
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
