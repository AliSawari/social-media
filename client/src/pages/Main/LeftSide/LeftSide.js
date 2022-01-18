import React from "react";
import Followers from "./Followers";
import LastUserChats from "./LastUserChats";
const LeftSide = () => {
  return (
    <div>
      <LastUserChats />
      <Followers />
    </div>
  );
};

export default LeftSide;
