import React from 'react';
import { BsTrash } from 'react-icons/bs'
import httpClient from '../../../api/client';
import { useGetUserId } from '../../../hooks/useGetUserId';
import { useShowUserProfile } from '../../../hooks/useShowUserProfile';

const PostCommentItem = ({ text, user, _id , removeComment , pid }) => {


    const handleClickDeleteComment = async () => {
        try {
            await httpClient.get(`posts/delete-comment/${pid}/${_id}`);
            removeComment(_id);
        } catch (error) {
            console.log(error);
        }
    }
    const { id } = useGetUserId();
    const mainProfile = useShowUserProfile(user.profile);
    return <div className="w-full h-auto flex items-center justify-start gap-4 p-3 rounded my-5 border border-neutral-700">
        <div className="w-7/12 flex justify-start gap-3 items-center">
            <img
                src={mainProfile}
                width="30"
                height="30"
                alt="profile user"
                className="rounded-lg border-1"
            />
            <h3 className='font-main text-violet-500 text-sm'>{user.fullname}</h3>
            <p className="font-main text-white">{text}</p>
        </div>
        <div className="w-5/12 text-right">
            {user._id === id ? (
                <button className="text-violet-500" onClick={handleClickDeleteComment}>
                    <BsTrash />
                </button>
            ) : null}
        </div>
    </div>;
};

export default PostCommentItem;
