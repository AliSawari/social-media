import React from "react";
import AddStory from "./AddStory";
import StoryItem from "./StoryItem";

const Stories = () => {
  return (
    <div className="w-full overflow-hidden h-2/4 px-4 flex ">
      <AddStory />
      <StoryItem />
      <StoryItem />
      <StoryItem />
      <StoryItem />
    </div>
  );
};

export default Stories;
