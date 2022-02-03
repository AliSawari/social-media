import React from "react";
import { FaCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const UserItem = ({ _id, profile, fullname, chat, online }) => {
  return (
    <Link to={`/chat/list/${_id}`}>
      <div className="left-sides-header">
        <div className="justify-center flex gap-3">
          <div>
            <img
              src={
                profile.length
                  ? `http://localhost:4000/public/images/${profile}`
                  : "https://gravatar.com/avatar/6c2ff79dddfe69146d3a3a55c0bc7f52?s=400&d=robohash&r=x"
              }
              width="35"
              height="35"
              alt="profile user"
              className="rounded-lg border-1"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="font-main text-sm text-violet-600">{fullname}</h3>
            {chat && (
              <p className="font-main text-xs text-neutral-500">{chat}</p>
            )}
          </div>
        </div>
        <div className="items-center flex">
          <FaCircle
            className={`text-sm ${online ? "text-violet-600" : "text-neutral-700"
              }`}
          />
        </div>
      </div>
    </Link>
  );
};

export default UserItem;
