import React from "react";
import Notifications from "../../components/Notifications/Notifications";
import UserOptions from "../../components/UserOptions/UserOptions";
const RightNavbar = () => {
  const data = [
    { id: 1, title: "Profile", link: "/user/profile" },
    { id: 2, title: "Logout", link: "/user/logout" },
  ];
  return (
    <div className="flex justify-center rounded-lg gap-8">
      <Notifications />
      <UserOptions
        profile="https://picsum.photos/200/200?grayscale"
        username="hamidrezaramzani"
        items={data}
      />
    </div>
  );
};

export default RightNavbar;
