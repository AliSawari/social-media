import React from 'react'
import PostTagItem from './PostTagItem';
const PostTags = ({tags}) => {
  return (
    <div className='w-full flex gap-1'>
        {tags.map(tag => <PostTagItem key={tag} title={tag} />)}
    </div>
  )
}

export default PostTags