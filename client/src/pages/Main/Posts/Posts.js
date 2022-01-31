import React from "react";
import PostItem from "./PostItem";

const Posts = ({ posts }) => {
  return (
    <div className="w-full h-auto p-4 flex gap-5 ">
      {posts.map((item) => (
        <PostItem {...item} key={item._id} />
      ))}
    </div>
  );
};

export default Posts;
