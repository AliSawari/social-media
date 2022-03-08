import React from "react"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const StoryLoading = () => (
    <div className="w-full">
        <Skeleton circle width={40} height={40} />
        <Skeleton />
        <Skeleton height={400}/>
    </div>
)

export default StoryLoading