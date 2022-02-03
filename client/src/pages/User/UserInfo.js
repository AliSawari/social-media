import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineSend } from "react-icons/ai";
const UserInfo = ({ fullname, id, bio }) => {
  return (
    <div className="w-full text-center py-20">
      <Link
        to={`/chat/list/${id}`}
        className="text-sm bg-violet-700 h-12 py-1 px-2 rounded flex items-center justify-center gap-2 text-white mb-3 font-main"
      >
        <AiOutlineSend fontSize={18} /> Send Message
      </Link>
      <h1 className="text-4xl mt-4 font-main text-white">{fullname}</h1>
      <p className="text-sm text-violet-700 font-main text-center py-2">
        {bio}
      </p>
    </div>
  );
};

export default UserInfo;
