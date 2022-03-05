import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import MainLayout from "../../../components/MainLayout";
import MessageSender from "./MessageSender";
import { useGetUserId } from "../../../hooks/useGetUserId";
import UsersList from "./UsersList";
import LeftSideBar from "../../Main/LeftSideBar/LeftSideBar";
import ChatHeader from "./ChatHeader";
import MessagesList from "./MessagesList";
import { ChatContext } from '../../../context/providers/ChatProvider';
const List = () => {

  const { id } = useParams();
  const { id: sender } = useGetUserId();
  const { chats } = useContext(ChatContext);

  const renderMessagesBox = () => {
    if (!id)
      return (
        <div className="w-full h-full  flex justify-center items-center font-main text-violet-600">
          <span className="p-2 rounded-md">
            Select a chat to start messaging
          </span>
        </div>
      );


    if (chats === null)
      return "";

    const chat = chats.find(item => (item.sender._id === sender && item.receiver._id === id) || (item.sender._id === id && item.receiver._id === sender));
    return <>
      <ChatHeader id={id} />
      <MessagesList messages={chat === undefined ? [] : chat.messages} chatId={chat === undefined ? "" : chat._id} />
      <MessageSender id={id} />
    </>

  };
  return (
    <MainLayout>
      <LeftSideBar />
      <div className="w-4/6 flex justify-around">
        <div className="w-full h-full-vh relative bg-gray-200 ">
          {renderMessagesBox()}
        </div>
      </div>
      <UsersList />
    </MainLayout>
  );
};

export default List;
