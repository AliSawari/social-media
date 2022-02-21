import React, { useContext, useEffect, useState } from "react";
import Notifications from "../../../components/Notifications/Notifications";
import UserOptions from "../../../components/UserOptions/UserOptions";
import { UserContext } from "../../../context/providers/UserProvider";
import httpClient from "../../../api/client";
import { getUserData } from "../../../context/actions/UserActions";
const RightNavbar = () => {
  const { state: user, dispatch } = useContext(UserContext);
  const [notifications, setNotifications] = useState([]);
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const { data } = await httpClient.get(`users/user/${user.user.id}`);        
        dispatch(getUserData(data))
        setNotifications(data.notifications)
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserData();
  }, [dispatch, user.user.id]);
  const menuItems = [
    { id: 1, title: "Profile", link: "/user/profile" },
    { id: 2, title: "Saved", link: "/user/saved" },
    { id: 3, title: "Settings", link: "/settings/main" },
    { id: 4 , title: "Logout", link: "/user/logout" },
      
  ];

  return (
    <div className="flex justify-center items-center rounded-lg gap-8">
      <Notifications haveNotifications={notifications.filter(item => item.seen === false).length} />
      <UserOptions user={user.data} items={menuItems} />
    </div>
  );
};

export default RightNavbar;
