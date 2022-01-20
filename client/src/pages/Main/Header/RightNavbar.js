import React, { useContext, useEffect, useState } from "react";
import Notifications from "../../../components/Notifications/Notifications";
import UserOptions from "../../../components/UserOptions/UserOptions";
import { UserContext } from "../../../context/providers/UserProvider";
import httpClient from "../../../api/client";
const RightNavbar = () => {
  const { state: user } = useContext(UserContext);
  const [state, setState] = useState(null);
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const { data } = await httpClient.get(`users/user/${user.user.id}`);
        setState(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserData();
  }, [user]);
  const data = [
    { id: 1, title: "Profile", link: "/user/profile" },
    { id: 2, title: "Logout", link: "/user/logout" },
  ];

  return (
    <div className="flex justify-center items-center rounded-lg gap-8">
      <Notifications />
      <UserOptions data={state} items={data} />
    </div>
  );
};

export default RightNavbar;
