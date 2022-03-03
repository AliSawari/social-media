import React from "react";
import Profile from '../Profile/Profile'
import UserChatsHistory from "./UserChatsHistory";
import Navbar from '../Header/Navbar';
const LeftSide = () => {
  return (
    <div className="w-1/6 relative bg-gray-100 py-5 px-3">
      <div className="flex w-full flex-col ">
        <Profile />
        <Navbar />
        <UserChatsHistory />
      </div>
    </div>
  );
};

export default LeftSide;
