import React from 'react';
import { TiPointOfInterestOutline } from 'react-icons/ti';
import InterestItem from './InterestItem';
const Interests = () => {
    return (
        <div className="w-full max-h-auto h-72 mt-4 pb-3 rounded">
            <div className="flex justify-between py-4">
                <h3 className="font-main text-gray-700 flex items-center gap-2"><TiPointOfInterestOutline fontSize={20} className="text-violet-600" />Your Interests</h3>
            </div>
            <div className='w-full flex flex-wrap gap-2'>
                <InterestItem title="Technologies" link="" />
                <InterestItem title="PHP" link="" />
                <InterestItem title="JavaScript" link="" />
                <InterestItem title="Science" link="" />
                <InterestItem title="Big Data" link="" />
                <InterestItem title="Resume" link="" />
                <InterestItem title="Programming" link="" />
            </div>
        </div>
    )
}

export default Interests;