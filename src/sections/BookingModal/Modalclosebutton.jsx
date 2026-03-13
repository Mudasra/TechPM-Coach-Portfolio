// components/ModalCloseButton.jsx
import React from "react";

const ModalCloseButton = ({ onClose, disabled }) => (
  <button
    className="modal-close"
    onClick={onClose}
    disabled={disabled}
    aria-label="Close modal"
  >
    ✕
  </button>
);

export default ModalCloseButton;