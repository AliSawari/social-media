import React, { useEffect, useRef, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import SearchUserItem from "./SearchUserItem";
import Loading from "../../../components/Loading/Loading";
import httpClient from "../../../api/client";
const SearchBox = () => {
  const ref = useRef();
  const [state, setState] = useState("");
  const [data, setData] = useState(null);

  const handleSearchForm = async (e) => {
    try {
      e.preventDefault();
      const searchText = ref.current.value;
      setState(searchText);

      if (!searchText.length) {
        setState(null);
        return;
      }

      const {
        data: { data: users },
      } = await httpClient.get(`users/search/${searchText}`);
      setData(users);
    } catch (error) {}
  };

  const renderUsers = () => {
    if (data === null)
      return (
        <div className="w-full h-48">
          <Loading />
        </div>
      );

    if (!data.length) {
      return (
        <div className="w-full h-48 flex justify-center items-center">
          <p className="font-main text-violet-600">No users found</p>
        </div>
      );
    }

    return data.map((item) => <SearchUserItem key={item._id} {...item} />);
  };
  return (
    <div className="w-3/4 relative flex justify-end flex-col items-center">
      <form className="w-full flex justify-center" onSubmit={handleSearchForm}>
        <input
          type="text"
          className="w-3/4 h-9 outline-none px-3 rounded-l-2 font-main bg-neutral-800 text-white"
          placeholder="Search User"
          required
          onChange={handleSearchForm}
          value={state}
          ref={ref}
        />
        <button className="bg-violet-700 hover:bg-violet-800 transition text-center px-3 h-9  text-sm text-white font-main rounded">
          <IoSearchOutline fontSize={20} />
        </button>
      </form>

      {state && (
        <div className="w-3/4 z-50 h-auto mt-2 absolute top-12 bg-neutral-800 rounded shadow-md">
          {renderUsers()}
        </div>
      )}
    </div>
  );
};

export default SearchBox;
