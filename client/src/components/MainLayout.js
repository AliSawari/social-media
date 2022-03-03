import React from "react";

const MainLayout = ({ children }) => {
  return <div className="w-full h-auto justify-between gap-6 flex">{children}</div>;
};

export default MainLayout;
