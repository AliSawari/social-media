import React from "react";
import { Link } from "react-router-dom";

const UserOptionItem = ({ title, link }) => {
  return (
    <li className="user-option-item">
      <Link to={link} className="font-main">{title}</Link>
    </li>
  );
};

export default UserOptionItem;
