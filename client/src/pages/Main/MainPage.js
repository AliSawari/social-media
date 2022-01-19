import React from "react";
import MainLayout from "../../components/MainLayout";
import Header from "./Header/Header";
import LeftSide from "./LeftSide/LeftSide";
import Posts from "./Posts/Posts";
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
        <div className="w-1/6">

        </div>
      </MainLayout>
    </>
  );
};

export default MainPage;
