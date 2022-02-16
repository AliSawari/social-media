import React, { useRef } from 'react'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import StoryItemContent from './StoryItemContent';

const StoryContentSlider = ({nextSlide , prevSlide , nextUser , stories}) => {
    const [searchParams] = useSearchParams();
    const userId = searchParams.get("story");
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

    return (
        <>
            <button onClick={nextSlide} className='text-violet-500 absolute top-0 right-10 bottom-0 m-auto'>
                <AiOutlineRight fontSize={25} />
            </button>
            <button onClick={prevSlide} className='text-violet-500 absolute top-0 left-10 bottom-0 m-auto'>
                <AiOutlineLeft fontSize={25} />
            </button>

            <Slider {...settings} className="w-96" ref={c => sliderRef = c}>
                {stories.map(story => (
                    <StoryItemContent key={story._id} {...story} />
                ))}
            </Slider>
        </>
    )
}

export default StoryContentSlider