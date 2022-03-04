import React, { useContext } from 'react';
import UserDropdownMenu, { Item } from '../../../components/UserDropdownMenu/UserDropdownMenu';
import { UserContext } from '../../../context/providers/UserProvider';
import { FaUserAlt } from 'react-icons/fa';
import { BsSave } from 'react-icons/bs';
import { IoSettingsOutline } from 'react-icons/io5';
import { AiOutlineLogout } from 'react-icons/ai';
const TopNavbar = () => {
  const { state: user } = useContext(UserContext);
  const profile = user.data?.profile;
  const fullname = user.data?.fullname
  return (
    <div className="w-1/2 flex justify-end items-center">
      <UserDropdownMenu profile={profile} fullname={fullname}>
        <Item Icon={FaUserAlt} link="/user/profile">Profile</Item>
        <Item Icon={BsSave} link="/user/saved">Saveds</Item>
        <Item Icon={IoSettingsOutline} link="/setting/main">Settings</Item>
        <Item Icon={AiOutlineLogout} link="/user/logout">Logout</Item>
      </UserDropdownMenu>
    </div>
  )
}

export default TopNavbar