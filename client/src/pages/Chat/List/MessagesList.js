import React, { useContext, useRef, useEffect } from 'react';
import { UserContext } from '../../../context/providers/UserProvider';
import MessageItem from './MessageItem';
const MessagesList = ({ messages }) => {
    const { state: user } = useContext(UserContext);
    const chatListRef = useRef(null);
    useEffect(() => {
        if (messages.length) {
            chatListRef.current.scrollTop = chatListRef.current.scrollHeight
        }
    }, [messages]);

    return <div className="w-full h-full absolute overflow-y-scroll  py-20 px-6" style={{
        backgroundImage: `url(${user.data ? `http://localhost:4000/public/backgrounds/${user.data.chatSettings.background}` : ""})`
        , backgroundSize: "cover",
        backgroundPosition: "center center"

    }}
        ref={chatListRef}
    >
        <div className='flex flex-col justify-end'>
            {messages.map((item, index) => <MessageItem key={index} fontSize={user.data ? user.data.chatSettings.fontSize : 15} {...item} />)}
        </div>
    </div>

};

export default MessagesList;
