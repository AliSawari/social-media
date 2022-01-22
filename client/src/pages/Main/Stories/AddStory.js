import React from "react";
import { BiMessageSquareAdd } from "react-icons/bi";
const AddStory = () => {
  return (
    <div className="px-20 h-96 rounded relative flex justify-center items-center bg-violet-700">
      <div className="z-50 w-100 flex justify-center flex-col items-center">
        <BiMessageSquareAdd className="text-4xl text-white" />
        <h3 className="py-2 text-center font-main text-white">Add Story</h3>
      </div>
    </div>
  );
};

export default AddStory;
