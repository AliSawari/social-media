import React, { useContext, useState } from "react";
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";
import { BiCommentDetail } from "react-icons/bi";
import { AiOutlineSave } from "react-icons/ai";
import { useGetUserId } from '../../../hooks/useGetUserId'
import { useSocketConnection } from '../../../hooks/useSocketConnection'
import httpClient from "../../../api/client";
import { UserContext } from '../../../context/providers/UserProvider'
const PostOperations = ({ likes, id }) => {

  const socket = useSocketConnection("http://localhost:4000");
  const { state: { data } } = useContext(UserContext);
  const { id: uid } = useGetUserId();
  const isLiked = likes.find(like => like.user === uid)
  const [state, setState] = useState({ isLiked: isLiked != undefined, count: likes.length });
  const isSavedPost = data.saveds.some(item => item.user._id === uid && item.post._id === id);
  console.log(data.saveds);
  const [save, setSave] = useState(isSavedPost);
  const handleClickLike = async () => {
    try {
      const { data } = await httpClient.post("posts/like", { uid, id, isLiked: state.isLiked });
      if (data.isLiked) {
        socket.emit("post:liked", { uid, id })
      }
      setState(data)
    } catch (error) {
      console.log(error);
    }
  }


  const handleClickSavePost = async () => {
    try {
      const { data: { mode } } = await httpClient.post(`save/add`, { post: id, user: uid });
      setSave(mode === "save");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="w-full flex py-2 justify-between">
      <div className="flex gap-3">
        <button className="post-operation-button flex items-center gap-1" onClick={handleClickLike}>
          {state.isLiked ? <IoIosHeart /> : <IoIosHeartEmpty />}
          <span className="text-sm">{state.count}</span>
        </button>

        <button className="post-operation-button">
          <BiCommentDetail />
        </button>
      </div>

      <div>
        <button className={`post-operation-button ${save ? 'bg-violet-700 text-white' : ''}`} onClick={handleClickSavePost}>
          <AiOutlineSave />
        </button>
      </div>
    </div>
  );
};

export default PostOperations;
