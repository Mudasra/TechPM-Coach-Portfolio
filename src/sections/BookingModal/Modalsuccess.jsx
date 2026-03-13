import React from "react";

const ModalSuccess = () => (
  <div className="modal-success">
    <div className="success-icon-wrap" aria-hidden="true">
      <span className="success-checkmark">✦</span>
    </div>
    <h3 className="success-title">You're confirmed.</h3>
    <p className="success-sub">
      Check your inbox — a calendar link is on its way. Redirecting you now…
    </p>
  </div>
);

export default ModalSuccess;