import React, { useEffect, useState } from "react";
import { FiUsers } from "react-icons/fi";
import UserItem from "./UserItem";
import httpClient from "../../../api/client";
import { useGetUserId } from "../../../hooks/useGetUserId";
import Loading from "../../../components/Loading/Loading";
import { Link } from "react-router-dom";
const Followers = () => {
  const { id } = useGetUserId();
  const [state, setState] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data : users } = await httpClient.get(`users/followers/${id}`);
        setState(users);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const renderUsers = () => {
    if (state === null)
      return (
        <div className="w-full flex justify-between items-center">
          <Loading />
        </div>
      );

    return state.map((item) => <UserItem key={item._id} {...item.user} />);
  };
  return (
    <div className="w-full h-auto mt-4 pb-3 rounded bg-neutral-800 shadow-sm">
      <div className="flex justify-between p-4 bg-gradient-to-l from-violet-800 to-violet-900">
        <h3 className="font-main text-white">Followers</h3>
        <Link to="/followers" className="text-white text-xl">
          <FiUsers />
        </Link>
      </div>
      {renderUsers()}
    </div>
  );
};

export default Followers;
