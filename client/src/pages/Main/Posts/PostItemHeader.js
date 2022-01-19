import React from "react";
import { IoIosMore } from "react-icons/io";
const PostItemHeader = () => {
  return (
    <div className="w-full flex justify-between mb-4">
      <div className="flex gap-3 items-center">
        <img
          src="https://picsum.photos/200/200?grayscale"
          width="42"
          height="42"
          alt="profile user"
          className="rounded-lg bg-violet-500  p-1 object-cover"
        />
        <h3 className="text-white font-main">Hamidreza Ramzani</h3>
      </div>
      <div className="flex items-center">
        <button className="text-violet-500 text-xl">
          <IoIosMore />
        </button>
      </div>
    </div>
  );
};

export default PostItemHeader;
