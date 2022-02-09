import React, { useState } from 'react';
import Picker from "emoji-picker-react";
import { BsEmojiSmile } from 'react-icons/bs';

const MessageSenderEmojiPicker = ({ onEmojiSelect }) => {
    const [toggle, setToggle] = useState(false);

    const handleToggleEmojiPicker = () => {
        setToggle((toggle) => !toggle);
    };

    return <div className="w-1/12 pl-4">
        {toggle && (
            <Picker
                pickerStyle={{ position: "absolute", bottom: "70px" }}
                onEmojiClick={onEmojiSelect}

            />
        )}
        <button
            onClick={handleToggleEmojiPicker}
            className="text-2xl text-violet-500"
        >
            <BsEmojiSmile />
        </button>
    </div>
};

export default MessageSenderEmojiPicker;
