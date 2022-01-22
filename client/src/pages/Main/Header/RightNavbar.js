import React, { useContext, useEffect, useState } from "react";
import Notifications from "../../../components/Notifications/Notifications";
import UserOptions from "../../../components/UserOptions/UserOptions";
import { UserContext } from "../../../context/providers/UserProvider";
import httpClient from "../../../api/client";
import { getUserData } from "../../../context/actions/UserActions";
const RightNavbar = () => {
  const { state: user , dispatch } = useContext(UserContext);  
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const { data } = await httpClient.get(`users/user/${user.user.id}`);
        console.log(data);
        dispatch(getUserData(data))
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserData();
  }, [dispatch, user.user.id]);
  const menuItems = [
    { id: 1, title: "Profile", link: "/user/profile" },
    { id: 2, title: "Logout", link: "/user/logout" },
  ];

  return (
    <div className="flex justify-center items-center rounded-lg gap-8">
      <Notifications />
      <UserOptions data={user.data} items={menuItems} />
    </div>
  );
};

export default RightNavbar;
