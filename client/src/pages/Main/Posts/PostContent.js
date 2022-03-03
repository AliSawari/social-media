import React from "react";
import PostComments from "./PostComments";
import PostItemHeader from "./PostItemHeader";
import PostOperations from "./PostOperations";

const PostContent = ({ description , likes , id , user , link }) => {
  return (    
    <div className="w-1/2 px-5 relative">
      <PostItemHeader id={id} user={user} link={link} />
      <p className="text-gray-800 font-main w-full py-3">{description}</p>
      <PostComments id={id} />
      <PostOperations id={id} user={user} likes={likes} />
    </div>
  );
};

export default PostContent;
