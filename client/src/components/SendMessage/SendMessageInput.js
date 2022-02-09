import React from 'react';

const MessageSenderInput = ({ text, onChange, onSubmit }) => {
    const handleKeyUp = ({ code }) => {
        if (code === "Enter")
            onSubmit()
    }
    return <div className="w-10/12">
        <input
            type="text"
            className="w-full h-12 bg-transparent outline-none text-white font-main"
            placeholder="Type a message..."
            value={text}
            onChange={onChange}
            onKeyUp={handleKeyUp}
        />
    </div>
};

export default MessageSenderInput;
