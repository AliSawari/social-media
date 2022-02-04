import React from "react";
import { IoIosMore } from "react-icons/io";
import { Link } from "react-router-dom";
const PostItemHeader = ({ user }) => {
  return (
    <div className="w-full flex justify-between mb-4">
      <div className="flex gap-3 items-center">
        <img
          src={
            user.profile.length
              ? `http://localhost:4000/public/images/${user.profile}`
              : "https://gravatar.com/avatar/6c2ff79dddfe69146d3a3a55c0bc7f52?s=400&d=robohash&r=x"
          }
          width="42px"
          height="42px"
          alt={user.fullname}
          className="rounded-lg bg-violet-500 h-10 w-10  p-1 object-cover"
        />
        <Link to={`/@${user.username}`}>
          <h3 className="text-white font-main">{user.fullname}</h3>
        </Link>
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
