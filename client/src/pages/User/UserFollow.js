import React, { useState } from "react";
import httpClient from "../../api/client";
import { Link } from 'react-router-dom'
import { useGetUserId } from "../../hooks/useGetUserId";
import Modal from '../../components/Modal/Modal';
const UserFollow = ({ user }) => {
  const { id } = useGetUserId();
  const [state, setState] = useState(user.follow !== null);
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
    <>
     
      <div className="w-full flex text-center flex-wrap justify-center gap-4">

        <div className="w-full flex justify-center gap-4">
          <div>
            <h2 className="text-4xl font-main text-white">{user.followers}</h2>
            <span className="text-sm font-main text-violet-200">Followers</span>
          </div>

          <div>
            <h2 className="text-4xl font-main text-white">{user.followings}</h2>
            <span className="text-sm font-main text-violet-200">Followings</span>
          </div>
        </div>

        <div className="flex justify-center flex-col gap-4">
          <button className={state ? "following-btn" : "follow-btn"} onClick={handleFollowUnFollow}>
            {state ? "Following" : "Follow"}
          </button>
          <Link
            to={`/chat/list/${user.id}`}
            className="send-message-btn"
          >
            Send Message
          </Link>
        </div>
      </div>
    </>
  );
};

export default UserFollow;
