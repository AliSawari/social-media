import React from "react";
import LeftNavbar from "./LeftNavbar";
import RightNavbar from "./RightNavbar";
import SearchBox from "./SearchBox";

const Header = () => {
  return (
    <header className="w-full py-5 px-3 flex justify-between">
      <LeftNavbar />
      <SearchBox />
      <RightNavbar />
    </header>
  );
};

export default Header;
