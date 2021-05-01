import React, { useContext } from "react";
import "../css/modal.css";
import { ComponentContext, useModal } from "../contexts/component_context";

const Modal = () => {
  const { modal_state, set_modal_state } = useContext(ComponentContext);
  const closeModal = useModal("hidden");
  return (
    <div>
      {modal_state.visibilty === "hidden" ? (
        ""
      ) : (
        <div onClick={closeModal} className="modal_overlay">
          <div>
            <div className="modal">
              <h1>modal title</h1>
              <p>{modal_state.content}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
