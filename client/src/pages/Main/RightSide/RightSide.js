import React from 'react'
import Followers from '../LeftSideBar/Followers';
import UserChatHistory from '../LeftSideBar/UserChatsHistory';
import Links from '../Links/Links';
const RightSide = () => {
  return (
    <div className='w-1/6 relative  px-3 '>
      <div className='flex flex-col fixed w-72 bg-gray-100 h-full-vh'>
        <UserChatHistory />
        <Followers />
        <Links />
      </div>
    </div>
  )
}

export default RightSide