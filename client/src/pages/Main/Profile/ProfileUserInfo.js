import React from "react";
import { useShowUserProfile } from "../../../hooks/useShowUserProfile";

const ProfileUserInfo = ({ profile, fullname, bio }) => {
  const mainProfile = useShowUserProfile(profile);
  return (
    <>
      <img
        src={mainProfile}
        width={156}
        className="rounded-full w-40 h-40 object-cover bg-violet-900 p-3"
        height={156}

        alt={fullname}
      />
      <h1 className="text-white font-main m-0 p-0">{fullname}</h1>
      <p className="text-violet-500 text-sm font-main m-0 p-0">{bio}</p>
    </>
  );
};

export default ProfileUserInfo;
