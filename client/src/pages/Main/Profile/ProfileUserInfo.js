import React from "react";
import { useShowUserProfile } from "../../../hooks/useShowUserProfile";

const ProfileUserInfo = ({ profile, fullname, bio }) => {
  const mainProfile = useShowUserProfile(profile);
  return (
    <div className="w-full flex flex-col gap-4 items-center">
      <img
        src={mainProfile}
        className="rounded-full w-32 h-32 object-cover bg-violet-900 p-1"
        alt={fullname}
      />
      <h1 className="text-white font-main m-0 p-0">{fullname}</h1>
      <p className="text-violet-500 text-sm font-main m-0 p-0">{bio}</p>
    </div>
  );
};

export default ProfileUserInfo;
