import React, { useEffect, useState } from 'react';
import httpClient from '../../../api/client';
import Slider from "react-slick";
import { useGetUserId } from '../../../hooks/useGetUserId'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ChatBackgroundItem from './ChatBackgroundItem';
const ChatBackground = () => {

    const [backgrounds, setBackgrounds] = useState([]);
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    const { id } = useGetUserId();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: backgrounds } = await httpClient.get(`backgrounds/list/${id}`);
                setBackgrounds(backgrounds);
            } catch (error) {
                console.log(error);
            }
        }

        fetchData();
    }, []);
    return (
        <div className='w-full h-auto'>
            <h3 className='font-main text-violet-500 mb-3 pl-7'>Chat Background</h3>
            <Slider {...settings} className="px-10">
                {backgrounds.map(background => (
                    <ChatBackgroundItem key={background._id} {...background} />
                ))}
            </Slider>
        </div>
    )
}

export default ChatBackground