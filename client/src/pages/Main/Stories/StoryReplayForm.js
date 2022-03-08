import React, { useRef, useContext } from 'react';
import { AiOutlineSend } from 'react-icons/ai';
import { ChatContext } from '../../../context/providers/ChatProvider';
import { useGetUserId } from '../../../hooks/useGetUserId';
const StoryReplayForm = ({ receiver, id: storyId }) => {

  const inputRef = useRef();
  const { id } = useGetUserId();
  const { socket } = useContext(ChatContext);
  const handleSubmitForm = (e) => {
    e.preventDefault();
    const value = inputRef.current.value.trim();

    if (!value)
      return;


    socket.emit("send message", { message: value, sender: id, receiver, story: storyId });
    inputRef.current.reset();
  };
  return <div className='w-full absolute  bottom-3 flex justify-center'>
    <form className='w-96 flex flex-wrap' onSubmit={handleSubmitForm}>
      <div className='w-full relative'>
        <input ref={inputRef} type="text" className='h-8 w-full bg-transparent text-sm font-main text-white outline-none  border border-white p-1 rounded' placeholder='Send Message' />
      </div>
      <button className='w-10 h-8 absolute right-6 bg-white rounded flex justify-center items-center'>
        <AiOutlineSend fontSize={20} />
      </button>
    </form>
  </div>
    ;
};

export default StoryReplayForm;
