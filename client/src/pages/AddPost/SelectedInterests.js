import React from 'react'
import { FaTimes } from 'react-icons/fa'

const SelectedInterests = ({ selectedInterests  , removeSelectedInterest}) => {
    return (
        selectedInterests.map(item => <div key={item._id} className="p-3 bg-gray-200 rounded ">
            {item.title} &nbsp; <button onClick={() => removeSelectedInterest(item)}><FaTimes /></button>
        </div>)
    )
}

export default SelectedInterests