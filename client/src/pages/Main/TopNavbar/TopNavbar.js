import React, { useContext } from 'react';
import UserDropdownMenu, { Item } from '../../../components/UserDropdownMenu/UserDropdownMenu';
import { UserContext } from '../../../context/providers/UserProvider';
import { FaUserAlt } from 'react-icons/fa';
import { BsSave } from 'react-icons/bs';
import { IoSettingsOutline } from 'react-icons/io5';
import { AiOutlineLogout } from 'react-icons/ai';
import Notifications from '../../../components/Notifications/Notifications';
import { Link } from 'react-router-dom';
import { IoIosAddCircleOutline } from 'react-icons/io'
const TopNavbar = () => {
  const { state: user } = useContext(UserContext);
  const profile = user.data?.profile;
  const fullname = user.data?.fullname;
  const haveNotifications = user.data?.notifications.filter(notification => notification.seen !== true).length !== 0;
  return (
    <div className="w-1/2 flex justify-end items-center gap-4">
      <div className='bg-violet-700 py-2 px-3 transition-all hover:bg-violet-900 rounded '>
        <Link to="/post/add" className='gap-2 font-main flex text-sm text-white justify-center items-center'>
          <IoIosAddCircleOutline fontSize={26} />
          Create Post
        </Link>
      </div>
      <Notifications haveNotifications={haveNotifications} />
      <UserDropdownMenu profile={profile} fullname={fullname}>
        <Item Icon={FaUserAlt} link="/user/profile">Profile</Item>
        <Item Icon={BsSave} link="/user/saved">Saveds</Item>
        <Item Icon={IoSettingsOutline} link="/settings/main">Settings</Item>
        <Item Icon={AiOutlineLogout} link="/user/logout">Logout</Item>
      </UserDropdownMenu>

    </div>
  )
}

export default TopNavbar