import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router";
import UserInfo from "./UserInfo";
import Header from "../Main/Header/Header";
import UserFollow from "./UserFollow";
import UserProfile from "./UserProfile";
import httpClient from "../../api/client";
import UserPosts from "./UserPosts";
import { useGetUserId } from "../../hooks/useGetUserId";
import MainLayout from "../../components/MainLayout";
import LeftSide from "../Main/LeftSideBar/LeftSideBar";
import { FiSettings } from "react-icons/fi";
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

  const renderUserPosts = () => {
    if (state && state.settings.private === true) {
      return <div className="w-full h-10 flex justify-center items-center z-50 flex-col mt-20">
        <span className='p-3 text-violet-700 flex border border-violet-700 mb-5 justify-center items-center rounded-full'>
          <FiSettings fontSize={26} />
        </span>
        <h1 className='text-2xl text-violet-700 font-main w-full text-center'>This account is private</h1>
      </div>
    }
    return <UserPosts user={state} />
  }
  return state !== null ? (
    <>      
      <MainLayout>
        <LeftSide />
        <div className="w-5/6 h-96 bg-svg p-4">
          <div className="w-full flex justify-between items-center h-96">
            <div className="w-1/2 flex items-center justify-start">
              <UserProfile profile={state.profile} />
              <UserInfo fullname={state.fullname} bio={state.bio} />
            </div>
            <div className="w-1/2 flex">
              <UserFollow isVisible={true} user={state} />
            </div>
          </div>
          {renderUserPosts()}
        </div>
      </MainLayout>
    </>
  ) : null;
};

export default User;
