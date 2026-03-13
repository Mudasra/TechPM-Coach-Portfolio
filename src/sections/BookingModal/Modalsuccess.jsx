// components/ModalSuccess.jsx
import React from "react";

const ModalSuccess = () => (
  <div className="success-state" aria-live="polite">
    <div className="success-ring" aria-hidden="true">✦</div>
    <div className="success-title">You're Confirmed</div>
    <p className="success-sub">
      Check your inbox — a confirmation with your calendar link is on the way.
      <br />
      <span className="success-gold">Redirecting you now…</span>
    </p>
  </div>
);

export default ModalSuccess;