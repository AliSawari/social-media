import React, { useState } from 'react'
import { useGetUserId } from '../../../hooks/useGetUserId'
import MessagesList from '../../Chat/List/MessagesList'
import SettingsLayout from '../SettingsLayout';
import ChatBackground from './ChatBackground';
import FontSize from './FontSize';
const ChatSettings = () => {

    const { id } = useGetUserId();

    const fakeMessages = [
        {
            message: "Cillum nostrud eu cillum exercitation qui laboris ad.",
            sender: { _id: id },
            createdAt: "1 min ago",
            story: null,
        },

        {
            message: "Dolor cupidatat sunt ullamco sit.",
            sender: { _id: "" },
            createdAt: "2 min ago",
            story: null,
        },
    ];


    return (
        <SettingsLayout >
            <div className='w-full flex justify-between h-full'>
                <div className='bg-gray-200 w-4/6 h-full relative'>
                    <MessagesList messages={fakeMessages} />
                </div>
                <div className='bg-gray-200  w-2/6 h-full relative rounded-lg'>
                    <FontSize />
                    <ChatBackground />
                </div>
            </div>
        </SettingsLayout>
    )
}

export default ChatSettings