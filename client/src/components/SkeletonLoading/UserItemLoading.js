import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const UserItemLoading = ({ count = 1 }) => {
   
    return (
        <div className='w-full px-3 py-3'>
            <div>
                <Skeleton circle width={40} height={40} />
            </div>
            <div>
                <Skeleton  />
            </div>
        </div> 
    )
}

export default UserItemLoading