import React from "react";
import { Link } from "react-router-dom";

const UserOptionItem = ({ title, link }) => {
  return (
    <li className="user-option-item">
      <Link to={link}>{title}</Link>
    </li>
  );
};

export default UserOptionItem;
