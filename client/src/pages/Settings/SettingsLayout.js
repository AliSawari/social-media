import React from 'react';
import LeftSideBar from '../Main/LeftSideBar/LeftSideBar';
import Menu from './Menu'

const Settings = ({ children }) => {
    return (
        <div className='flex'>
            <LeftSideBar />
            <div className='h-full-vh w-full flex justify-center items-center'>
                <Menu />
                <div className='w-5/6 h-full'>{children}</div>
            </div>
        </div>
    )
}

export default Settings