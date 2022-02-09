import React from "react";
import LeftNavbar from "./LeftNavbar";
import RightNavbar from "./RightNavbar";
import SearchBox from "./SearchBox";

const Header = () => {
  return (
    <div className="fixed z-50 bg-neutral-800 w-full">
      <header className="w-full relative  h-20  z-40 pt-5  flex justify-center items-center">
        <LeftNavbar />
        <SearchBox />
        <RightNavbar />
      </header>
    </div>
  );
};

export default Header;
