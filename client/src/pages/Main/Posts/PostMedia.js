import React from "react";



const PostMedia = ({ src }) => {
  return (
    <div className="w-full">
      <img src={src} className="w-full rounded-md object-cover"/>
    </div>
  );
};

export default PostMedia;
