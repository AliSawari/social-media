import React from "react";
import Header from "../Main/Header/Header";
import ProfileForm from "./ProfileForm";

const Profile = () => {
  return (
    <>
      <Header />
      <div className="w-96 h-96  absolute top-0 right-0 left-0 bottom-0 m-auto">
        <h3 className="font-main text-center block text-2xl text-violet-500">
          Edit Profile
        </h3>
        <p className="font-main text-center block text-sm text-neutral-500">
          Occaecat amet aliqua minim voluptate dolore laboris.
        </p>

        <ProfileForm />
      </div>
    </>
  );
};

export default Profile;
