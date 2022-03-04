import React from "react";
import MainLayout from "../../components/MainLayout";
import SearchBox from "./Header/SearchBox";
import LeftSideBar from "./LeftSideBar/LeftSideBar";
import Posts from "./Posts/Posts";
import RightSide from "./RightSide/RightSide";
import Stories from "./Stories/Stories";
import TopNavbar from "./TopNavbar/TopNavbar";

const MainPage = () => {
  return (
    <>
      <MainLayout>
        <LeftSideBar />
        <div className="w-4/6 px-14 flex flex-col">
          <div className="w-full flex">
            <SearchBox />
            <TopNavbar />
          </div>
          <Stories />
          <Posts />
        </div>
        <RightSide />
      </MainLayout>
    </>
  );
};

export default MainPage;
