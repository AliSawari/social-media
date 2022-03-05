import React from 'react'
import Followers from '../LeftSideBar/Followers';
import UserChatHistory from '../LeftSideBar/UserChatsHistory';
import Links from '../Links/Links';
const RightSide = () => {
  return (
    <div className='w-1/6 relative bg-gray-100 py-5 px-3 h-full-vh'>
        <UserChatHistory />
        <Followers />
        <Links />
    </div>
  )
}

export default RightSide