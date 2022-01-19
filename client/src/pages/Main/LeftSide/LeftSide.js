import React from "react";
import Followers from "./Followers";
import LastUserChats from "./LastUserChats";
const LeftSide = () => {
  return (
    <div className="w-1/6">
      <LastUserChats />
      <Followers />
    </div>
  );
};

export default LeftSide;
