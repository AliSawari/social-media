import React, { useState } from "react";
import UserInfo from "./UserInfo";
import UserOptionItem from "./UserOptionItem";

const UserOptions = ({ data, items }) => {
  const [state, setState] = useState(false);

  const handleClickOpenDropdown = () => {
    setState((prevState) => !prevState);
  };

  return (
    <div className="relative z-10">
      {data ? (
        <UserInfo
          profile={data.profile}
          fullname={data.fullname}
          onClick={handleClickOpenDropdown}
        />
      ) : (
        []
      )}

      <ul
        className={`bg-violet-700 rounded animation-spin absolute w-full ${
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
