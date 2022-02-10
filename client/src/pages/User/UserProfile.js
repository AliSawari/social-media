import React from "react";
import { useShowUserProfile } from "../../hooks/useShowUserProfile";

const UserProfile = ({ profile }) => {
  const mainProfile = useShowUserProfile(profile);
  return (
    <div className="w-64 h-64">
      <img src={mainProfile} width={256} height="256" className="w-64 h-64 object-cover" alt="user profile" />
    </div>
  );
};

export default UserProfile;
