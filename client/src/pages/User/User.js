import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate, useLocation } from "react-router";
import UserInfo from "./UserInfo";
import Header from "../Main/Header/Header";
import UserFollow from "./UserFollow";
import UserImage from "./UserImage";
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
              <div className="w-64 h-64">
                <img src="https://s6.uupload.ir/files/user_(1)_mpvu.png" width={256} height="256" className="w-64 h-64 object-cover" />
              </div>
              <div className="px-4">
                <h2 className="text-3xl text-white font-main">{state.fullname}</h2>
                <p className="font-main text-sm text-violet-300">{state.bio}</p>
              </div>
            </div>
            <div className="w-1/2 flex">
              <UserFollow isVisible={true} user={state} />
            </div>
          </div>
          <div className="p">
            س
          </div>
        </div>
      </MainLayout>
    </>
  ) : null;
};

export default User;
