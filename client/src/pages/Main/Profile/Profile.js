import React, { useContext } from "react";
import ProfileUserInfo from "./ProfileUserInfo";
import ProfileFollows from "./ProfileFollows";
import ProfileAddPostLink from "./ProfileAddPostLink";
import { UserContext } from "../../../context/providers/UserProvider";
import ProfileLoading from "./ProfileLoading";
const Profile = () => {
  const { state: { data: user } } = useContext(UserContext);
  return (
    <div className="w-1/6 relative bg-neutral-800 shadow-sm rounded h-auto overflow-hidden">
      <div className="bg-gradient-to-l from-violet-800 to-violet-900 w-full h-40 relative">
        <div className="absolute -bottom-60 h-auto gap-2 w-full flex flex-col items-center">
          {user ? (
            <>
              <ProfileUserInfo profile={user.profile} fullname={user.fullname} bio={user.bio} />
              <ProfileFollows followers={15} followings={20} />
              <ProfileAddPostLink />
            </>
          ) : (
            <ProfileLoading />
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
