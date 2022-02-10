import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate, useLocation } from "react-router";
import UserInfo from "./UserInfo";
import Header from "../Main/Header/Header";
import UserFollow from "./UserFollow";
import UserProfile from "./UserProfile";
import httpClient from "../../api/client";
import UserPosts from "./UserPosts";
import { UserContext } from "../../context/providers/UserProvider";
import { useGetUserId } from "../../hooks/useGetUserId";
import MainLayout from "../../components/MainLayout";
import LeftSide from "../Main/LeftSide/LeftSide";
const User = () => {
  const { username } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [state, setState] = useState(null);
  const { id } = useGetUserId();
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await httpClient.get(
          `users/user-by-username/${username}/${id}`
        );
        setState(data);
      } catch (error) {
        if (error.response.status === 404) navigate("/");
      }
    };

    fetchUser();
  }, [location]);

  const { state: user } = useContext(UserContext);
  return state !== null ? (
    <>
      <Header />
      <MainLayout>
        <LeftSide />
        <div className="w-5/6 h-96 user-bg mt-32 p-4">
          <div className="w-full flex justify-between items-center h-96">
            <div className="w-1/2 flex items-center justify-start">
              <UserProfile profile={state.profile} />
              <UserInfo fullname={state.fullname} bio={state.bio} />
            </div>
            <div className="w-1/2 flex">
              <UserFollow isVisible={true} user={state} />
            </div>
          </div>
          <UserPosts user={state} />
        </div>
      </MainLayout>
    </>
  ) : null;
};

export default User;
