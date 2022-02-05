import React from "react";
import { Link } from "react-router-dom";

const StoryItem = () => {
  return (
    <Link to="/">
      <div className="w-60 h-52 rounded relative flex justify-center items-center">
        <div className="z-30 flex justify-center flex-col items-center">
          <img
            src="https://picsum.photos/200/200?grayscale"
            alt="profile"
            width={105}
            height={105}
            className="rounded-full p-1 bg-gradient-to-l from-violet-800 to-violet-900"
          />
          <h3 className="py-2 text-center font-main text-white">Hamidreza Ramzani</h3>
          <span className="text-sm text-violet-500">2S</span>
        </div>

      </div>
    </Link>
  );
};

export default StoryItem;
