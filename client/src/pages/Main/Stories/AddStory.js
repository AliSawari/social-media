import React, { useState, useContext, useEffect } from "react";
import Modal from "../../../components/Modal/Modal";
import AddStoryForm from "./AddStoryForm";
import { Link } from 'react-router-dom';
import { UserContext } from '../../../context/providers/UserProvider'
import { AiOutlinePlus, AiFillEye } from "react-icons/ai";
import { useGetUserId } from "../../../hooks/useGetUserId";
import { useShowUserProfile } from "../../../hooks/useShowUserProfile";
const AddStory = ({ userStories }) => {


  const { id } = useGetUserId();
  const { state: { data } } = useContext(UserContext);
  const [state, setState] = useState(false);
  const mainProfile = useShowUserProfile(data?.profile);
  const toggleShowModal = () => {
    setState((prevState) => !prevState);
  };



  return (
    <>
      <Modal show={state} closeModal={toggleShowModal} title="Add Story">
        <AddStoryForm closeModal={toggleShowModal} />
      </Modal>


      <div className="h-32 px-3 rounded relative flex justify-center items-center">
        <div className="z-30 flex justify-center flex-col items-center">
          <div className="relative">
            <Link to={`?story=${id}`}>
              <img
                src={mainProfile}
                alt="profile"
                width={50}
                height={50}
                className={`rounded-full w-20 h-20 object-cover ${userStories.length ? 'p-1 bg-gradient-to-l from-violet-800 to-violet-900' : ''}`}
              />
            </Link>
            <AiOutlinePlus fontSize={25} className="text-center absolute bottom-0 right-1 rounded-full bg-violet-700 text-white cursor-pointer" onClick={toggleShowModal} />
          </div>
          <h3 className="py-2 text-sm text-center font-main text-gray-700">{data?.fullname}</h3>
        </div>

      </div>
    </>
  );
};

export default AddStory;
