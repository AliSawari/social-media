import React from "react";
const UserInfo = ({ fullname, bio }) => {
  return (
    <div className="px-4">
      <h2 className="text-3xl text-gray-600 font-main">{fullname}</h2>
      <p className="font-main text-sm text-gray-500 pt-3">{bio}</p>
    </div>
  );
};

export default UserInfo;
