import React from "react";
import { Link } from "react-router-dom";
import { useShowUserProfile } from '../../../hooks/useShowUserProfile'
const ChatHeader = ({ id, user }) => {
    const profile = useShowUserProfile(user ? user.profile : "")
    return id && user ? (
        <div className="w-full flex items-center justify-between h-16 bg-neutral-800 absolute top-0 z-30">
            <Link to={`/@${user.username}`}>
                <div className="px-5 flex gap-1 items-center">
                    <img
                        src={profile}
                        className="w-10 h-10 rounded-md object-cover"
                    />
                    <h3 className="text-sm text-violet-500 pt-2 font-main">
                        {user.fullname}
                    </h3>
                </div>
            </Link>
        </div>
    ) : (
        []
    );
};

export default ChatHeader;
