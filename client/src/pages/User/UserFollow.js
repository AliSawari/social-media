import React, { useState } from "react";
import httpClient from "../../api/client";
import { Link } from 'react-router-dom'
import { useGetUserId } from "../../hooks/useGetUserId";

const UserFollow = ({ user }) => {
  const { id } = useGetUserId();


  const [state, setState] = useState(user.follow);
  const handleFollowUnFollow = async (status) => {
    try {
      const {
        data: { status: statusFollow },
      } = await httpClient.post("follow/follow", {
        user: id,
        following: user.id,
        status,
        private: user.settings.private
      });
      setState(statusFollow);
    } catch (error) {
      console.log(error);
    }
  };

  const renderFollowButton = () => {
    switch (state) {
      case "request-sended":
        return <button className={"follow-request-sended-btn"} disabled>
          Request Sended
        </button>

      case "request-accepted":
        return <button className={"following-btn"} onClick={() => handleFollowUnFollow("unfollow")}>
          Following
        </button>


      default:
        return <button className={"follow-btn"} onClick={() => handleFollowUnFollow("follow")}>
          Follow
        </button>
        break;
    }

  }

  const getAcceptedFollowsLength = (follows) => {    
      return follows.filter(item => item.status === "request-accepted").length;
  }
  return (
    <>

      <div className="w-full flex text-center flex-wrap justify-center gap-4">

        <div className="w-full flex justify-center gap-4">
          <div>
            <h2 className="text-4xl font-main text-gray-500">{getAcceptedFollowsLength(user.followers)}</h2>
            <span className="text-sm font-main text-gray-700">Followers</span>
          </div>

          <div>
            <h2 className="text-4xl font-main text-gray-500">{getAcceptedFollowsLength(user.followings)}</h2>
            <span className="text-sm font-main text-gray-700">Followings</span>
          </div>
        </div>

        <div className="flex justify-center flex-col gap-4">

          {renderFollowButton()}
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
