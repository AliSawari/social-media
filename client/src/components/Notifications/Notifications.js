import React from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { Link } from "react-router-dom";
const Notifications = () => {
  return (
    <div className="flex justify-center">
      <Link to="/user/notification">
        <div className="relative cursor-pointer">
          <IoIosNotificationsOutline size="32" className="text-white" />
          <div className="w-3 h-3 absolute top-0 right-0 bg-violet-600  rounded-full animate-ping"></div>
        </div>
      </Link>
    </div>
  );
};

export default Notifications;
