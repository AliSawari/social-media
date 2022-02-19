import React from 'react';
import MessageItem from './MessageItem';
const MessagesList = ({ messages }) => {


    return <div className="w-full h-full absolute overflow-y-scroll   py-20 px-6">
        <div className='flex flex-col justify-end'>
            {messages.map((item, index) => <MessageItem key={index} {...item} />)}
        </div>
    </div>

};

export default MessagesList;
