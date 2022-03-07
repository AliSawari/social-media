import React from 'react'
import { Link } from 'react-router-dom'

const PostTagItem = ({ title }) => {
    return (
        <Link to={`/interest/${title}`}>
            <div className='text-violet-600 font-main text-sm p-2 rounded font-bold'>#{title}</div>
        </Link>
    )
}

export default PostTagItem