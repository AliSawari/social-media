import React, { useContext } from 'react';
import { UserContext } from '../../../context/providers/UserProvider';
import MessageItem from './MessageItem';
const MessagesList = ({ messages }) => {
    const { state: user } = useContext(UserContext);
    return <div className="w-full h-full absolute overflow-y-scroll  py-20 px-6" style={{
        backgroundImage: `url(${user.data ? `http://localhost:4000/public/backgrounds/${user.data.chatSettings.background}` : ""})`
        , backgroundSize: "cover",
        backgroundPosition: "center center"

    }}>
        <div className='flex flex-col justify-end'>
            {messages.map((item, index) => <MessageItem key={index} {...item} />)}
        </div>
    </div>

};

export default MessagesList;
