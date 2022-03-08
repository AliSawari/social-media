import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import moment from 'moment';
import StoryReplayForm from './StoryReplayForm';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const StoryItemContent = ({ image, createdAt , user , _id }) => {
    const start = moment(createdAt);
    const end = moment(new Date());
    const duration = moment.duration(end.diff(start));

    const renderDuration = () => {
        if (duration.asMinutes() > 60)
            return `${Math.floor(duration.asHours())} h`;

        return `${Math.floor(duration.asMinutes())} m`;
    }
    const durationText = renderDuration();
    return <div className='w-full h-auto flex justify-center'>
        <span className='absolute z-40 bg-white/50 text-sm px-3 rounded-lg font-main left-2 top-2'>{durationText}</span>
        <LazyLoadImage src={`http://localhost:4000/public/images/${image}`}
            style={{ width: "100%", height: "35rem", objectFit: "cover" }}
            placeholder={<div className="p-3"><Skeleton className="w-full h-100" /></div>}
            className="w-full rounded shadow-md"
        />
        <StoryReplayForm receiver={user._id} id={_id} />
    </div>
};

export default StoryItemContent;
