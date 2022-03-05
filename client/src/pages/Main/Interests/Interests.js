import React, { useContext, useEffect, useState } from 'react';
import { TiPointOfInterestOutline } from 'react-icons/ti';
import InterestItem from './InterestItem';
import { UserContext } from '../../../context/providers/UserProvider';
import { Link } from 'react-router-dom';
const Interests = () => {
    const [interests, setInterests] = useState([]);
    const { state: user } = useContext(UserContext);
    return (
        <div className="w-full max-h-auto h-72 mt-4 pb-3 rounded">
            <div className="w-full flex justify-between py-4">
                <h3 className="font-main text-gray-700 flex justify-between gap-2">
                    <div className='flex gap-1'>
                        <TiPointOfInterestOutline fontSize={20} className="text-violet-600" />
                        Your Interests
                    </div>
                    <div>
                        <Link to="/" className='text-xs'>
                             Add More
                        </Link>
                    </div>
                </h3>
            </div>
            <div className='w-full flex flex-wrap gap-2'>
                {user.data ? user.data.interests.map(interest => (
                    <InterestItem key={interest} title={interest} link={`/explore/${interest}`} />
                )) : ""}
            </div>
        </div>
    )
}

export default Interests;