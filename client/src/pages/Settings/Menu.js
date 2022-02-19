import React from 'react'
import MenuItem from './MenuItem';

const Menu = () => {
  return (
    <div className='w-1/6 h-full bg-neutral-900 mt-52 rounded'>
        <MenuItem title="Change Password" link="/settings/change_password" />
        <MenuItem title="Chat Settings" link="/settings/chat_settings" />
        <MenuItem title="Notifications" link="/settings/notifications" />
        <MenuItem title="Privacy and Security" link="/settings/privacy" />
    </div>
  )
}

export default Menu;