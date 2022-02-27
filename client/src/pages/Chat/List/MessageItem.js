import React from "react";
import { useGetUserId } from "../../../hooks/useGetUserId";
import moment from 'moment';
const MessageItem = ({ message, sender, createdAt, fontSize }) => {
  const now = moment(new Date());
  const end = moment(createdAt);
  const duration = moment.duration(now.diff(end));
  const time = `${Math.floor(duration.asMinutes())} min ago`
  const { id } = useGetUserId();
  return (
    <div
      className={`w-full  flex justify-${sender._id == id ? "end" : "start"
        }  my-12 `}
    >
      <div className={`${sender._id == id ? "bg-fuchsia-700" : "bg-violet-700"} p-5 rounded w-auto h-auto`}>
        <h3 className="font-main text-white mb-3" style={{ fontSize: `${fontSize}px` }}>{message}</h3>
        <p className="w-full font-main text-sm text-neutral-100" style={{ fontSize: `${fontSize - 5}px` }}>{time}</p>
      </div>
    </div>
  );
};

export default MessageItem;
