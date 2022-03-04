import React from 'react'
import { Link } from 'react-router-dom'

const PostItemOptionDropdown = ({ title, link, clickButton, type = "link" }) => {

    const renderContent = () => {
        if (type == "link") {
            return <Link to={link}>
                {title}
            </Link>
        }

        return <button onClick={() => clickButton()}>
            {title}
        </button>
    }
    return (
        <li className='w-full text-center text-gray-700 font-main py-2 rounded text-sm hover:text-violet-600 transition my-6'>
            {renderContent()}
        </li>
    )
}

export default PostItemOptionDropdown