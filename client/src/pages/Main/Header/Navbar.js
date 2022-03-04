import React, { useContext } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineExplore, MdOutlineChat } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import NavbarItem from "./NavbarItem";
import { ChatContext } from "../../../context/providers/ChatProvider";
import { useGetUserId } from "../../../hooks/useGetUserId";
const Navbar = () => {

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
    <div className="flex py-2 pl-3 my-8">
      <ul className="w-full flex flex-col gap-5">
        <NavbarItem link="/" title={"Home"}>
          <IoHomeOutline />
        </NavbarItem>

        <NavbarItem link="/explore" title={"Explore"}>
          <MdOutlineExplore />
        </NavbarItem>

        <NavbarItem link="/followers" title={"Followers"}>
          <FiUsers />
        </NavbarItem>


        <NavbarItem link="/chat/list" title={"Direct Message"}>
          <MdOutlineChat marginright="5px" />
        </NavbarItem>
      </ul>
    </div>
  );
};

export default Navbar;
