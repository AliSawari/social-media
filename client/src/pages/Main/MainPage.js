import React from "react";
import MainLayout from "../../components/MainLayout";
import Header from "./Header/Header";
import LeftSide from "./LeftSide/LeftSide";
import Posts from "./Posts/Posts";
import Profile from "./Profile/Profile";
import Stories from "./Stories/Stories";

const MainPage = () => {
  return (
    <>
      <Header />
      <MainLayout>
        <LeftSide />
        <div className="w-3/6 flex flex-col">
          <Stories />
          <Posts />
        </div>
        <Profile />
      </MainLayout>
    </>
  );
};

export default MainPage;
