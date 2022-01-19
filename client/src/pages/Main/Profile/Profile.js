import React from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="w-1/6 bg-neutral-800 shadow-sm rounded h-auto overflow-hidden">
      <div className="bg-gradient-to-l from-violet-800 to-violet-900 w-full h-40 relative">
        <div className="absolute -bottom-60 h-auto gap-2 w-full flex flex-col items-center">
          <img
            src="https://picsum.photos/200/200?grayscale"
            width={156}
            className="rounded-full"
            height={156}
            alt=""
          />
          <h1 className="text-white font-main m-0 p-0">Hamidreza Ramzani</h1>
          <p className="text-violet-500 text-sm font-main m-0 p-0">
            Anim excepteur officia esse aute ea duis.
          </p>
          <div className="w-full flex justify-center  py-3 gap-8 text-center">
            <div>
              <h3 className="text-xl font-main text-white">200</h3>
              <span className="text-md font-main text-violet-500">
                Followers
              </span>
            </div>

            <div>
              <h3 className="text-xl font-main text-white">8K</h3>
              <span className="text-md font-main text-violet-500">
                Followings
              </span>
            </div>
          </div>

          <div className="w-5/6 flex ">
            <Link
              to="/"
              className="transition w-full border flex p-2 justify-center items-center gap-2 font-main text-violet-500 border-violet-500 hover:bg-violet-700 hover:text-white "
            >
              <FaPlus /> Add Post
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
