import React from "react";

const PrepItem = ({ label, desc }) => (
  <div
    style={{
      border: "1px solid rgba(255,255,255,0.05)",
      borderRadius: 3,
      padding: "1.1rem 1.25rem",
      background: "rgba(255,255,255,0.015)",
      position: "relative",
      overflow: "hidden",
    }}
    onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(212,175,55,0.18)")}
    onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)")}
  >
    {/* Left accent line */}
    <div
      style={{
        position: "absolute", left: 0, top: 0, bottom: 0, width: 2,
        background: "linear-gradient(180deg, #D4AF37, transparent)",
      }}
    />
    <p style={{ fontSize: "0.82rem", fontWeight: 500, color: "#C9A84C", marginBottom: "0.35rem", letterSpacing: "0.01em" }}>
      {label}
    </p>
    <p style={{ fontSize: "0.82rem", color: "#7A8499", lineHeight: 1.65 }}>
      {desc}
    </p>
  </div>
);

export default PrepItem;