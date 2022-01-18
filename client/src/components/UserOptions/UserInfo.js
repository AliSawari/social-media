import React from "react";
import { BsChevronDown } from "react-icons/bs";
const UserInfo = ({ profile, username, onClick }) => {
  return (
    <div
      className="flex pb-3 cursor-pointer gap-3 justify-start items-center pr-3"
      onClick={onClick}
    >
      <img
        src={profile}
        width="35"
        height="35"
        alt="profile user"
        className="rounded-lg border-1"
      />
      <h3 className="text-white text-center text-sm flex items-center font-main-font">
        {username} &nbsp; <BsChevronDown className="text-violet-500" />
      </h3>
    </div>
  );
};

export default UserInfo;
