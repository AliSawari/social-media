import React from "react";
import MainLayout from "../../components/MainLayout";
import SearchBox from "./Header/SearchBox";
import LeftSide from "./LeftSide/LeftSide";
import Posts from "./Posts/Posts";
import RightSide from "./RightSide/RightSide";
import Stories from "./Stories/Stories";

const MainPage = () => {
  return (
    <>
      <MainLayout>
        <LeftSide />
        <div className="w-4/6 px-14 flex flex-col">
          <SearchBox />
          <Stories />
          <Posts />
        </div>
        <RightSide />
      </MainLayout>
    </>
  );
};

export default MainPage;
