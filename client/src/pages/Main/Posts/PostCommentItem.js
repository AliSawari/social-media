import React from 'react';
import { BsTrash } from 'react-icons/bs';
import { MdReplay } from 'react-icons/md';
import httpClient from '../../../api/client';
import { useGetUserId } from '../../../hooks/useGetUserId';
import { useShowUserProfile } from '../../../hooks/useShowUserProfile';

const PostCommentItem = ({ message, user, childrens, depth, removeComment, _id, post, changeComments, setComments }) => {

    const { id } = useGetUserId();
    const handleClickDeleteComment = async () => {
        try {
            await httpClient.get(`comments/remove/${_id}`);
            removeComment(_id);
        } catch (error) {
            console.log(error);
        }
    }

    const handleClickReplayComment = async () => {
        try {
            const text = prompt("Enter your replay")
            const comment = {
                post: post._id,
                message: text,
                depth: depth + 1,
                parent: _id,
                user: id
            };
            const { data: comments } = await httpClient.post(`comments/add`, comment);
            setComments(comments);
        } catch (error) {
            console.log(error);
        }
    }
    const mainProfile = useShowUserProfile(user.profile);

    const nestedComments = (childrens || []).map(comment => (
        <PostCommentItem  {...comment} key={comment._id} removeComment={removeComment} setComments={changeComments} />
    ));



    return <div className="w-full h-auto bg-gray-100 flex flex-col items-center justify-start gap-4 p-3 rounded my-5" style={{ marginLeft: `${depth * 10}px` }}>
        <div className='w-full flex'>
            <div className="w-7/12 flex justify-start gap-3 items-center">
                <img
                    src={mainProfile}                    
                    alt="profile user"
                    className="rounded-lg border-1 w-10 h-10"
                />
                <h3 className='font-main text-violet-500 text-sm'>{user.fullname}</h3>
                <p className="font-main text-gray-700">{message}</p>
            </div>
            <div className="w-5/12 text-right">
                {user._id === id ? (
                    <button className="text-violet-500" onClick={handleClickDeleteComment}>
                        <BsTrash />
                    </button>
                ) : null}

                <button className="text-violet-500 ml-3" onClick={handleClickReplayComment}>
                    <MdReplay />
                </button>
            </div>
        </div>
        {nestedComments}
    </div>;
};

export default PostCommentItem;
