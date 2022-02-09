import React from 'react';

const StoryItemContent = ({ title, image }) => {
    return <div className='w-96 h-auto relative justify-center'>
        <img
            src={`http://localhost:4000/public/images/${image}`}
            style={{ width: "100%", height: "32rem", objectFit: "cover" }}
            alt={title}
        />
        <h3 className='absolute bottom-10 w-full text-center font-main text-white bg-gray-900/50 py-5'>{title}</h3>
    </div>
};

export default StoryItemContent;
