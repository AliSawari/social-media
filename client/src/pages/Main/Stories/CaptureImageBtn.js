import React from 'react'
import { MdCamera } from 'react-icons/md'

const CaptureImageBtn = ({ captureImage }) => {
    return (
        <div>
            <button onClick={captureImage} className="text-violet-700 border w-16 h-16 rounded-full border-violet-600  flex justify-center items-center">
                <MdCamera className="hover:rotate-90 transition active:scale-75" fontSize={45} />
            </button>
        </div>
    )
}

export default CaptureImageBtn