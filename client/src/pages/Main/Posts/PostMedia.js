import React from "react";



const PostMedia = ({ src }) => {
  return (
    <div className="w-1/2">
      <img src={src} className="w-full rounded-lg object-cover h-full" />
    </div>
  );
};

export default PostMedia;
