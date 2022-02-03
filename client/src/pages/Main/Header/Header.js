import React from "react";
import LeftNavbar from "./LeftNavbar";
import RightNavbar from "./RightNavbar";
import SearchBox from "./SearchBox";

const Header = () => {
  return (
    <header className="w-full relative h-16  z-40 pt-5  flex justify-center">
      <LeftNavbar />
      <SearchBox />
      <RightNavbar />
    </header>
  );
};

export default Header;
