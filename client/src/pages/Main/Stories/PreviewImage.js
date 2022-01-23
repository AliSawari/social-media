import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";

const PreviewImage = ({ handleClose, image }) => {
  return (
    <div className="w-full h-auto">
      {image ? (
        <div className="w-full relative">
          <button
            className="absolute top-3 right-3 text-violet-600"
            onClick={handleClose}
          >
            <AiFillCloseCircle fontSize={23} />
          </button>
          <img src={image} alt="profile" className="w-full" />
        </div>
      ) : null}
    </div>
  );
};

export default PreviewImage;
