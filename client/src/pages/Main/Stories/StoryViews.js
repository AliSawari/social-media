import React from 'react';
import { AiOutlineEye } from 'react-icons/ai';
const StoryViews = ({ show, views , toggle }) => {
    return (
        <div className={`cursor-pointer flex items-center gap-1 font-main text-sm absolute p-3 rounded top-0 right-6 z-50 ${!show ? 'hidden' : ''}`} onClick={toggle}>
            <AiOutlineEye fontSize={25} />
            {views.length}
        </div>
    )
}

export default StoryViews