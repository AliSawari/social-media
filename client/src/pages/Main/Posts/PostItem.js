import React from "react";
import PostComments from "./PostComments";
import PostContent from "./PostContent";
import PostItemHeader from "./PostItemHeader";
import PostMedia from "./PostMedia";
import PostOperations from "./PostOperations";
const PostItem = () => {
  return (
    <div className="w-full rounded bg-neutral-800 shadow-sm p-4">
      <PostItemHeader />
      <PostMedia />
      <PostOperations />
      <PostContent />
      <PostComments />
    </div>
  );
};

export default PostItem;
