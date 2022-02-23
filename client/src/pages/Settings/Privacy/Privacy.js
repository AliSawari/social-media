import React from 'react'
import SettingsLayout from '../SettingsLayout';
import PrivateAccount from './PrivateAccount';
const Privacy = () => {
    return (
        <SettingsLayout>
            <div className='w-full h-full flex flex-col'>
                <div className='w-full'>
                    <h1 className="text-3xl text-violet-600 font-main">Account Privacy</h1>
                </div>
                <PrivateAccount />
            </div>
        </SettingsLayout>
    )
}

export default Privacy