import React from "react";
import Followers from "./Followers";
import LastUserChats from "./LastUserChats";
const LeftSide = () => {
  return (
    <div className="w-1/6 relative mt-32">
      <div className="flex fixed w-1/6 flex-col">
        <LastUserChats />
        <Followers />
      </div>
    </div>
  );
};

export default LeftSide;
