import React from 'react';
import { BsThreeDots } from 'react-icons/bs'
import { useGetUserId } from '../../../hooks/useGetUserId';

const PostCommentItem = ({ text, user }) => {
    const { id } = useGetUserId();
    return <div className="w-full h-auto flex items-center justify-start gap-4 p-3 rounded bg-neutral-700">
        <div className="w-3/12 flex justify-start gap-1 items-center">
            <img
                src={
                    user.profile.length
                        ? `http://localhost:4000/public/images/${user.profile}`
                        : "https://gravatar.com/avatar/6c2ff79dddfe69146d3a3a55c0bc7f52?s=400&d=robohash&r=x"
                }
                width="35"
                height="35"
                alt="profile user"
                className="rounded-lg border-1"
            />
            <h3 className='font-main text-violet-500 text-sm'>{user.fullname}</h3>
        </div>
        <div className="w-8/12">
            <p className="font-main text-white">{text}</p>
        </div>
        <div className="w-1/12 text-center">
            {user._id === id ? (
                <button className="text-violet-500">
                    <BsThreeDots />
                </button>
            ) : null}

        </div>
    </div>;
};

export default PostCommentItem;
