import React from "react";
import { Link } from "react-router-dom";
import { useShowUserProfile } from "../../../hooks/useShowUserProfile";
import { useGetUserId } from "../../../hooks/useGetUserId";

const UserItem = ({ _id, profile, fullname, message, messages }) => {
  const mainProfile = useShowUserProfile(profile);
  const { id } = useGetUserId();
  const unreadMessagesLength = messages && messages.filter(item => item.isSeen === false && item.sender !== id).length;
  return (
    <Link to={`/chat/list/${_id}`}>
      <div className="left-sides-header rounded w-full">
        <div className="justify-center flex gap-3 w-full">
          <div className="w-1/6">
            <img
              src={mainProfile}
              alt="profile user"
              className="rounded-lg border-1 h-10 w-10 object-cover"
            />
          </div>
          <div className="w-5/6 flex flex-col justify-center">
            <h3 className="font-main text-sm text-black flex justify-between w-full">{fullname} {unreadMessagesLength ? <span className="font-main w-6 h-6 rounded-md text-neutral-900 flex justify-center items-center  bg-violet-800">{unreadMessagesLength}</span> : ""}</h3>
            {message && <p className="text-xs text-violet-400 font-main">{message}</p>}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default UserItem;
