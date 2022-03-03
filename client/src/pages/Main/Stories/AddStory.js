import React, { useState, useContext, useEffect } from "react";
import Modal from "../../../components/Modal/Modal";
import AddStoryForm from "./AddStoryForm";
import { Link } from 'react-router-dom';
import { UserContext } from '../../../context/providers/UserProvider'
import { AiOutlinePlus, AiFillEye } from "react-icons/ai";
import { useGetUserId } from "../../../hooks/useGetUserId";
const AddStory = ({ userStories }) => {


  const { id } = useGetUserId();
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

      <div className="h-32 rounded relative flex justify-center items-center">
        {data && <div className="z-30 flex justify-center flex-col relative items-center">

          <div className="relative">
              <AiOutlinePlus fontSize={25} className="text-gray-700 text-center w-full" onClick={toggleShowModal} />
            <div className="cursor-pointer gap-1 top-0 left-0 flex flex-col justify-center items-center w-20 h-20  z-50" >
              {userStories.length ? <Link to={`/?story=${id}`}>
                <AiFillEye fontSize={25} className="text-gray-700" />
              </Link> : []}
              <h3 className="py-2 text-sm text-center font-main text-gray-700">Your Story</h3>
            </div>
          </div>
        </div>}
      </div>
    </>
  );
};

export default AddStory;
