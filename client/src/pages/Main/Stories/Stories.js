import React, { useContext, useEffect, useState } from "react";
import httpClient from "../../../api/client";
import { useGetUserId } from "../../../hooks/useGetUserId";
import AddStory from "./AddStory";
import StoryUserItem from "./StoryUserItem";
import StoriesModal from "./StoriesModal";

const Stories = () => {
  const { id } = useGetUserId();
  const [userStories, setUserStories] = useState({ users: [], stories: [] });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: { stories, userStories } } = await httpClient.get(`stories/list/${id}`);
        const userHaveStories = Object.values(stories);
        setUserStories({
          stories: userStories,
          users: userHaveStories
        });
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  console.log("Stories rendered", userStories);



  const renderUserStories = () => {
    return userStories.users.map(item => <StoryUserItem key={item._id} {...item} />)
  }
  return (
    <div className="w-full overflow-hidden h-2/4 px-4 flex mt-20">
      <AddStory userStories={userStories.stories} />
      {renderUserStories()}
      <StoriesModal users={userStories.users} />
    </div>
  );
};

export default Stories;
