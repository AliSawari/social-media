import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';

const SendMessageButton = ({ onSubmit }) => {
    return <div className="w-1/12 text-right text-2xl text-violet-500">
        <button type="button" onClick={onSubmit}>
            <AiOutlineSend />
        </button>
    </div>
};

export default SendMessageButton;
