// components/ModalCloseButton.jsx
import React from "react";

const ModalCloseButton = ({ onClick, disabled }) => (
  <button
    className="modal-close"
    onClick={onClick}
    disabled={disabled}
    aria-label="Close modal"
  >
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    >
      <line x1="1" y1="1" x2="9" y2="9" />
      <line x1="9" y1="1" x2="1" y2="9" />
    </svg>
  </button>
);

export default ModalCloseButton;