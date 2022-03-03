import React from 'react'
import Followers from '../LeftSide/Followers';
import Links from '../Links/Links';
const RightSide = () => {
  return (
    <div className='w-1/6 relative bg-gray-100 py-5 px-3 h-full-vh'>
        <Followers />
        <Links />
    </div>
  )
}

export default RightSide