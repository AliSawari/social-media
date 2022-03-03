import React from "react";
import { NavLink } from "react-router-dom";

const NavbarItem = ({ children, link, title }) => {
  const getActiveClassName = ({ isActive }) =>
    isActive ? "active-navbar-item" : "navbar-item";
  return (
    <li className="w-full">
      <NavLink
        to={link}
        className={getActiveClassName}
      >
        {children} <span className="text-sm ml-2">{title}</span>
      </NavLink>
    </li>
  );
};

export default NavbarItem;
