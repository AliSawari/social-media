import React, { useEffect, useState } from "react";
import { FiUsers } from "react-icons/fi";
import UserItem from "./UserItem";
import httpClient from "../../../api/client";
import { useGetUserId } from "../../../hooks/useGetUserId";
import UserItemLoading from "../../../components/SkeletonLoading/UserItemLoading";
import EmptySectionMessage from "../../../components/EmptySectionMessage/EmptySectionMessage";
const Followers = () => {
  const { id } = useGetUserId();
  const [state, setState] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: users } = await httpClient.get(`users/followers/${id}`);
        setState(users === null ? [] : users);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const renderUsers = () => {
    if (state === null)
      return (
        <UserItemLoading count={2} />
      );

    if (state.length === 0) {
      return <EmptySectionMessage message={"you didn't follow somebody"} />
    }

    return state.map((item) => <UserItem key={item._id} {...item.user} />);
  };
  return (
    <div className="w-full max-h-auto h-72 mt-4 pb-3 rounded">
      <div className="flex justify-between p-4">
        <h3 className="font-main text-gray-700 flex items-center gap-2"><FiUsers fontSize={20} className="text-violet-600" />Followers</h3>
      </div>
      {renderUsers()}
    </div>
  );
};

export default Followers;
