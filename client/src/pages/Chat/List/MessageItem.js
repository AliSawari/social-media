import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { useGetUserId } from "../../../hooks/useGetUserId";
import moment from 'moment';
import VisibilitySensor from 'react-visibility-sensor-v2';
import { ChatContext } from '../../../context/providers/ChatProvider';
import { RiCheckFill, RiCheckDoubleLine } from 'react-icons/ri';
import { getSetSeenMessage } from "../../../context/actions/ChatActions";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
const MessageItem = ({ _id, message, sender, createdAt, fontSize, isSeen, chatId, story }) => {
  const { socket } = useContext(ChatContext);
  const time = moment(createdAt).format("h:mm a");
  const { id } = useGetUserId();
  const { dispatch } = useContext(ChatContext);
  const handleChangeVisibility = (isVisibility) => {
    if (isVisibility === true && isSeen == false && sender !== id) {
      dispatch(getSetSeenMessage(chatId, _id));
      socket.emit("message:seen", { id: _id, chatId, sender });
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
          {story !== null ? <Link to={`/?story=${story.user}`}>
            <div className="w-72 h-96 mb-3">
              <LazyLoadImage src={`http://localhost:4000/public/images/${story.image}`}
                placeholder={<div className="p-3"><Skeleton className="w-full h-full" /></div>}
                className="w-full h-full object-cover rounded shadow-md"
              />
            </div>
          </Link> : ""}
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
