import React from "react";

import PostListItem from "../post-list-item/post-list-item";

import "./post-list.css";

const PostList = (props) => {
  return (
    <ul className="app-list list-group">
      <PostListItem label="React Udemy" important />
      <PostListItem label="LinkdIn blog" />
      <PostListItem label="JS Udemy" />
    </ul>
  );
};

export default PostList;
