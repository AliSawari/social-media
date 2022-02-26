import React, { useState, useContext } from "react";
import Modal from "../../../components/Modal/Modal";
import AddStoryForm from "./AddStoryForm";
import { UserContext } from '../../../context/providers/UserProvider'
import { AiFillPlusCircle, AiFillEye } from "react-icons/ai";
import { useShowUserProfile } from "../../../hooks/useShowUserProfile";
const AddStory = ({ userStories }) => {

  const { state: { data } } = useContext(UserContext);
  const mainProfile = useShowUserProfile(data?.profile);
  const [state, setState] = useState(false);
  const toggleShowModal = () => {
    setState((prevState) => !prevState);
  };

  return (
    <>
      <Modal show={state} closeModal={toggleShowModal} title="Add Story">
        <AddStoryForm closeModal={toggleShowModal} />
      </Modal>
      <div className="px-3 h-32 rounded relative flex justify-center items-center">
        {data && <div className="z-30 flex justify-center flex-col relative items-center">

          <div className="relative">
            <div className="absolute cursor-pointer gap-1 top-0 left-0 flex flex-col justify-center items-center w-20 h-20  z-50" >
              <AiFillPlusCircle fontSize={25} className="text-white" onClick={toggleShowModal} />
              <AiFillEye fontSize={25} className="text-white" />
            </div>
            <img
              src={mainProfile}
              alt="profile"
              className="rounded-full opacity-50 p-1 bg-gradient-to-l from-violet-800 to-violet-900 w-20 h-20 object-cover"
            />
          </div>
          <h3 className="py-2 text-sm text-center font-main text-white">Your Story</h3>
        </div>}
      </div>
    </>
  );
};

export default AddStory;
