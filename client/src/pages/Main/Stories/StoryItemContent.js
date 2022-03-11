import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import moment from 'moment';
import StoryReplayForm from './StoryReplayForm';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import StoryViews from './StoryViews';
import { useGetUserId } from '../../../hooks/useGetUserId';
import VisibilitySensor from 'react-visibility-sensor-v2';
import httpClient from '../../../api/client';
import StoryViewsList from './StoryViewsList';
const StoryItemContent = ({ image, createdAt, user, _id, views }) => {
    const [show, setShow] = useState(false);
    const start = moment(createdAt);
    const end = moment(new Date());
    const duration = moment.duration(end.diff(start));
    const { id } = useGetUserId();
    const renderDuration = () => {
        if (duration.asMinutes() > 60)
            return `${Math.floor(duration.asHours())} h`;

        return `${Math.floor(duration.asMinutes())} m`;
    }

    const handleChangeVisibility = async () => {
        try {
            const isViewAlreadyExists = views.find(view => view.user._id === id);
            console.log(id !== user._id && !isViewAlreadyExists);
            if (id !== user._id && !isViewAlreadyExists) {
                await httpClient.get(`stories/add-view/${id}/${_id}`);
            }
        } catch (error) {
            console.log(error);
        }

    }

    const handleToggleShow = () => {
        setShow(prevShow => !prevShow)
    }

    const durationText = renderDuration();
    return <VisibilitySensor onChange={handleChangeVisibility}>
        <div className='w-full h-auto flex justify-center' on>
            <StoryViews show={user._id === id} views={views} toggle={handleToggleShow} />
            <StoryViewsList show={show} views={views} toggle={handleToggleShow} />
            <span className='absolute z-40 bg-white/50 text-sm px-3 rounded-lg font-main left-2 top-2'>{durationText}</span>
            <LazyLoadImage src={`http://localhost:4000/public/images/${image}`}
                style={{ width: "100%", height: "35rem", objectFit: "cover" }}
                placeholder={<div className="p-3"><Skeleton className="w-full h-100" /></div>}
                className="w-full rounded shadow-md"
            />
            <StoryReplayForm receiver={user._id} id={_id} />
        </div>
    </VisibilitySensor>
};

export default StoryItemContent;
