import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import Header from "../../Main/Header/Header";
import MessageSender from "./MessageSender";
import { useGetUserId } from "../../../hooks/useGetUserId";
import { ChatContext } from "../../../context/providers/ChatProvider";
import MessageItem from "./MessageItem";
import httpClient from "../../../api/client";
import { getSetMessages } from "../../../context/actions/ChatActions";
import UsersList from "./UsersList";
const List = () => {
  const { id } = useParams();
  const { id: sender } = useGetUserId();

  const [state, setState] = useState([]);
  useEffect(() => {
    if (!id) {
      return;
    }

    const fetchData = async () => {
      try {
        const { data: messages } = await httpClient.get(
          `chat/messages/${sender}/${id}`
        );
        setState(messages);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);


  const renderMessagesBox = () => {
    if (!id)
      return <div className="w-full h-full flex justify-center items-center font-main text-violet-600">Select a contact</div>
    return state
      .map((item, index) => (
        <MessageItem key={index} {...item} />
      ))
  }
  return (
    <>
      <Header />

      <div className="py-5 px-14 w-full flex">
        <UsersList />
        <div className="w-9/12 h-[calc(100vh-7rem)] relative">
          <div className="w-full h-full relative overflow-y-scroll flex flex-col justify-end py-3 ">
            {renderMessagesBox()}
          </div>
          <MessageSender
            setState={(data) => setState((prevState) => [...prevState, data])}
            id={id}
          />
        </div>
      </div>
    </>
  );
};

export default List;
