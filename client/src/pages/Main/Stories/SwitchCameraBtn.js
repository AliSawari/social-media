import React from 'react'
import { MdOutlineCameraswitch } from 'react-icons/md'

const SwitchCameraBtn = ({ switchCamera }) => {
    return (
        <div>
            <button onClick={switchCamera} className="text-white border w-12 h-12 rounded-full border-white flex justify-center items-center">
                <MdOutlineCameraswitch fontSize={25} />
            </button>
        </div>
    )
}

export default SwitchCameraBtn