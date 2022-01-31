import React, { useEffect, useState } from "react";
import httpClient from "../../api/client";
import Loading from "../../components/Loading/Loading";
import MainLayout from "../../components/MainLayout";
import { useGetUserId } from "../../hooks/useGetUserId";
import Header from "./Header/Header";
import LeftSide from "./LeftSide/LeftSide";
import Posts from "./Posts/Posts";
import Profile from "./Profile/Profile";
import Stories from "./Stories/Stories";

const MainPage = () => {
  const { id } = useGetUserId();
  const [posts, setPosts] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await httpClient.get(`posts/following-posts/${id}`);
        setPosts(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const renderPosts = () => {
    if (posts === null)
      return (
        <div className="w-full h-60 flex justify-center items-center">
          <Loading />
        </div>
      );

    return <Posts posts={posts} />;
  };
  return (
    <>
      <Header />
      <MainLayout>
        <LeftSide />
        <div className="w-4/6 px-14 flex flex-col">
          <Stories />
          {renderPosts()}
        </div>
        <Profile />
      </MainLayout>
    </>
  );
};

export default MainPage;
