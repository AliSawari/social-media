import React from "react";
import { Link } from "react-router-dom";
import { useShowUserProfile } from '../../../hooks/useShowUserProfile'

const StoryItem = ({ _id: id, fullname, profile: userProfile }) => {
  const profile = useShowUserProfile(userProfile);  
  return (
    <Link to={`?story=${id}`}>
      <div className="h-32 px-3 rounded relative flex justify-center items-center">
        <div className="z-30 flex justify-center flex-col items-center">
          <img
            src={profile}
            alt="profile"
            width={50}
            height={50}
            className="rounded-full p-1 bg-gradient-to-l from-violet-800 to-violet-900 w-20 h-20 object-cover"
          />
          <h3 className="py-2 text-sm text-center font-main text-white">{fullname}</h3>
        </div>

      </div>
    </Link>
  );
};

export default StoryItem;
