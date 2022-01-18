import React from "react";

const SearchBox = () => {
  return (
    <div className="w-3/4">
      <form className="w-full flex justify-center">
        <input
          type="text"
          className="w-3/4 h-9 outline-none px-3 rounded-l-2 font-main bg-neutral-800 text-white"
          placeholder="Search User"
        />{" "}
        <button className="bg-violet-700 hover:bg-violet-800 transition text-center px-3 h-9  text-sm text-white font-main rounded">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBox;
