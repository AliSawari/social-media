import React, { useContext } from "react";
import ProfileUserInfo from "./ProfileUserInfo";
import ProfileFollows from "./ProfileFollows";
import ProfileAddPostLink from "./ProfileAddPostLink";
import { UserContext } from "../../../context/providers/UserProvider";
import ProfileLoading from '../../../components/SkeletonLoading/ProfileLoading';
const Profile = () => {
  const { state: { data: user } } = useContext(UserContext);
  console.log("Profile Side rendered")
  return (
    <div className="w-1/6  mt-32   h-auto  ">
      <div className="fixed w-72 bg-neutral-800 p-3 overflow-hidden shadow-sm rounded" >
        {user ? (<>
          <ProfileUserInfo profile={user.profile} fullname={user.fullname} bio={user.bio} />
          <ProfileFollows followers={user.followers} followings={user.followings} />
          <ProfileAddPostLink />
        </>) : <ProfileLoading />}
      </div>
    </div>
  );
};

export default Profile;
