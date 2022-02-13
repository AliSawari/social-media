import React from "react";
import PostComments from "./PostComments";
import PostContent from "./PostContent";
import PostItemHeader from "./PostItemHeader";
import PostMedia from "./PostMedia";
import PostOperations from "./PostOperations";
const PostItem = ({ _id: id, user, description, image, likes, comments , link }) => {
  return (
    <div className="w-full rounded bg-neutral-800 shadow-sm p-4">
      <PostItemHeader id={id} user={user} link={link}  />
      <PostMedia src={`http://localhost:4000/public/images/${image}`} />
      <PostOperations id={id} user={user} likes={likes} />
      <PostContent description={description} />
      <PostComments id={id} comments={comments} />
    </div>
  );
};

export default PostItem;
