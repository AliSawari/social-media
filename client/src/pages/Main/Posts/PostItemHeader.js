import React from "react";
import { IoIosMore } from "react-icons/io";
const PostItemHeader = ({ user }) => {
  return (
    <div className="w-full flex justify-between mb-4">
      <div className="flex gap-3 items-center">
        <img
          src={
            user.profile.length
              ? user.profile
              : "https://gravatar.com/avatar/6c2ff79dddfe69146d3a3a55c0bc7f52?s=400&d=robohash&r=x"
          }
          width="42"
          height="42"
          alt={user.fullname}
          className="rounded-lg bg-violet-500  p-1 object-cover"
        />
        <h3 className="text-white font-main">{user.fullname}</h3>
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
