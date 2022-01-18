import React, { useState } from "react";
import UserInfo from "./UserInfo";
import UserOptionItem from "./UserOptionItem";

const UserOptions = ({ profile, username, items }) => {
  const [state, setState] = useState(false);

  const handleClickOpenDropdown = () => {
    setState((prevState) => !prevState);
  };

  return (
    <div>
      <UserInfo
        profile={profile}
        username={username}
        onClick={handleClickOpenDropdown}
      />
      <ul
        className={`bg-violet-700 rounded animation-spin ${
          state ? "flex flex-col" : "hidden"
        }`}
      >
        {items.map((item) => (
          <UserOptionItem {...item} key={item.id} />
        ))}
      </ul>
    </div>
  );
};

export default UserOptions;
