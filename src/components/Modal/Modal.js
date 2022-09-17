import React, { useState } from "react";

import "./Modal.css";
import Form from "../Form/Form";

const Modal = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Asztalfoglalás
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay" />
          <div className="modal-content">
            <Form />
            <button className="close-modal" onClick={toggleModal}>
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
