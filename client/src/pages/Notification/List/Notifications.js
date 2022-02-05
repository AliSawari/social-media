import React from 'react';

const Notifications = ({ list, title }) => {

    const renderNotifications = () => {

        if (list.length === 0) {
            return <div className='w-full flex justify-center items-center text-violet-500 font-main'>
                Nothing To Show
            </div>
        }
        return list.map(item => (
            <div key={item._id} className='w-full hover:bg-neutral-900 transition h-auto border-l-2 py-3 px-3 font-main flex justify-between border-l-violet-600'>
                <h3 className='text-violet-500'>{item.message}</h3>
                <span className='text-white'>{item.createdAt}</span>
            </div>
        ))
    }
    return <section>
        <h3 className='text-xl font-main my-10 text-violet-600 border-b border-b-violet-600 '>{title}</h3>
        {renderNotifications()}
    </section>;
};

export default Notifications;
