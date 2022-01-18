import React from "react";
import StoryItem from "./StoryItem";

const Stories = () => {
  return (
    <div className="w-2/3 h-2/3 p-4 flex gap-5 ">
      <StoryItem />
      <StoryItem />
      <StoryItem />
      <StoryItem />
      <StoryItem />
    </div>
  );
};

export default Stories;
