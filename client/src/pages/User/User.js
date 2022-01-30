import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import UserInfo from "./UserInfo";
import Header from "../Main/Header/Header";
import UserFollow from "./UserFollow";
import UserImage from "./UserImage";
import httpClient from "../../api/client";
import PostItem from "../Main/Posts/PostItem";
const User = () => {
  const { username } = useParams();
  const [state, setState] = useState(null);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await httpClient.get(
          `users/user-by-username/${username}`
        );
        setState(data);
      } catch (error) {}
    };

    fetchUser();
  }, [username]);
  return state !== null ? (
    <>
      <Header />
      <div className="full flex justify-center py-28">
        <div className="w-2/3 h-auto flex-col flex justify-center">
          <div className="w-full  justify-center flex">
            <div className="w-1/2 bg-white rounded h-auto flex justify-center">
              <UserImage />
            </div>
            <div className="w-1/2 p-10 flex items-center flex-col">
              <UserInfo
                fullname={state.fullname}
                bio={state.bio}
                username={state.username}
              />
              <UserFollow />
            </div>
          </div>

          <div className="w-full flex flex-wrap py-5">
            <div className="w-full py-3">
              <h3 className="w-full text-violet-500 border-b border-b-violet-500 text-3xl font-main">
                Posts
              </h3>
            </div>
            <div className="flex w-full justify-center">
              {state.posts.map((post) => (
                <div className="w-2/6">
                  <PostItem key={post._id} {...post} user={state} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  ) : null;
};

export default User;
