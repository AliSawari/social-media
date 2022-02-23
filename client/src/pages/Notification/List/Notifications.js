import React from 'react';
import httpClient from '../../../api/client';
import { useNavigate } from 'react-router-dom'
import { useGetUserId } from '../../../hooks/useGetUserId';
const Notifications = ({ list, title }) => {

    const navigate = useNavigate();
    const { id } = useGetUserId();
    const handleClickAcceptRequest = async (follower, status) => {
        try {
            await httpClient.post("follow/set-status", { user: follower, following: id, status });
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    }
    const renderNotifications = () => {

        if (list.length === 0) {
            return <div className='w-full flex justify-center items-center text-violet-500 font-main'>
                Nothing To Show
            </div>
        }
        return list.map(item => (
            <div key={item._id} className='w-full hover:bg-neutral-900 transition h-auto border-l-2 py-3 px-3 font-main flex justify-between border-l-violet-600'>
                <h3 className='text-violet-500'>{item.message}</h3>
                <span className='text-white'>
                    {item.createdAt}
                    {item.request.status ? (<div>
                        <button className='p-2 border border-green-600 m-2 rounded text-green-600 hover:bg-green-600 hover:text-white'
                            onClick={() => handleClickAcceptRequest(item.request.follower, "request-accepted")}>accept</button>
                        <button className='p-2 border border-red-600 m-2 rounded text-red-600 hover:bg-red-600 hover:text-white'
                            onClick={() => handleClickAcceptRequest(item.request.follower, "request-none")}
                        >delete</button>
                    </div>) : ""}
                </span>
            </div>
        ))
    }
    return <section>
        <h3 className='text-xl font-main my-10 text-violet-600 border-b border-b-violet-600 '>{title}</h3>
        {renderNotifications()}
    </section>;
};

export default Notifications;
