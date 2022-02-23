import React from 'react'

const PrivateAccount = () => {
    return (
        <div className='w-full'>
            <label class="inline-flex items-center mt-3">
                <input type="checkbox" className="form-checkbox h-5 w-5 bg-purple-600" /><span class="ml-2 text-white font-main">Private Account</span >
            </label>
            <p className='text-sm text-gray-400 font-main'>When your account is private, only people you approve can see your photos and videos on Instagram. Your existing followers won't be affected.</p>
        </div>
    )
}

export default PrivateAccount