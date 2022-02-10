import React from "react";
const UserInfo = ({ fullname, bio }) => {
  return (
    <div className="px-4">
      <h2 className="text-3xl text-white font-main">{fullname}</h2>
      <p className="font-main text-sm text-violet-300">{bio}</p>
    </div>
  );
};

export default UserInfo;
