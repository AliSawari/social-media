import React from 'react';
import MessageItem from './MessageItem';

const MessagesList = ({ messages }) => {
    return <div className="w-full h-full relative overflow-y-scroll flex flex-col justify-end py-3  px-6">
        {messages.map((item, index) => <MessageItem key={index} {...item} />)}
    </div>
};

export default MessagesList;
