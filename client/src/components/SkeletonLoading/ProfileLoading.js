import React from "react"
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
const ProfileLoading = () => (
    <div className="w-full flex flex-wrap justify-center">
        <div className="w-full flex p-3 justify-center">
            <Skeleton circle width={150} height={150} />
        </div>
        <div className="w-full p-3">
            <Skeleton count={3} style={{ marginBlockEnd: "20px", alignItems: "center" }} />
        </div>
    </div>
)

export default ProfileLoading;