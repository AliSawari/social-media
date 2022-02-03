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
        console.log(data);
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
      <div className="full flex justify-center py-28">
        <div className="w-2/3 h-auto flex-col flex justify-center">
          <div className="w-full  justify-center flex">
            <div className="w-1/2 bg-white rounded h-auto flex justify-center">
              <UserImage profile={state.profile} />
            </div>
            <div className="w-1/2 p-10 flex items-center flex-col">
              <UserInfo
                fullname={state.fullname}
                bio={state.bio}
                id={state.id}
              />
              <UserFollow
                isVisible={user.data?.username !== state.username}
                user={state}
              />
            </div>
          </div>

          <div className="w-full flex flex-wrap py-5">
            <div className="w-full py-3">
              <h3 className="w-full text-violet-500 border-b border-b-violet-500 text-3xl font-main">
                Posts
              </h3>
            </div>
            <div className="flex w-full justify-center">
              <UserPosts user={state} />
            </div>
          </div>
        </div>
      </div>
    </>
  ) : null;
};

export default User;
