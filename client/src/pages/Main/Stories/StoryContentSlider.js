import React, { useRef, useState } from 'react'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import StoryItemContent from './StoryItemContent';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const StoryContentSlider = ({ prevUser , nextUser, stories }) => {
    const [state, setState] = useState(false);
    let sliderRef = useRef();
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
        customPaging: () => (
            <div
                style={{
                    width: (24 / stories.length - 1) + "rem",
                    height: "2px",
                    background: "white"
                }}
            >

            </div>
        ),
        beforeChange: (prevIndex) => {
            if (state === true) {
                if (prevIndex === stories.length - 1) {
                    nextUser();
                }
            } else {
                if (prevIndex === 0) {
                    prevUser();
                }
            }

        }
    };

    const handleClickNextStory = () => {
        setState(true);
        sliderRef.slickNext();
    }


    const handleClickPrevStory = () => {
        setState(false);
        sliderRef.slickPrev();
    }

    return (
        <>
            <button onClick={handleClickNextStory} className='text-violet-500 absolute top-0 z-40 right-3 bottom-0 m-auto'>
                <AiOutlineRight fontSize={25} />
            </button>


            <Slider {...settings} className="w-full relative" ref={c => sliderRef = c}>
                {stories.map(story => (
                    <StoryItemContent   key={story._id} {...story} />
                ))}
            </Slider>

            <button onClick={handleClickPrevStory} className='text-violet-500 absolute top-0 z-40 left-3 bottom-0 m-auto'>
                <AiOutlineLeft fontSize={25} />
            </button>
        </>
    )
}

export default StoryContentSlider