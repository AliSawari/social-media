import React, { useEffect, useState } from "react";
import { AiOutlineSend } from 'react-icons/ai';
import httpClient from '../../../api/client'
import { useGetUserId } from '../../../hooks/useGetUserId'
import PostCommentItem from "./PostCommentItem";
const PostComments = ({ id, comments: commentsList }) => {

  const [text, setText] = useState("")
  const { id: user } = useGetUserId();
  const [comments, setComments] = useState(commentsList)
  const [state, setState] = useState(false);
  const [section,setSection] = useState(1);
  const handleChangeInputValue = (e) => {
    const value = e.target.value.trim();
    setText(value);
  }
  const handleSubmitForm = async (e) => {

    try {
      e.preventDefault();
      const { data: comments } = await httpClient.post("posts/comments/add", { user, text, id });
      setComments(comments);
    } catch (error) {
      console.log(error);
    }

  }


  const renderComments = () => {
    return comments.map(comment => (
      <PostCommentItem {...comment} key={comment._id} />
    ))
  }

  const handleClickToggleCommentList = () => {
    setState(prevState => !prevState)
  }
  return (
    <div className="w-full">
      <div className="w-full">
        <button className="bg-transparent text-neutral-600 font-main font-thin text-sm" onClick={handleClickToggleCommentList}>
          Show Comments
        </button>
        {state ? (
          <div className="w-full h-auto">
            {renderComments()}
          </div>
        ) : null}
      </div>

      <div className="w-full py-3">
        <form onSubmit={handleSubmitForm}>
          <div className="w-full relative">
            <input value={text} onChange={handleChangeInputValue} type="text" className="w-full h-10 rounded bg-neutral-900 outline-none p-2 text-white font-main" placeholder="Add a comment..." />
            <button className="absolute text-violet-600 top-0 w-12 text-center flex items-center h-10 -right-5">
              <AiOutlineSend fontSize={20} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostComments;
