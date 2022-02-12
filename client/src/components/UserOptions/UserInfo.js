import React from "react";
import { BsChevronDown } from "react-icons/bs";
import { useShowUserProfile } from "../../hooks/useShowUserProfile";
const UserInfo = ({ profile, fullname, onClick }) => {
  const mainProfile = useShowUserProfile(profile);
  return (
    <div
      className="flex pb-3 cursor-pointer gap-3 justify-start items-center pr-3"
      onClick={onClick}
    >
      <img
        src={mainProfile}
        alt="profile user"
        className="rounded-full border-1 w-10 h-10 object-cover"
      />
      <h3 className="text-white text-center flex items-center text-sm h-10 leading-none font-main ">
        {fullname} &nbsp; <BsChevronDown className="text-violet-500" />
      </h3>
    </div>
  );
};

export default UserInfo;
