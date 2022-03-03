import React, { useState } from "react";
import Modal from "../../../components/Modal/Modal";
import UserInfo from '../LeftSide/UserItem';
const ProfileFollows = ({ followers, followings }) => {
  const [showFollowerModal, setShowFollowerModal] = useState(false);
  const [showFollowingModal, setShowFollowingModal] = useState(false);


  const handleClickToggleShowFollowersModal = () => {
    setShowFollowerModal(prevState => !prevState)
  }


  const handleClickToggleShowFollowingsModal = () => {
    setShowFollowingModal(prevState => !prevState)
  }



  return (
    <div className="w-full flex justify-center  py-3 gap-8 text-center">
      <Modal show={showFollowerModal} title="Followers" size="sm" closeModal={handleClickToggleShowFollowersModal}>
        {followers.map(follow => (
          <UserInfo key={follow._id} {...follow.user} />
        ))}
      </Modal>

      <Modal show={showFollowingModal} title="Followings" size="sm" closeModal={handleClickToggleShowFollowingsModal}>
        {followings.map(follow => (
          <UserInfo key={follow._id} {...follow.following} />
        ))}
      </Modal>
      <div onClick={handleClickToggleShowFollowersModal} className="cursor-pointer">
        <h3 className="text-md font-main text-black">{followers.length}</h3>
        <span className="text-sm font-main text-violet-500">Followers</span>
      </div>
      <div onClick={handleClickToggleShowFollowingsModal} className="cursor-pointer">
        <h3 className="text-md font-main text-black">{followings.length}</h3>
        <span className="text-sm font-main text-violet-500">Followings</span>
      </div>
    </div>
  );
};

export default ProfileFollows;
