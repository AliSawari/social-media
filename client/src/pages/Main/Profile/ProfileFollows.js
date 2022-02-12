import React from "react";

const ProfileFollows = ({ followers, followings }) => {
  return (
    <div className="w-full flex justify-center  py-3 gap-8 text-center">
      <div>
        <h3 className="text-md font-main text-white">{followers}</h3>
        <span className="text-sm font-main text-violet-500">Followers</span>
      </div>

      <div>
        <h3 className="text-md font-main text-white">{followings}</h3>
        <span className="text-sm font-main text-violet-500">Followings</span>
      </div>
    </div>
  );
};

export default ProfileFollows;
