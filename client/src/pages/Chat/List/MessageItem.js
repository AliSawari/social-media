import React, { useContext, useEffect } from "react";
import { useGetUserId } from "../../../hooks/useGetUserId";
import moment from 'moment';
import VisibilitySensor from 'react-visibility-sensor-v2';
import { ChatContext } from '../../../context/providers/ChatProvider';
import { RiCheckFill, RiCheckDoubleLine } from 'react-icons/ri';
const MessageItem = ({ _id, message, sender, createdAt, fontSize, isSeen, chatId }) => {
  const { socket } = useContext(ChatContext);
  const time = moment(createdAt).format("h:mm a");
  const { id } = useGetUserId();
  const handleChangeVisibility = (isVisibility) => {
    if (isVisibility === true && isSeen == false && sender !== id) {
      socket.emit("message:seen", { id: _id, chatId, userId: sender });
    }
  };

  const renderSeen = () => {
    if (sender === id) {
      if (isSeen === true) {
        return <RiCheckDoubleLine className="text-lg text-yellow-300" />;
      }

      return <RiCheckFill className="text-lg text-gray-300" />;
    }

    return "";


  }
  return (
    <VisibilitySensor onChange={handleChangeVisibility}>
      <div
        className={`w-full  flex justify-${sender == id ? "end" : "start"
          }  my-12 `}
      >
        <div className={`${sender == id ? "bg-fuchsia-700" : "bg-violet-700"} p-5 rounded w-auto h-auto`}>
          <h3 className="font-main text-white mb-3" style={{ fontSize: `${fontSize}px` }}>{message}</h3>
          <div className="w-full flex gap-2">
            <p className="w-full font-main text-sm text-neutral-100" style={{ fontSize: `${fontSize - 5}px` }}>{time}</p>
            <span>{renderSeen()}</span>
          </div>
        </div>
      </div>
    </VisibilitySensor>
  );
};

export default MessageItem;
