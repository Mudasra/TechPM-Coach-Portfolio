import React from "react";

const RedirectNotice = ({ visible, countdown }) => (
  <div
    className="text-center"
    style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(12px)",
      transition: "opacity 0.7s ease 0.7s, transform 0.7s ease 0.7s",
    }}
  >
    {countdown > 0 && (
      <p style={{ fontSize: "0.65rem", color: "#4A5265", marginTop: "0.85rem", letterSpacing: "0.1em" }}>
        Redirecting in {countdown}s
      </p>
    )}
  </div>
);

export default RedirectNotice;