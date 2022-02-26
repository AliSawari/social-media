import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import Header from "../../Main/Header/Header";
import MessageSender from "./MessageSender";
import { useGetUserId } from "../../../hooks/useGetUserId";
import httpClient from "../../../api/client";
import UsersList from "./UsersList";
import ChatHeader from "./ChatHeader";
import MessagesList from "./MessagesList";
import { ChatContext } from '../../../context/providers/ChatProvider';
import { getSetMessages } from "../../../context/actions/ChatActions";
const List = () => {

  const { id } = useParams();
  const { id: sender } = useGetUserId();
  const { dispatch , messages } = useContext(ChatContext);
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
        dispatch(getSetMessages(messages));
        return () => {
          setUser(null);
          setMessages([]);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);



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
