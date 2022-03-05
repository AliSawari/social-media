import React from "react";
import PostMedia from "./PostMedia";
import PostContent from "./PostContent";
const PostItem = ({ _id: id, user, description, image, likes, link , tags}) => {
  return (
    <div className="w-full rounded py-4">
      <div className="flex">
        <PostMedia src={`http://localhost:4000/public/images/${image}`} />
        <PostContent tags={tags} description={description} likes={likes} id={id} user={user} link={link} />
      </div>
      
    </div>
  );
};

export default PostItem;
