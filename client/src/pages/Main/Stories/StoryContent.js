import React, { useState, useEffect } from 'react';
import { useSearchParams  , useNavigate} from 'react-router-dom'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import UserItem from '../LeftSide/UserItem'
import Modal from '../../../components/Modal/Modal'
import httpClient from '../../../api/client';
import StoryReplayForm from './StoryReplayForm';
import StoryItemContent from './StoryItemContent';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
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

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        appendDots: dots => {

            return <div
                style={{ top: "10px" }}
            >
                <ul className='slick-item'> {dots} </ul>
            </div>
        },
        customPaging: i => (
            <div
                style={{
                    width: (24 / stories.length - 1) + "rem",
                    height: "2px",
                    background: "white"
                }}
            >

            </div>
        ),
        beforeChange: (prev, next) => {
            if (prev === stories.length - 1 && state === true) {
                nextUser(userId);
            }
        }
    };

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
                <button onClick={handleNextClick} className='text-violet-500 absolute top-0 right-10 bottom-0 m-auto'>
                    <AiOutlineRight fontSize={25} />
                </button>
                <button onClick={handlePrevClick} className='text-violet-500 absolute top-0 left-10 bottom-0 m-auto'>
                    <AiOutlineLeft fontSize={25} />
                </button>

                <Slider {...settings} className="w-96" ref={c => sliderRef = c}>
                    {stories.map(story => (
                        <StoryItemContent key={story._id} {...story} />
                    ))}
                </Slider>
                <StoryReplayForm />
            </> : <div className='w-96 h-96 bg-neutral-800 flex justify-center items-center text-white'>Loading</div>}
        </div>
    </Modal>
};

export default StoryContent;
