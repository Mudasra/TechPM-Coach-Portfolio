// components/SubmitButton.jsx
import React from "react";

const SubmitButton = ({ isLoading }) => (
  <button
    type="submit"
    disabled={isLoading}
    className="btn-submit"
    aria-label="Confirm and book your free strategy call"
  >
    {isLoading ? (
      <>
        <svg
          className="spin"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <circle
            cx="12" cy="12" r="10"
            stroke="currentColor" strokeWidth="3" strokeOpacity="0.25"
          />
          <path
            d="M12 2a10 10 0 0 1 10 10"
            stroke="currentColor" strokeWidth="3" strokeLinecap="round"
          />
        </svg>
        Securing Your Spot…
      </>
    ) : (
      <>
        Confirm My Free Strategy Call
        <span className="btn-submit-arrow" aria-hidden="true">→</span>
      </>
    )}
  </button>
);

export default SubmitButton;