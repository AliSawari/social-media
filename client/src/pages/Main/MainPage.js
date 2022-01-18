import React from "react";
import MainLayout from "../../components/MainLayout";
import Header from "./Header/Header";
import LeftSide from "./LeftSide/LeftSide";
import Stories from "./Stories/Stories";

const MainPage = () => {
  return (
    <>
      <Header />
      <MainLayout>
        <LeftSide />
        <Stories />
      </MainLayout>
    </>
  );
};

export default MainPage;
