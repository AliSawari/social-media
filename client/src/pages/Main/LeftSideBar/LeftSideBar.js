import React from "react";
import Profile from '../Profile/Profile'
import Navbar from '../Header/Navbar';
import Interests from "../Interests/Interests";
const LeftSideBar = () => {
  return (
    <div className="w-1/6 relative">
      <div className="flex w-80 flex-col h-full-vh bg-gray-100 fixed p-2">
        <Profile />
        <Navbar />
        <Interests />
      </div>
    </div>
  );
};

export default LeftSideBar;
