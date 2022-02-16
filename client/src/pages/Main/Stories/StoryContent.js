import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import UserItem from '../LeftSide/UserItem'
import Modal from '../../../components/Modal/Modal'
import httpClient from '../../../api/client';
import StoryReplayForm from './StoryReplayForm';
import StoryItemContent from './StoryItemContent';
import StoryContentSlider from './StoryContentSlider';
const StoryContent = ({ nextUser, prevUser }) => {
    const [searchParams] = useSearchParams();
    const userId = searchParams.get("story");
    const [stories, setStories] = useState([]);
    const [user, setUser] = useState(null);
    const [state, setState] = useState({});
    const navigate = useNavigate();
    let sliderRef;
    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await httpClient.get(`stories/all/${userId}`);
                setStories(data.stories);
                setUser(data.user);


            } catch (error) {
                console.log(error);
            }
        }

        if (!userId) {
            setStories([]);
            return;
        }

        fetchData();
    }, [userId]);


    const handleNextClick = () => {
        setState(true);
        sliderRef.slickNext();
    }



    const handlePrevClick = () => {
        setState(false);
        sliderRef.slickPrev();
        if (stories.length === 1) {
            prevUser(userId);
        }
    }


    const handleCloseModal = () => {
        navigate("/");
    }


    return <Modal show={stories.length} closeModal={handleCloseModal}>
        <div className='w-full flex justify-center flex-col items-center relative'>
            {stories.length && user !== null ? <>
                <div className='w-96'>
                    <UserItem {...user} />
                </div>
                <StoryContentSlider nextSlide={handleNextClick} prevSlide={handlePrevClick} nextUser={nextUser} stories={stories} />
                <StoryReplayForm />
            </> : <div className='w-96 h-96 bg-neutral-800 flex justify-center items-center text-white'>Loading</div>}
        </div>
    </Modal>
};

export default StoryContent;
