import React from "react";
import AddPostForm from "./AddPostForm";
import LeftSide from '../Main/LeftSideBar/LeftSideBar';
import RightSide from '../Main/RightSide/RightSide';
const AddPostPage = () => {
  return (
    <div className="flex justify-between">
      <LeftSide />
      <AddPostForm />
      <RightSide />
    </div>
  );
};

export default AddPostPage;
