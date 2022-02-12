import React from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProfileAddPostLink = () => {
  return (
    <div className="w-full flex ">
      <Link
        to="/post/add"
        className="text-sm transition w-full border flex p-2 justify-center items-center gap-2 font-main text-violet-500 border-violet-500 hover:bg-violet-700 hover:text-white "
      >
        <FaPlus /> Add Post
      </Link>
    </div>
  );
};

export default ProfileAddPostLink;
