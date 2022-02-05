import React from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { Link } from "react-router-dom";
const Notifications = ({ notifications }) => {
  return (
    <div className="flex justify-center">
      <Link to="/notification/list">
        <div className="relative cursor-pointer">
          <IoIosNotificationsOutline size="32" className="text-white" />
          {notifications.length && <div className="w-3 h-3 absolute top-0 right-0 bg-violet-600  rounded-full animate-ping"></div>}
        </div>
      </Link>
    </div>
  );
};

export default Notifications;
