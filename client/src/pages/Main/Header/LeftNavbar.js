import React, { useContext } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineExplore, MdOutlineChat } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import NavbarItem from "./NavbarItem";
import { ChatContext } from "../../../context/providers/ChatProvider";
import { useGetUserId } from "../../../hooks/useGetUserId";
const LeftNavbar = () => {

  const { id } = useGetUserId();
  const { chats } = useContext(ChatContext);
  let unReadMessagesLength = 0;
  if (chats) {
    chats.forEach(chat => {
      const unSeenLength = chat.messages.filter(message => {
        return message.sender !== id && message.isSeen == false
      }).length;
      unReadMessagesLength += unSeenLength;
    });
  }

  return (
    <div className="flex py-2 pl-6">
      <ul className="flex justify-center gap-5">
        <NavbarItem link="/">
          <IoHomeOutline />
        </NavbarItem>

        <NavbarItem link="/explore">
          <MdOutlineExplore />
        </NavbarItem>

        <NavbarItem link="/followers">
          <FiUsers />
        </NavbarItem>


        <NavbarItem link="/chat/list">
          <MdOutlineChat marginright="5px" />
          <span className="text-sm ">{unReadMessagesLength}</span>
        </NavbarItem>
      </ul>
    </div>
  );
};

export default LeftNavbar;
