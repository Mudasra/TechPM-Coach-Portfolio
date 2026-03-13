import React from "react";

const TRUST_PILLS = ["✓ 100% Free", "✓ Personalized Plan", "✓ No Pitch"];

const ModalHeader = () => (
  <div className="modal-header">
    <div className="modal-eyebrow" aria-hidden="true">
      <div className="me-line" />
      <span className="me-text">Free · No Obligation</span>
    </div>

    <h2 id="modal-title" className="modal-title">
      Book Your Free <em>Career</em>
      <br />
      Strategy Call
    </h2>

    <p className="modal-subtitle">
      45 minutes · Custom action plan · Zero sales pressure
    </p>

    <div className="modal-trust-pills" aria-label="Call benefits">
      {TRUST_PILLS.map((t) => (
        <span key={t} className="mtp">{t}</span>
      ))}
    </div>
  </div>
);

export default ModalHeader;