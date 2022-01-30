import React from "react";

const UserFollow = () => {
  return (
    <div className="w-full flex text-center justify-center gap-20">
      <div>
        <h2 className="text-4xl font-main text-white">105</h2>
        <span className="text-sm font-main text-violet-600">Followers</span>
      </div>

      <div>
        <h2 className="text-4xl font-main text-white">8K</h2>
        <span className="text-sm font-main text-violet-600">Followings</span>
      </div>
    </div>
  );
};

export default UserFollow;
