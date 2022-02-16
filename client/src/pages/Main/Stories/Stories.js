import React, { useContext, useEffect, useState } from "react";
import httpClient from "../../../api/client";
import { useNavigate } from 'react-router-dom'
import { useGetUserId } from "../../../hooks/useGetUserId";
import AddStory from "./AddStory";
import StoryContent from "./StoryContent";
import StoryUserItem from "./StoryUserItem";
import { UserContext } from "../../../context/providers/UserProvider";

const Stories = () => {
  const { id } = useGetUserId();
  const [users, setUsers] = useState([]);
  const { state } = useContext(UserContext);
  const userStories = state.data ? state.data.stories : [];
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await httpClient.get(`stories/list/${id}`);
        const userHaveStories = Object.values(data);
        setUsers(userHaveStories);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [])

  const handleNextUserStories = (userId) => {
    if (users.length === 1) {
      navigate("/");
      return;
    }



    const userIndex = users.findIndex(user => user._id === userId);
    if (userIndex === users.length - 1) {
      navigate("/");
      return;
    }
    const { _id: id } = users[userIndex + 1];
    navigate(`/?story=${id}`);
  };

  const handlePrevUserStories = (userId) => {

    if (users.length === 1) {
      navigate("/");
      return;
    }

    const userIndex = users.findIndex(user => user._id === userId);

    const { _id: id } = users[userIndex - 1];
    navigate(`/?story=${id}`);
  }

  const renderUserStories = () => {
    return users.map(item => <StoryUserItem key={item._id} {...item} />)
  }
  return (
    <div className="w-full overflow-hidden h-2/4 px-4 flex mt-20">
      <AddStory userStories={userStories} />
      {renderUserStories()}
      <StoryContent nextUser={handleNextUserStories} prevUser={handlePrevUserStories} />
    </div>
  );
};

export default Stories;
