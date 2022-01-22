import React from "react";

const ProfileUserInfo = ({ profile, fullname, bio }) => {
  return (
    <>
      <img
        src={
          profile
            ? profile
            : "https://gravatar.com/avatar/6c2ff79dddfe69146d3a3a55c0bc7f52?s=400&d=robohash&r=x"
        }
        width={156}
        className="rounded-full"
        height={156}
        alt={fullname}
      />
      <h1 className="text-white font-main m-0 p-0">{fullname}</h1>
      <p className="text-violet-500 text-sm font-main m-0 p-0">{bio}</p>
    </>
  );
};

export default ProfileUserInfo;
