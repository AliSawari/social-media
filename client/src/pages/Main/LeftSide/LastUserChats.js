import React from "react";
import { BsThreeDots } from "react-icons/bs";
import UserItem from "./UserItem";
const LastUserChats = () => {
  const data = [
    {
      id: 1,
      fullname: "HamidrezaRamzani",
      chat: "Ex aute ut Lorem elit.",
      online: true,
      profile: "https://picsum.photos/200/200?grayscale",
    },

    {
      id: 2,
      fullname: "HamidrezaRamzani",
      chat: "Ex aute ut Lorem elit.",
      online: true,
      profile: "https://picsum.photos/200/200?grayscale",
    },


    {
      id: 3,
      fullname: "HamidrezaRamzani",
      chat: "Ex aute ut Lorem elit.",
      online: true,
      profile: "https://picsum.photos/200/200?grayscale",
    },

    {
      id: 4,
      fullname: "HamidrezaRamzani",
      chat: "Ex aute ut Lorem elit.",
      online: false,
      profile: "https://picsum.photos/200/200?grayscale",
    },
  ];
  return (
    <div className="w-80 h-auto pb-3 rounded overflow-hidden bg-neutral-800 shadow-sm">
      <div className="flex justify-between p-4 bg-gradient-to-l from-violet-800 to-violet-900">
        <h3 className="font-main text-white">Last Chats</h3>
        <button className="text-white text-xl">
          <BsThreeDots />
        </button>
      </div>
      {data.map((item) => (
        <UserItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default LastUserChats;