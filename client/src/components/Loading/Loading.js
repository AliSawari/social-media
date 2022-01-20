import React from "react";

const Loading = () => {
  return (
    <div className="w-full h-screen bg-neutral-800 flex justify-center items-center">
      <div className="animate-spin w-8 h-8 text-white flex justify-center items-center font-main bg-violet-800 rounded">
          S
      </div>
    </div>
  );
};

export default Loading;
