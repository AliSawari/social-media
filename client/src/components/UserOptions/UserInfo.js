import React from "react";
import { BsChevronDown } from "react-icons/bs";
const UserInfo = ({ profile, fullname, onClick }) => {
  console.log(profile);
  return (
    <div
      className="flex pb-3 cursor-pointer gap-3 justify-start items-center pr-3"
      onClick={onClick}
    >
      <img
        src={
          profile.length
            ? profile
            : "https://avatars.dicebear.com/v2/identicon/0015f0eb0ef4b541766587a1f85cb6dd.svg"
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
