import React from "react";

const PostContent = ({ description }) => {
  return (
    <div className="w-1/2 py-2">
      <p className="text-white font-main">{description}</p>
    </div>
  );
};

export default PostContent;
