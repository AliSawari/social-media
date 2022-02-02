import React from "react";
import { Link } from "react-router-dom";
const SearchUserItem = ({ profile, fullname, bio, username }) => {
  return (
    <Link to={`/@${username}`}>
      <div className="w-full flex  py-2 items-center hover:border-l hover:border-l-violet-600 border-l border-l-transparent">
        <div className="px-3">
          <img
            src={
              profile
                ? `http://localhost:4000/public/images/${profile}`
                : "https://gravatar.com/avatar/6c2ff79dddfe69146d3a3a55c0bc7f52?s=400&d=robohash&r=x"
            }
            className="bg-violet-700 w-20 h-20 rounded-full object-cover"
            alt={fullname}
          />
        </div>
        <div className="px-3">
          <h3 className="font-main text-violet-600">{fullname}</h3>
          <p className="font-main text-xs text-gray-400">{bio}</p>
        </div>
      </div>
    </Link>
  );
};

export default SearchUserItem;
