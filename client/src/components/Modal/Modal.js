import React from "react";
import ModalHeader from "./ModalHeader";
import { motion } from "framer-motion";
const Modal = ({ children, title, show, closeModal }) => {
  return show ? (
    <div className="z-50 fixed top-0 left-0 w-full h-screen flex bg-neutral-800/90   justify-center items-center">
      <motion.div
        animate={{ scale: 1.1 }}
        initial={{ scale: 0.5 }}
        className="w-1/3 px-5 py-6 bg-neutral-900 rounded"
      >
        <ModalHeader title={title} handleCloseModal={closeModal} />
        <div className="w-full py-5">{children}</div>
      </motion.div>
    </div>
  ) : null;
};

export default Modal;
