import React, { useContext } from "react";
import ProfileUserInfo from "./ProfileUserInfo";
import ProfileFollows from "./ProfileFollows";
import ProfileAddPostLink from "./ProfileAddPostLink";
import { UserContext } from "../../../context/providers/UserProvider";
import ProfileLoading from "./ProfileLoading";
const Profile = () => {
  const { state: { data: user } } = useContext(UserContext);
  return (
    <div className="w-1/6  mt-32 bg-neutral-800 shadow-sm rounded h-auto overflow-hidden p-3">
      {user ? (<>
        <ProfileUserInfo profile={user.profile} fullname={user.fullname} bio={user.bio} />
        <ProfileFollows followers={15} followings={20} />
        <ProfileAddPostLink />
      </>) : <ProfileLoading />}
    </div>
  );
};

export default Profile;
