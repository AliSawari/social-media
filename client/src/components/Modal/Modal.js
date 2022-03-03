import React from "react";
import ModalHeader from "./ModalHeader";
import { motion } from "framer-motion";
const Modal = ({ children, title, show, closeModal, size = "md" }) => {
  return show ? (
    <div className="z-50 fixed top-0 left-0 mauto w-full h-screen flex bg-gray-100/90   justify-center items-start">
      <motion.div
        animate={{ scale: 1.1 }}
        initial={{ scale: 0.5 }}
        className={`${size === "md" ? "w-3/12" : "w-2/12"}  px-5 py-6 bg-gray-300 rounded mt-20`}
      >
        <ModalHeader title={title} handleCloseModal={closeModal} />
        <div className="w-full h-auto py-5">{children}</div>
      </motion.div>
    </div>
  ) : null;
};

export default Modal;
