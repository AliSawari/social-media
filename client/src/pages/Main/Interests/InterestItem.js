import React from 'react'
import { Link } from 'react-router-dom';
const InterestItem = ({ title, link }) => {
    return (
        <div className='p-2 text-center border w-auto bg-gray-200 hover:bg-gray-300 rounded'>
            <Link to={link} className='text-sm font-main'>{title}</Link>
        </div>
    )
}

export default InterestItem