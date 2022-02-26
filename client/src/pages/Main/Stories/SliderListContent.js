import React, { useEffect, useState } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom';
import httpClient from '../../../api/client';
import Modal from '../../../components/Modal/Modal';
import UserItem from '../LeftSide/UserItem';
import StoryContentSlider from './StoryContentSlider';
import StoryLoading from '../../../components/SkeletonLoading/StoryLoading';
const SliderListContent = ({ users }) => {
    const [searchParams] = useSearchParams();
    const [stories, setStories] = useState([]);
    const [user, setUser] = useState(null);
    const id = searchParams.get("story");
    const navigate = useNavigate();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: { user, stories } } = await httpClient.get(`stories/all/${id}`);
                setUser(user);
                setStories(stories);
            } catch (error) {
                console.log(error);
            }
        }

        if (id !== null)
            fetchData();


    }, [id]);

    const handleNextUserStories = () => {
        if (users.length === 1) {
            navigate("/");
            return;
        }


        const userIndex = users.findIndex(user => user._id === id);
        if (userIndex === users.length - 1) {
            navigate("/");
            return;
        }
        const { _id: nextUserId } = users[userIndex + 1];
        navigate(`/?story=${nextUserId}`);
    };

    const handlePrevUserStories = () => {


        const userIndex = users.findIndex(user => user._id === id);

        if (userIndex === 0) {
            navigate("/");
            return;
        }

        const { _id: newUserId } = users[userIndex - 1];
        navigate(`/?story=${newUserId}`);
    }

    const handleCloseModal = () => {
        navigate("/");
    }
    return (
        <Modal show={id !== null} title="Story" closeModal={handleCloseModal}>
            {user === null ? <StoryLoading /> : <>
                <UserItem {...user} />
                <div className='flex justify-center'>
                    <StoryContentSlider prevUser={handlePrevUserStories} nextUser={handleNextUserStories} stories={stories} />
                </div>
            </>}

        </Modal>
    )
}

export default React.memo(SliderListContent);