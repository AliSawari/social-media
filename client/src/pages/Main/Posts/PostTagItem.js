import React from 'react'
import { Link } from 'react-router-dom'

const PostTagItem = ({ title }) => {
    return (
        <Link to={`/interest/${title}`}>
            <div className='bg-gray-200 text-sm p-2 rounded'>{title}</div>
        </Link>
    )
}

export default PostTagItem