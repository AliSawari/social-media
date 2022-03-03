import React, { useContext, useEffect } from "react";
import ProfileUserInfo from "./ProfileUserInfo";
import ProfileFollows from "./ProfileFollows";
import ProfileAddPostLink from "./ProfileAddPostLink";
import { UserContext } from "../../../context/providers/UserProvider";
import ProfileLoading from '../../../components/SkeletonLoading/ProfileLoading';
import httpClient from "../../../api/client";
import { getUserData } from "../../../context/actions/UserActions";
import { useGetUserId } from "../../../hooks/useGetUserId";
const Profile = () => {
  const { state: { data: user }, dispatch } = useContext(UserContext);
  const { id } = useGetUserId();
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const { data } = await httpClient.get(`users/user/${id}`);
        dispatch(getUserData(data))
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserData();
  }, []);
  return (
    <div className="w-1/6 h-auto">
      <div className="w-72 p-3 h-96 overflow-hidden rounded" >
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
