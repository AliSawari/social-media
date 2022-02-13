import React, { useState } from "react";
import { IoIosMore } from "react-icons/io";
import { Link } from "react-router-dom";
import { useShowUserProfile } from '../../../hooks/useShowUserProfile'
import Modal from '../../../components/Modal/Modal';
import PostDropdownItem from './PostItemOptionDropdown'
import ReportModal from "./ReportModal";
import { toast } from "react-toastify";
import SharePostModal from "./SharePostModal";
const PostItemHeader = ({ user, link }) => {
  const mainProfile = useShowUserProfile(user.profile);
  const [show, setShow] = useState(false);
  const [showReportModal, setShowReportModal] = useState(false);
  const [showSharePostModal, setShowSharePostModal] = useState(false);


  const handleTogglePostItemDropdown = () => {
    setShow(show => !show);
  }

  const handleShowReportModal = () => {
    setShow(false);
    setShowReportModal(true);
  }


  const handleHideReportModal = () => {
    setShowReportModal(false);
  }



  const handleShowSharePostModal = () => {
    setShow(false);
    setShowSharePostModal(true);
  }


  const handleHideSharePostModal = () => {
    setShowSharePostModal(false);
  }



  const handleCopyPostLink = () => {
    navigator.clipboard.writeText(`http://localhost:3000/p/${link}`);
    toast.dark("Link copied to clipboard", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    });
  }

  return (
    <div className="w-full flex justify-between mb-4">
      <Modal show={show} closeModal={handleTogglePostItemDropdown} size="xs" title="Post">
        <ul>
          <PostDropdownItem title="Report" type="button" clickButton={handleShowReportModal} />
          <PostDropdownItem title="Copy Link" type="button" clickButton={handleCopyPostLink} />
          <PostDropdownItem title="Share to ..." type="button" clickButton={handleShowSharePostModal} />
          <PostDropdownItem title="Cancel" type="button" clickButton={handleTogglePostItemDropdown} />
        </ul>
      </Modal>
      <ReportModal show={showReportModal} closeReportModal={handleHideReportModal} />
      <SharePostModal link={link} show={showSharePostModal} closeReportModal={handleHideSharePostModal} />


      <div className="flex gap-3 items-center">
        <img
          src={mainProfile}
          width="42px"
          height="42px"
          alt={user.fullname}
          className="rounded-lg h-10 w-10 object-cover"
        />
        <Link to={`/@${user.username}`}>
          <h3 className="text-white font-main">{user.fullname}</h3>
        </Link>
      </div>
      <div className="flex items-center">
        <button className="text-violet-500 text-xl" onClick={handleTogglePostItemDropdown}>
          <IoIosMore />
        </button>
      </div>
    </div>
  );
};

export default PostItemHeader;
