import React from 'react'

const InterestsGroup = ({ children, isSelected, selectInterestItem }) => {
    return (
        <div onClick={() => selectInterestItem(children)} className={`p-3 border rounded text-xs ${isSelected ? 'bg-purple-600 text-white hover:bg-purple-700' : 'bg-gray-600 text-white hover:bg-gray-700'}  cursor-pointer font-main `}>{children}</div>
    )
}


export default InterestsGroup