import React, { useEffect, useState } from "react";
import UserItem from "./UserItem";
import { useGetUserId } from '../../../hooks/useGetUserId'
import { MdOutlineChat } from 'react-icons/md'
import Loading from '../../../components/Loading/Loading'
import EmptySectionMessage from '../../../components/EmptySectionMessage/EmptySectionMessage'
import httpClient from '../../../api/client'
import UserItemLoading from "../../../components/SkeletonLoading/UserItemLoading";
const UserChatsHistory = () => {
  const { id } = useGetUserId();
  const [state, setState] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: users } = await httpClient.get(`converstation/list/${id}`);
        setState(users === null ? [] : users.contacts);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);


  const renderChats = () => {

    if (state === null) {
      return <UserItemLoading count={2} />
    }

    if (state.length === 0) {
      return <EmptySectionMessage message="You have not any follower." />
    }


    return state.map((item) => (
      <UserItem message={item.message} key={item._id} {...item.user} />
    ));
  }
  return (
    <div className="w-full max-h-auto pb-3 h-72 rounded overflow-hidden bg-neutral-800 shadow-sm">
      <div className="flex justify-between p-4 bg-gradient-to-l from-violet-800 to-violet-900">
        <h3 className="font-main text-white">Last Chats</h3>
        <button className="text-white text-xl">
          <MdOutlineChat />
        </button>
      </div>
      {renderChats()}
    </div>
  );
};

export default UserChatsHistory;
