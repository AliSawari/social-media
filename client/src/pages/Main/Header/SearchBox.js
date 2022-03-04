import React, { useRef, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import SearchUserItem from "./SearchUserItem";
import httpClient from "../../../api/client";
import UserItemLoading from "../../../components/SkeletonLoading/UserItemLoading";
import { motion } from "framer-motion";
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
    } catch (error) { }
  };

  const renderUsers = () => {
    if (data === null)
      return (
        <div className="w-full h-auto p-5">
          <UserItemLoading count={3} />
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
    <div className="w-1/2 relative flex justify-end flex-col items-center py-5">
      <form className="w-full flex justify-center box-border" onSubmit={handleSearchForm}>
        <div className="w-full relative">
          <input
            type="text"
            className="w-full h-10 outline-none px-3 rounded font-main bg-gray-100 text-gray-700 text-sm box-border"
            placeholder="Search ...."
            required
            onChange={handleSearchForm}
            value={state}
            ref={ref}
          />
          <button className="bg-violet-700 absolute right-0 top-0 hover:bg-violet-800 transition text-center px-3 h-10  text-sm text-white font-main rounded">
            <IoSearchOutline fontSize={18} />
          </button>
        </div>
      </form>

      {state && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="w-full z-50 h-auto mt-2 absolute top-12 bg-gray-100 rounded">
          {renderUsers()}
        </motion.div>
      )}
    </div>
  );
};

export default SearchBox;
