import React, { useContext, useState } from "react";
import { AiOutlineSend } from 'react-icons/ai';
import httpClient from '../../../api/client'
import { useGetUserId } from '../../../hooks/useGetUserId'
import PostCommentItem from "./PostCommentItem";
import { ChatContext } from "../../../context/providers/ChatProvider";
import swal from 'sweetalert2'
const PostComments = ({ id, comments: commentsList }) => {
  const { socket } = useContext(ChatContext);
  const [text, setText] = useState("")
  const { id: user } = useGetUserId();
  const [comments, setComments] = useState(commentsList)
  const [state, setState] = useState(false);
  const handleChangeInputValue = (e) => {
    const value = e.target.value;
    setText(value);
  }
  const handleSubmitForm = async (e) => {

    try {
      e.preventDefault();
      if (value.length === 0) {
        return;
      }
      const { data: comments } = await httpClient.post("posts/comments/add", { user, text, id });
      socket.emit("post:comment", { id, user })
      swal.fire({
        title: "Success",
        text: "your comment submitted",
        icon: "success"
      });
      setComments(comments);
      setText("");
    } catch (error) {
      console.log(error);
    }

  }


  const handleRemoveComment = (id) => {
    setComments(comments => comments.filter(item => item._id !== id));
  }

  const renderComments = () => {
    return comments.map(comment => (
      <PostCommentItem removeComment={handleRemoveComment} {...comment} key={comment._id} pid={id} />
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
