import React from 'react'
import MenuItem from './MenuItem';
import { MdPassword } from 'react-icons/md';
import {RiMailSettingsLine , RiChatPrivateLine} from 'react-icons/ri';
import {AiOutlineBell} from 'react-icons/ai';

const Menu = () => {
  return (
    <div className='w-1/6 h-full bg-neutral-900 mt-52 rounded'>
      <MenuItem title="Change Password" link="/settings/change_password" Icon={MdPassword} />
      <MenuItem title="Chat Settings" link="/settings/chat_settings" Icon={RiMailSettingsLine} />
      <MenuItem title="Notifications" link="/settings/notifications" Icon={AiOutlineBell} />
      <MenuItem title="Privacy and Security" link="/settings/privacy" Icon={RiChatPrivateLine} />
    </div>
  )
}

export default Menu;