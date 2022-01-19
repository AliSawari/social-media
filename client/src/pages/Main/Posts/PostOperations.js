import React from "react";
import { IoIosHeartEmpty } from "react-icons/io";
import { BiCommentDetail } from "react-icons/bi";
import { AiOutlineSave } from "react-icons/ai";
const PostOperations = () => {
  return (
    <div className="w-full flex py-2 justify-between">
      <div className="flex gap-3">
        <button className="post-operation-button">
          <IoIosHeartEmpty />
        </button>

        <button className="post-operation-button">
          <BiCommentDetail />
        </button>
      </div>

      <div>
        <button className="post-operation-button">
          <AiOutlineSave />
        </button>
      </div>
    </div>
  );
};

export default PostOperations;
