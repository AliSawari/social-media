import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import CropStoryImage from "./CropStoryImage";

const PreviewImage = ({ handleClose, image }) => {
  return image ? (
    <div className="w-full h-auto">
      {image ? (
        <div className="w-full relative">
          <CropStoryImage src={image} />
        </div>
      ) : null}
    </div>
  ) : null;
};

export default PreviewImage;
