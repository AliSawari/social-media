import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineExplore  , MdOutlineChat} from "react-icons/md";
import { FiUsers  } from "react-icons/fi";
import NavbarItem from "./NavbarItem";
const LeftNavbar = () => {
  return (
    <div className="flex py-2">
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
          <MdOutlineChat />
        </NavbarItem>
      </ul>
    </div>
  );
};

export default LeftNavbar;
