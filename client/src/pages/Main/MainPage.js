import React from "react";
import MainLayout from "../../components/MainLayout";
import Header from "./Header/Header";
import LeftSide from "./LeftSide/LeftSide";

const MainPage = () => {
  return (
    <>
      <Header />
      <MainLayout>
        <LeftSide />
      </MainLayout>
    </>
  );
};

export default MainPage;
