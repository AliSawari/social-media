import React from 'react'
import SkeletonLoading from './SkeletonLoading';
const UserItemLoading = ({ count = 1 }) => {
    const renderItems = () => {
        const loadings = [];
        for (let i = 0; i < count; i++) {
            loadings.push(<SkeletonLoading key={i} />)
        }
        return loadings;
    }
    return (
        <div className='px-3 py-3'>
            {renderItems()}
        </div>
    )
}

export default UserItemLoading