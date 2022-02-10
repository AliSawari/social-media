import React from "react";
import { IoIosMore } from "react-icons/io";
import { Link } from "react-router-dom";
import { useShowUserProfile } from '../../../hooks/useShowUserProfile'
const PostItemHeader = ({ user }) => {
  const mainProfile = useShowUserProfile(user.profile);
  return (
    <div className="w-full flex justify-between mb-4">
      <div className="flex gap-3 items-center">
        <img
          src={mainProfile}
          width="42px"
          height="42px"
          alt={user.fullname}
          className="rounded-lg h-10 w-10 object-cover"
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
