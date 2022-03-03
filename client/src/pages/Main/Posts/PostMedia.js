import React from "react";



const PostMedia = ({ src }) => {
  return (
    <div className="w-1/2 bg-red-500">
      <img src={src} className="w-full rounded-md object-cover h-full" />
    </div>
  );
};

export default PostMedia;
