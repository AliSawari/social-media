import React from "react";
import Header from "../Main/Header/Header";
import EditProfileForm from "./EditProfileForm";

const Profile = () => {
  return (
    <>
      
      <div className="w-96 h-96  absolute top-0 right-0 left-0 bottom-0 m-auto">
        <h3 className="font-main text-center block text-2xl text-violet-500">
          Edit Profile
        </h3>
        <p className="font-main text-center block text-sm text-neutral-500">
          you can change your profile details
        </p>

        <EditProfileForm />
      </div>
    </>
  );
};

export default Profile;
