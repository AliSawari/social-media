import React, { useContext, useState } from 'react'
import InputRange from 'react-input-range';
import "react-input-range/lib/css/index.css";
import httpClient from '../../../api/client';
import { setChatFontSize } from '../../../context/actions/UserActions';
import { UserContext } from '../../../context/providers/UserProvider';
import { useGetUserId } from '../../../hooks/useGetUserId';
const FontSize = () => {
    const { id } = useGetUserId();
    const { dispatch, state } = useContext(UserContext);
    const size = state.data ? state.data.chatSettings.fontSize : 1;
    const handleChangeFontSize = (size) => {
        dispatch(setChatFontSize(size));
    }

    const handleBlurFontSize = async () => {
        try {
            await httpClient.post("users/set-chat-font-size", {
                size, id
            })
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className='w-full p-7'>
            <h3 className='font-main text-violet-500'>Font Size</h3>
            <div className='w-full flex py-3 items-center' >
                <InputRange
                    maxValue={30}
                    minValue={1}
                    value={size}
                    className='w-3/4 h-10'
                    onChange={handleChangeFontSize}
                    onChangeComplete={handleBlurFontSize}
                />

                <span className='font-main text-violet-700 w-1/4 text-center'>{size} px</span>
            </div>
        </div>

    )
}

export default FontSize