import React, { useContext } from 'react'
import httpClient from '../../../api/client';
import { UserContext } from '../../../context/providers/UserProvider';
import { setChatBackground } from '../../../context/actions/UserActions';
import { useGetUserId } from '../../../hooks/useGetUserId';

const ChatBackgroundItem = ({ image }) => {
    const { dispatch } = useContext(UserContext);
    const { id } = useGetUserId();
    const handleChangeChatBackground = async () => {
        try {
            await httpClient.post("backgrounds/set", {
                image, id
            });
            dispatch(setChatBackground(image));

        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className='w-40 h-48 p-1 overflow-hidden cursor-pointer' onClick={handleChangeChatBackground}>
            <img src={`http://localhost:4000/public/backgrounds/${image}`} className='rounded-3xl w-full h-full object-cover' />
        </div>
    )
}

export default ChatBackgroundItem