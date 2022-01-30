import React from "react";
import PostComments from "./PostComments";
import PostContent from "./PostContent";
import PostItemHeader from "./PostItemHeader";
import PostMedia from "./PostMedia";
import PostOperations from "./PostOperations";
const PostItem = ({ user, description, image }) => {
  return (
    <div className="w-full rounded bg-neutral-800 shadow-sm p-4">
      <PostItemHeader user={user} />
      <PostMedia src={`http://localhost:4000/public/images/${image}`} />
      <PostOperations />
      <PostContent description={description} />
      <PostComments />
    </div>
  );
};

export default PostItem;
