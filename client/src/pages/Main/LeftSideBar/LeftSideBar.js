import React from "react";
import Profile from '../Profile/Profile'
import Navbar from '../Header/Navbar';
import Interests from "../Interests/Interests";
const LeftSideBar = () => {
  return (
    <div className="w-1/6 relative bg-gray-100 py-5 px-3">
      <div className="flex w-72 flex-col fixed">
        <Profile />
        <Navbar />
        <Interests />
      </div>
    </div>
  );
};

export default LeftSideBar;
