import React, { useState } from "react";
import httpClient from "../../api/client";
import { Link } from 'react-router-dom'
import { useGetUserId } from "../../hooks/useGetUserId";
import { AiOutlineSend } from "react-icons/ai";
const UserFollow = ({ isVisible, user }) => {
  const { id } = useGetUserId();
  const [state, setState] = useState(user.follow !== null);
  console.log(user);
  const handleFollowUnFollow = async () => {
    try {
      const {
        data: { follow },
      } = await httpClient.post("follow/follow", {
        user: id,
        following: user.id,
      });

      setState(follow);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full flex text-center flex-wrap justify-center gap-20">
      <div>
        <h2 className="text-4xl font-main text-white">{user.followers}</h2>
        <span className="text-sm font-main text-violet-600">Followers</span>
      </div>

      <div>
        <h2 className="text-4xl font-main text-white">{user.followings}</h2>
        <span className="text-sm font-main text-violet-600">Followings</span>
      </div>
      {isVisible ? (
        <div
          className={`w-full rounded font-main py-3 cursor-pointer text-white  transition ${state === false
            ? "bg-violet-500 hover:bg-violet-800"
            : "bg-neutral-700 hover:bg-neutral-800"
            }`}
          onClick={handleFollowUnFollow}
        >
          {state ? "Following" : "Follow"}
        </div>
      ) : null}

      <Link
        to={`/chat/list/${user.id}`}
        className="text-sm bg-violet-700 h-12 py-1 px-2 rounded flex items-center justify-center gap-2 text-white  font-main w-full"
      >
        <AiOutlineSend fontSize={18} /> Send Message
      </Link>


    </div>
  );
};

export default UserFollow;
