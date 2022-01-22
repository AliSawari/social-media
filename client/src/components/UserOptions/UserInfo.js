import React from "react";
import { BsChevronDown } from "react-icons/bs";
const UserInfo = ({ profile, fullname, onClick }) => {
  return (
    <div
      className="flex pb-3 cursor-pointer gap-3 justify-start items-center pr-3"
      onClick={onClick}
    >
      <img
        src={
          profile.length
            ? profile
            : "https://gravatar.com/avatar/6c2ff79dddfe69146d3a3a55c0bc7f52?s=400&d=robohash&r=x"
        }
        width="35"
        height="35"
        alt="profile user"
        className="rounded-lg border-1"
      />
      <h3 className="text-white text-center text-sm flex items-center font-main-font">
        {fullname} &nbsp; <BsChevronDown className="text-violet-500" />
      </h3>
    </div>
  );
};

export default UserInfo;
