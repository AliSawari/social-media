import React from "react";
import { Link } from "react-router-dom";

const StoryItem = () => {
  return (
    <Link to="/">
      <div className="w-60 h-96 rounded relative flex justify-center items-center">
        <div className="z-30 flex justify-center flex-col items-center">
          <img
            src="https://picsum.photos/200/200?grayscale"
            alt="profile"
            width={105}
            height={105}
            className="rounded-full p-1 bg-gradient-to-l from-violet-800 to-violet-900"
          />
          <h3 className="py-2 text-center font-main text-white">Hamidreza Ramzani</h3> 
        </div>
        <div className="h-96 rounded overflow-hidden absolute left-0 top-0 z-0">
          <img
            src="https://picsum.photos/600/500?grayscale"
            alt="story"
            className="h-full  blur-sm"
          />
        </div>
        <span className="absolute bottom-3 text-white font-main text-sm">2s</span>
      </div>
    </Link>
  );
};

export default StoryItem;
