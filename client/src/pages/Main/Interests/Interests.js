import React, { useContext } from 'react';
import { TiPointOfInterestOutline } from 'react-icons/ti';
import InterestItem from './InterestItem';
import { UserContext } from '../../../context/providers/UserProvider';
import { Link } from 'react-router-dom';
import { MdAdd } from 'react-icons/md';
const Interests = () => {
    const { state: user } = useContext(UserContext);
    return (
        <div className="w-full max-h-auto h-72 mt-4 pb-3 rounded">
            <div className="w-full flex flex-wrap py-4">
                <h3 className="w-full font-main text-gray-700 flex justify-between gap-2">
                    <div className='flex gap-1'>
                        <TiPointOfInterestOutline fontSize={20} className="text-violet-600" />
                        Your Interests
                    </div>
                    <div>
                        <Link to="/" className='text-xs'>
                            <MdAdd fontSize={22} />
                        </Link>
                    </div>
                </h3>
            </div>
            <div className='w-full flex flex-wrap gap-2'>
                {user.data?.interests.map(interest => (
                    <InterestItem key={interest} title={interest} link={`/explore/${interest}`} />
                ))}
            </div>
        </div>
    )
}

export default Interests;