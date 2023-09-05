import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Message = ({ label, toastMessage }) => {
  const tost = () => {
    toast(toastMessage);
  };

  return (
    <>
      <button type="button" className="btn btn-outline-primary" onClick={tost}>
        {label}
      </button>
      <ToastContainer />
    </>
  );
};

export default Message;
