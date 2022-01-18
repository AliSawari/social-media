import React from "react";
import { FaCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const UserItem = ({ id, profile, fullname, chat, online }) => {
  return (
    <Link to="/chat/id">
      <div className="px-4 mb-2 w-full flex justify-between cursor-pointer border-l-2 border-l-transparent hover:border-violet-800 transition py-3">
        <div className="justify-center flex gap-3">
          <div>
            <img
              src={profile}
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
            className={`text-sm ${
              online ? "text-violet-600" : "text-neutral-700"
            }`}
          />
        </div>
      </div>
    </Link>
  );
};

export default UserItem;
