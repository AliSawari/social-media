import React from "react";
import PostComments from "./PostComments";
import PostContent from "./PostContent";
import PostItemHeader from "./PostItemHeader";
import PostMedia from "./PostMedia";
import PostOperations from "./PostOperations";
const PostItem = ({ _id: id, user, description, image, likes, link }) => {
  return (
    <div className="w-full rounded bg-neutral-800 shadow-md p-4">
      <PostItemHeader id={id} user={user} link={link} />
      <PostMedia src={`http://localhost:4000/public/images/${image}`} />
      <PostContent description={description} />
      <PostOperations id={id} user={user} likes={likes} />
      <PostComments id={id} />
    </div>
  );
};

export default PostItem;
