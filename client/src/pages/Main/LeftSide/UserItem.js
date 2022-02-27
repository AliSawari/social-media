import React from "react";
import { FaCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useShowUserProfile } from "../../../hooks/useShowUserProfile";

const UserItem = ({ _id, profile, fullname, message }) => {
  const mainProfile = useShowUserProfile(profile);
  return (
    <Link to={`/chat/list/${_id}`}>
      <div className="left-sides-header">
        <div className="justify-center flex gap-3">
          <div>
            <img
              src={mainProfile}
              alt="profile user"
              className="rounded-lg border-1 h-10 w-10 object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="font-main text-sm text-violet-600">{fullname}</h3>
            {message && <p className="text-xs text-violet-400 font-main">{message}</p>}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default UserItem;
