import React from 'react'
import { Link } from 'react-router-dom'
const MenuItem = ({ title, link, Icon }) => {
    return (
        <div className='w-full py-5 pl-3 text-sm border-l-2 border-l-transparent hover:border-l-violet-800 cursor-pointer transition-all text-left font-main text-white'>
            <Link to={link} className='flex w-full gap-3'><Icon fontSize={17} className="text-violet-500" /> {title}</Link>
        </div>
    )
}

export default MenuItem