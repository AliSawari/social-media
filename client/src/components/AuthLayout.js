import React from "react";

const AuthLayout = ({ title, description, children }) => {
  return (
    <div className="w-full h-screen bg-gray-200 flex justify-center items-center">
      <div className="w-2/12  shadow-sm rounded p-5 h-3/6">
        <h1 className="text-center pt-8 font-main text-2xl py-3  text-violet-500">
          {title}
        </h1>
        <p className="text-center text-sm text-gray-600 font-main">
          {description}
        </p>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
