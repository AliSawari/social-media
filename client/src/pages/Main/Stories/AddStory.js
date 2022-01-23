import React, { useState } from "react";
import { BiMessageSquareAdd } from "react-icons/bi";
import Modal from "../../../components/Modal/Modal";
import AddStoryForm from "./AddStoryForm";
const AddStory = () => {
  const [state, setState] = useState(true);
  const toggleShowModal = () => {
    setState((prevState) => !prevState);
  };
  return (
    <>
      <Modal show={state} closeModal={toggleShowModal} title="Add Story">
        <AddStoryForm closeModal={toggleShowModal} />
      </Modal>
      <div className="px-20 h-96 rounded relative flex justify-center items-center bg-violet-700">
        <div className="z-40 w-100 flex justify-center flex-col items-center">
          <button onClick={toggleShowModal}>
            <BiMessageSquareAdd className="text-4xl text-white" />
            <h3 className="py-2 text-center font-main text-white">Add Story</h3>
          </button>
        </div>
      </div>
    </>
  );
};

export default AddStory;
