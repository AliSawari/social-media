import React, { useEffect, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import UserItem from "./UserItem";
import httpClient from "../../../api/client";
import { useGetUserId } from "../../../hooks/useGetUserId";
import Loading from "../../../components/Loading/Loading";
const Followers = () => {
  const { id } = useGetUserId();
  const [state, setState] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await httpClient.get(`users/followers/${id}`);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  const data = [
    {
      id: 1,
      fullname: "HamidrezaRamzani",
      online: true,
      profile: "https://picsum.photos/200/200?grayscale",
    },

    {
      id: 2,
      fullname: "HamidrezaRamzani",
      online: true,
      profile: "https://picsum.photos/200/200?grayscale",
    },

    {
      id: 3,
      fullname: "HamidrezaRamzani",
      online: true,
      profile: "https://picsum.photos/200/200?grayscale",
    },

    {
      id: 4,
      fullname: "HamidrezaRamzani",
      online: false,
      profile: "https://picsum.photos/200/200?grayscale",
    },
  ];

  const renderUsers = () => {
    if (state === null)
      return (
        <div className="w-full flex justify-between items-center">
          <Loading />
        </div>
      );

    return state.map((item) => <UserItem key={item.id} {...item} />);
  };
  return (
    <div className="w-full h-auto mt-4 pb-3 rounded bg-neutral-800 shadow-sm">
      <div className="flex justify-between p-4 bg-gradient-to-l from-violet-800 to-violet-900">
        <h3 className="font-main text-white">Followers</h3>
        <button className="text-white text-xl">
          <BsThreeDots />
        </button>
      </div>
      {renderUsers()}
    </div>
  );
};

export default Followers;
