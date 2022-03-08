import React from "react";
import LeftSide from "../Main/LeftSideBar/LeftSideBar";
import RightSide from "../Main/RightSide/RightSide";
import EditProfileForm from "./EditProfileForm";

const Profile = () => {
  return (
    <div className="flex">
      <LeftSide />
      <div className="w-4/6 p-5  h-auto flex justify-center flex-col items-center">
        <h3 className="font-main text-center block text-2xl text-violet-500">
          Edit Profile
        </h3>
        <p className="font-main text-center block text-sm text-neutral-500 mb-5">
          you can change your profile details
        </p>

        <div className="w-3/6">
          <EditProfileForm />
        </div>
      </div>
      <RightSide />

    </div>
  );
};

export default Profile;
