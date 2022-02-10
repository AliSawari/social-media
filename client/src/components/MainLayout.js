import React from "react";

const MainLayout = ({ children }) => {
  return <div className="w-full h-auto justify-between py-8 px-6 gap-6 flex">{children}</div>;
};

export default MainLayout;
