import React from 'react';
import moment from 'moment';
const StoryItemContent = ({ image , createdAt }) => {
    const start = moment(createdAt);
    const end = moment(new Date());
    const duration = moment.duration(end.diff(start));
    const hours = `${Math.ceil(duration.asHours())}h`;
    return <div className='w-full h-auto relative flex justify-center'>
        <span className='absolute z-40 bg-white/50 text-sm px-3 rounded-lg font-main left-2 top-2'>{hours}</span>
        <img
            src={`http://localhost:4000/public/images/${image}`}
            style={{ width: "100%", height: "35rem", objectFit: "cover" }}            
            className="w-full rounded shadow-md"
        />        
    </div>
};

export default StoryItemContent;
