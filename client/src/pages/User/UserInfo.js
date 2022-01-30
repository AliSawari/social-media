import React from "react";
import { Link } from "react-router-dom";

const UserInfo = ({ fullname, username, bio }) => {
  return (
    <div className="w-full text-center py-20">
      <Link to="" className="text-xs text-teal-700 font-main">
        @{username}
      </Link>
      <h1 className="text-4xl font-main text-white">{fullname}</h1>
      <p className="text-sm text-violet-700 font-main text-center py-2">
        {bio}
      </p>
    </div>
  );
};

export default UserInfo;
