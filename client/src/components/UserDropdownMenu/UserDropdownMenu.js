import React, { useState } from 'react'
import { FiChevronDown } from 'react-icons/fi';
import { useShowUserProfile } from '../../hooks/useShowUserProfile';
import { Link } from 'react-router-dom';
const UserDropdownMenu = ({ children, profile, fullname }) => {
  const mainProfile = useShowUserProfile(profile);
  const [show, setShow] = useState(false);
  const handleClickToggleShow = () => {
    setShow(show => !show);
  }
  return (
    <div className='flex justify-center relative py-2 items-center gap-3 cursor-pointer hover:bg-gray-100 transition-all p-2 rounded-md' onClick={handleClickToggleShow}>
      <img src={mainProfile} className='w-9 h-9 rounded-full object-cover' />
      <h3 className='text-sm'>{fullname}</h3>
      <FiChevronDown />
      {show ? (<div className='absolute top-12 w-full h-auto bg-white shadow-sm'>
        {children}
      </div>) : ""}

    </div>
  )
}
export const Item = ({ Icon, children, link }) => {
  return <div className='w-full  px-2 py-3 hover:bg-gray-100 '>
    <Link to={link} className='w-full text-sm text-gray-700 font-main flex gap-2'>
      <Icon /> {children}
    </Link>
  </div>
}

export default UserDropdownMenu