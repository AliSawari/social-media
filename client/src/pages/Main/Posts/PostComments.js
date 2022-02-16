import React, { useContext, useEffect, useState } from "react";
import { AiOutlineSend } from 'react-icons/ai';
import httpClient from '../../../api/client'
import { useGetUserId } from '../../../hooks/useGetUserId'
import PostCommentItem from "./PostCommentItem";
import { ChatContext } from "../../../context/providers/ChatProvider";
import swal from 'sweetalert2'
const PostComments = ({ id }) => {
  const { socket } = useContext(ChatContext);
  const [text, setText] = useState("");
  const { id: user } = useGetUserId();
  const [comments, setComments] = useState([]);
  const [state, setState] = useState(false);
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const { data: comments } = await httpClient.get(`comments/get-by-post/${id}`);
        setComments(comments);
      } catch (error) {
        console.log(error);
      }
    }

    fetchComments();
  }, []);

  const handleChangeInputValue = (e) => {
    const value = e.target.value;
    setText(value);
  }
  const handleSubmitForm = async (e) => {

    try {
      e.preventDefault();
      if (text.length === 0) {
        return;
      }
      const { data: comments } = await httpClient.post("comments/add", { user, message: text, post: id, depth: 0 });
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

  const createNestedComments = (arrComments) => {
    let nestedChildrens = [];
    const sortedComments = arrComments.sort((a, b) => {
      return a.depth - b.depth;
    }).reverse();
    for (let index = 0; index < sortedComments.length; index++) {
      const comment = sortedComments[index];
      if (!comment.childrens) {
        comment.childrens = [];
      }
      const id = comment._id;
      const childrens = sortedComments.filter(item => item.parent === id);
      if (childrens.length) {
        comment["childrens"] = childrens;
        childrens.forEach(child => {
          nestedChildrens = nestedChildrens.filter(item => item._id != child._id);
        })
      }
      nestedChildrens.push(comment);
    }
    return nestedChildrens;
  }


  const handleRemoveComment = (id) => {
    setComments(comments => comments.filter(item => item._id !== id));
  }

  const handleChangeComments = (comments) => {
    setComments(comments);
  }

  const renderComments = () => {
    const nestedComments = createNestedComments(comments);
    return nestedComments.map(comment => (
      <PostCommentItem removeComment={handleRemoveComment} {...comment} key={comment._id} changeComments={handleChangeComments} />
    ));
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
