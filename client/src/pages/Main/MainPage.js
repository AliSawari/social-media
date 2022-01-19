import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import MainLayout from "../../components/MainLayout";
import Header from "./Header/Header";
import LeftSide from "./LeftSide/LeftSide";
import Posts from "./Posts/Posts";
import Profile from "./Profile/Profile";
import Stories from "./Stories/Stories";
import { UserContext } from "../../context/providers/UserProvider";
const MainPage = () => {
  const navigate = useNavigate();
  const { state } = useContext(UserContext);
  useEffect(() => {
    if (!state.auth) navigate("/auth/login");
  }, [navigate, state.auth]);
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
