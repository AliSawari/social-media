import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Header from "../../Main/Header/Header";
import MessageSender from "./MessageSender";
import { useGetUserId } from "../../../hooks/useGetUserId";
import httpClient from "../../../api/client";
import UsersList from "./UsersList";
import ChatHeader from "./ChatHeader";
import MessagesList from "./MessagesList";
const List = () => {
  const { id } = useParams();
  const { id: sender } = useGetUserId();

  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState(null);
  useEffect(() => {
    if (!id) {
      return;
    }
    const fetchData = async () => {
      try {
        const { data: messages } = await httpClient.get(
          `chat/messages/${sender}/${id}`
        );
        const { data: user } = await httpClient.get(`users/user/${id}`);
        setUser(user);
        setMessages(messages);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);


  const handleSetNewMessages = (data) => {
    setMessages((prevState) => [...prevState, data]);
  }

  const renderMessagesBox = () => {
    if (!id)
      return (
        <div className="w-full h-full  flex justify-center items-center font-main text-violet-600">
          <span className="bg-neutral-900 p-2 rounded-md">
            Select a chat to start messaging
          </span>
        </div>
      );

    return <>
      <ChatHeader user={user} id={id} />
      <MessagesList messages={messages} />
      <MessageSender setState={handleSetNewMessages} id={id} />
    </>



  };
  return (
    <>
      <Header />
      <div className="py-5 w-full flex flex-between">
        <UsersList />
        <div className="w-9/12 h-[calc(100vh-7rem)] relative bg-neutral-900">
          {renderMessagesBox()}
        </div>
      </div>
    </>
  );
};

export default List;
