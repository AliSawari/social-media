import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import Header from "../../Main/Header/Header";
import MessageSender from "./MessageSender";
import { useGetUserId } from "../../../hooks/useGetUserId";
import UsersList from "./UsersList";
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
          <span className="bg-neutral-900 p-2 rounded-md">
            Select a chat to start messaging
          </span>
        </div>
      );


    const chat = chats.find(item => (item.sender._id === sender && item.receiver._id === id) || (item.sender._id === id && item.receiver._id === sender));
    return <>
      <ChatHeader id={id} />
      <MessagesList messages={chat === undefined ? [] : chat.messages} chatId={chat === undefined ? "" : chat._id} />
      <MessageSender id={id} />
    </>

  };
  return (
    <>
      <Header />
      <div className="py-5 w-full flex justify-around">
        <UsersList />
        <div className="w-9/12 h-[calc(100vh-9rem)] shadow-md relative bg-neutral-900 mt-24">
          {renderMessagesBox()}
        </div>
      </div>
    </>
  );
};

export default List;
