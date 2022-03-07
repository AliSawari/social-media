import React from "react";
import PostComments from "./PostComments";
import PostItemHeader from "./PostItemHeader";
import PostOperations from "./PostOperations";
import PostTags from "./PostTags";

const PostContent = ({ description, likes, id, user, link, tags }) => {
  return (
    <div className="w-1/2 px-5 relative">
      <PostItemHeader id={id} user={user} link={link} />
      <p className="text-gray-800 font-main w-full py-3">{description}</p>
      <PostTags tags={tags} />
      <div className="w-full absolute bottom-0">
        <PostOperations id={id} user={user} likes={likes} />
        <PostComments id={id} />
      </div>
    </div>
  );
};

export default PostContent;
