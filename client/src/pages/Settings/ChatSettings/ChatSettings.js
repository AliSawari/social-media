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
            createdAt: "1 min ago"
        },

        {
            message: "Dolor cupidatat sunt ullamco sit.",
            sender: { _id: "" },
            createdAt: "2 min ago"
        },
    ];


    return (
        <SettingsLayout >
            <div className='w-full flex justify-between h-full'>
                <div className='bg-neutral-900 w-4/6 h-full relative'>
                    <MessagesList messages={fakeMessages} />
                </div>
                <div className='bg-neutral-900  w-2/6 h-full relative rounded-lg'>
                    <FontSize />
                    <ChatBackground />
                    <div className='w-full px-4 my-5'>
                        <button className='auth-button'>Export Theme</button>
                    </div>
                </div>
            </div>
        </SettingsLayout>
    )
}

export default ChatSettings