import React from "react";
import { useShowUserProfile } from "../../hooks/useShowUserProfile";

const UserImage = ({ profile }) => {
  const mainProfile = useShowUserProfile(profile);
  return (
    <img
      src={mainProfile}
      alt="My User"
      className="object-cover"
    />
  );
};

export default UserImage;
