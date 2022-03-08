import React from "react";
import LoadingImage from "./LoadingImage";

const Loading = () => {
  return (
    <div className="w-full h-screen bg-gray-200 dark:bg-neutral-800 flex justify-center items-center">
      <LoadingImage />
    </div>
  );
};

export default Loading;
