import React, { useEffect, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import UserItem from "./UserItem";
import { useGetUserId } from '../../../hooks/useGetUserId'
import { MdOutlineChat } from 'react-icons/md'

import httpClient from '../../../api/client'
const LastUserChats = () => {
  const { id } = useGetUserId();
  const [state, setState] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: { contacts: users } } = await httpClient.get(`converstation/list/${id}`);
        setState(users)
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="w-full h-auto pb-3 rounded overflow-hidden bg-neutral-800 shadow-sm">
      <div className="flex justify-between p-4 bg-gradient-to-l from-violet-800 to-violet-900">
        <h3 className="font-main text-white">Last Chats</h3>
        <button className="text-white text-xl">
          <MdOutlineChat />
        </button>
      </div>
      {state.map((item) => (
        <UserItem message={item.message} key={item._id} {...item.user} />
      ))}
    </div>
  );
};

export default LastUserChats;
