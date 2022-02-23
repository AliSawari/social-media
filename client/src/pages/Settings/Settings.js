import React from 'react'
import { FiSettings } from 'react-icons/fi';
import SettingsLayout from './SettingsLayout';
const Settings = () => {
    return (
        <SettingsLayout>
            <div className='w-full h-full flex justify-center flex-col items-center'>
                <span className='w-14 h-14 text-violet-700 flex border border-violet-700 mb-5 justify-center items-center rounded-full'>
                    <FiSettings fontSize={26} />
                </span>
                <h1 className='text-2xl text-violet-700 font-main w-full text-center'>Settings</h1>
                <p className='mt-2 font-main text-gray-600 text-sm'>you can change your apperance and privacy settings</p>
            </div>
        </SettingsLayout>
    )
}

export default Settings