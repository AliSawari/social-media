import React, { useState } from "react";
import httpClient from "../../api/client";
import { useGetUserId } from "../../hooks/useGetUserId";
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
          className={`w-full rounded font-main py-3 cursor-pointer text-white  transition ${
            state === false
              ? "bg-violet-500 hover:bg-violet-800"
              : "bg-neutral-700 hover:bg-neutral-800"
          }`}
          onClick={handleFollowUnFollow}
        >
          {state ? "Following" : "Follow"}
        </div>
      ) : null}

      
    </div>
  );
};

export default UserFollow;
