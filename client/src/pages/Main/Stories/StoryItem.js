import React from "react";
import { Link } from "react-router-dom";
import { useShowUserProfile } from '../../../hooks/useShowUserProfile'

const StoryItem = ({ _id: id, fullname, profile: userProfile }) => {
  const profile = useShowUserProfile(userProfile);
  
  return (
    <Link to={`?story=${id}`}>
      <div className="w-60 h-52 rounded relative flex justify-center items-center">
        <div className="z-30 flex justify-center flex-col items-center">
          <img
            src={profile}
            alt="profile"
            width={105}
            height={105}
            className="rounded-full p-1 bg-gradient-to-l from-violet-800 to-violet-900 w-28 h-28 object-cover"
          />
          <h3 className="py-2 text-center font-main text-white">{fullname}</h3>
        </div>

      </div>
    </Link>
  );
};

export default StoryItem;
