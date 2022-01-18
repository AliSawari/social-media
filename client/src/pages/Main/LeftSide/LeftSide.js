import React from "react";
import Followers from "./Followers";
import LastChatUsers from "./LastChatUsers";
const LeftSide = () => {
  return (
    <div>
      <LastChatUsers />
      <Followers />
    </div>
  );
};

export default LeftSide;
