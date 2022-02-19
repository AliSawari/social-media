import React from 'react'
import { Link } from 'react-router-dom'
const MenuItem = ({ title, link }) => {
    return (
        <div className='w-full py-8 pl-3 text-sm border-l-2 border-l-transparent hover:border-l-violet-800 cursor-pointer transition-all text-left font-main text-white'>
            <Link to={link} className='block'>{title}</Link>
        </div>
    )
}

export default MenuItem