import React, { useState, useContext } from "react";
import Modal from "../../../components/Modal/Modal";
import AddStoryForm from "./AddStoryForm";
import { UserContext } from '../../../context/providers/UserProvider'
import { AiFillPlusCircle } from "react-icons/ai";
const AddStory = () => {
  const { state: { data } } = useContext(UserContext);
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
            <div className="absolute cursor-pointer top-0 left-0 flex justify-center items-center w-20 h-20  z-50" onClick={toggleShowModal}>
              <AiFillPlusCircle fontSize={30} className="text-white" />
            </div>
            <img
              src={`http://localhost:4000/public/images/${data.profile}`}
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
