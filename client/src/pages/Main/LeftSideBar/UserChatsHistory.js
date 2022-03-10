import React, { useEffect, useState, useContext } from "react";
import UserItem from "./UserItem";
import { useGetUserId } from '../../../hooks/useGetUserId'
import { MdOutlineChat } from 'react-icons/md'
import EmptySectionMessage from '../../../components/EmptySectionMessage/EmptySectionMessage'
import httpClient from '../../../api/client'
import UserItemLoading from "../../../components/SkeletonLoading/UserItemLoading";
import { ChatContext } from "../../../context/providers/ChatProvider";
import { setChats } from "../../../context/actions/ChatActions";
const UserChatsHistory = () => {
  const { id } = useGetUserId();
  const { dispatch, chats } = useContext(ChatContext);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: users } = await httpClient.get(`chat/list/${id}`);
        dispatch(setChats(users));
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);


  const renderChats = () => {

    if (chats === null) {
      return <UserItemLoading count={2} />
    }

    if (chats.length === 0) {
      return <EmptySectionMessage message="You have not any follower." />
    }


    return chats.sort((a, b) => { return (a.updatedAt > b.updatedAt) ? -1 : 1 }).map((item) => {
      let user;
      if (item.sender._id === id)
        user = item.receiver;
      else
        user = item.sender;
      return <UserItem message={item.lastMessage} messages={item.messages} key={item._id} {...user} />
    });
  }
  return (
    <div className="w-full max-h-auto pb-3 h-auto rounded overflow-hidden py-5">
      <div className="flex justify-between p-4">
        <h3 className="font-main text-gray-800 flex items-center gap-2"><MdOutlineChat fontSize={20} className="text-violet-600" />Messages</h3>   
      </div>
      {renderChats()}
    </div>
  );
};

export default UserChatsHistory;
