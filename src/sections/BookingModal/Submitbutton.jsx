// components/SubmitButton.jsx
import React from "react";

const SubmitButton = ({ isLoading }) => (
  <button
    type="submit"
    disabled={isLoading}
    className="btn-modal-submit"
    aria-label="Submit and book your free strategy call"
  >
    {isLoading ? (
      <>
        <div className="spinner" aria-hidden="true" />
        Securing Your Spot…
      </>
    ) : (
      <>
        Confirm My Free Call
        <span className="submit-arrow" aria-hidden="true">→</span>
      </>
    )}
  </button>
);

export default SubmitButton;