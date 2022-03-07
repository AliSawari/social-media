import React from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const PostMedia = ({ src }) => {
  return (
    <div className="w-1/2">
      <LazyLoadImage src={src}
        placeholder={<div className="p-3"><Skeleton className="w-full h-100" /></div>}
        className="w-full rounded-lg object-cover h-100" alt="post media" />
    </div>
  );
};

export default PostMedia;
