import React from "react";
import { NavLink } from "react-router-dom";

const NavbarItem = ({ children, link }) => {
  return (
    <li>
      <NavLink
        to={link}
        className={({ isActive }) =>
          isActive ? "active-navbar-item" : "navbar-item"
        }
      >
        {children}
      </NavLink>
    </li>
  );
};

export default NavbarItem;
