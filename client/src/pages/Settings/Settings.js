import React from 'react'
import SettingsLayout from './SettingsLayout';
const Settings = () => {
    return (
        <SettingsLayout>
            <div className='w-full h-full flex justify-center flex-col items-center'>
                <h1 className='text-2xl text-violet-700 font-main w-full text-center'>Change your settings</h1>
                <p className='mt-2 font-main text-gray-600 text-sm'>you can change your apperance and privacy settings on this path</p>
            </div>
        </SettingsLayout>
    )
}

export default Settings