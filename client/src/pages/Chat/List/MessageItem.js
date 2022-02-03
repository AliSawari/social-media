import React from "react";
import { useGetUserId } from "../../../hooks/useGetUserId";

const MessageItem = ({ message, sender, createdAt }) => {
  const { id } = useGetUserId();
  return (
    <div
      className={`w-full  flex justify-${
        sender._id == id ? "end" : "start"
      }  my-12 `}
    >
      <div className="bg-violet-700 p-5 rounded w-96 h-auto">
        <h3 className="font-main text-white">{message}</h3>
        <p className="w-full font-main text-sm text-neutral-500">{createdAt}</p>
      </div>
    </div>
  );
};

export default MessageItem;
