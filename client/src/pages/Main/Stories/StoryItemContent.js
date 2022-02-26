import React from 'react';
const StoryItemContent = ({ image }) => {
    return <div className='w-full h-auto relative flex justify-center'>
        <img
            src={`http://localhost:4000/public/images/${image}`}
            style={{ width: "100%", height: "32rem", objectFit: "cover" }}            
            className="w-full"
        />        
    </div>
};

export default StoryItemContent;
