import React from 'react'
import { useGetUserId } from '../../hooks/useGetUserId'
import MessagesList from '../Chat/List/MessagesList'
import SettingsLayout from './SettingsLayout'
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
    ]
    return (
        <SettingsLayout >
            <div className='bg-neutral-900 w-full h-full relative'>
                <MessagesList messages={fakeMessages} />
            </div>
        </SettingsLayout>
    )
}

export default ChatSettings