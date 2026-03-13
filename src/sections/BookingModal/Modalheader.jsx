// components/ModalHeader.jsx
import React from "react";

const TRUST_ITEMS = ["Custom Action Plan", "No Sales Pitch", "Instant Confirmation"];

const ModalHeader = () => (
  <div className="modal-header">
    <div className="modal-badge">
      <span className="modal-badge-dot" aria-hidden="true" />
      Free · No Strings Attached
    </div>

    <h2 className="modal-title" id="modal-title">
      Book Your <em>Free</em>
      <br />
      Strategy Call
    </h2>

    <p className="modal-subtitle">
      <strong>45 minutes.</strong> Custom roadmap. <strong>Zero pressure.</strong>
    </p>

    <div className="trust-strip" aria-label="Call features">
      {TRUST_ITEMS.map((t) => (
        <span key={t} className="trust-item">
          <span className="trust-check" aria-hidden="true">◆</span>
          {t}
        </span>
      ))}
    </div>
  </div>
);

export default ModalHeader;