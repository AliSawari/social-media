import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineSend } from "react-icons/ai";
const UserInfo = ({ fullname, id, bio }) => {
  return (
    <div className="w-full text-center py-20">
    
      <h1 className="text-4xl mt-4 font-main text-white">{fullname}</h1>
      <p className="text-sm text-violet-700 font-main text-center py-2">
        {bio}
      </p>
    </div>
  );
};

export default UserInfo;
