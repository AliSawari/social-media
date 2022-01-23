import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

const ModalHeader = ({ handleCloseModal, title }) => {
  return (
    <div className="w-full  flex  justify-between">
      <h3 className="font-main text-violet-600">{title}</h3>
      <button className="text-violet-500" onClick={handleCloseModal}>
        <AiOutlineCloseCircle fontSize={23} />
      </button>
    </div>
  );
};

export default ModalHeader;
