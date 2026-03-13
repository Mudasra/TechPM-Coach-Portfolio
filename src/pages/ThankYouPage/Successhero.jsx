import React from "react";

const SuccessHero = ({ visible, submittedName }) => (
  <div
    className="text-center mb-16"
    style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(28px)",
      transition: "opacity 0.75s ease, transform 0.75s ease",
    }}
  >
    {/* Check ring */}
    <div
      className="mx-auto mb-7 flex items-center justify-center"
      style={{
        width: 80, height: 80, borderRadius: "50%",
        border: "1px solid rgba(212,175,55,0.35)",
        background: "radial-gradient(circle at 50% 50%, rgba(212,175,55,0.07) 0%, transparent 70%)",
        color: "#D4AF37", fontSize: "1.6rem", fontWeight: 300,
        position: "relative",
      }}
    >
      {/* Spinning arc */}
      <div
        style={{
          position: "absolute", inset: -3, borderRadius: "50%",
          background: "conic-gradient(from 0deg, #9C7A20, #D4AF37 40%, transparent 60%)",
          animation: "spin 8s linear infinite",
          opacity: 0.6,
        }}
      />
      <span style={{ position: "relative", zIndex: 1 }}>✓</span>
    </div>

    {/* Eyebrow */}
    <div
      className="inline-flex items-center gap-3 mb-5"
      style={{ opacity: visible ? 1 : 0, transition: "opacity 0.6s ease 0.1s" }}
    >
      <span style={{ display: "block", width: "2rem", height: 1, background: "linear-gradient(90deg, transparent, #D4AF37)" }} />
      <span style={{ fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#C9A84C", fontWeight: 500 }}>
        Application Received
      </span>
      <span style={{ display: "block", width: "2rem", height: 1, background: "linear-gradient(90deg, #D4AF37, transparent)" }} />
    </div>

    {/* Headline */}
    <h1
      style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "clamp(2rem, 4.5vw, 3.4rem)",
        fontWeight: 600, lineHeight: 1.08, letterSpacing: "-0.02em",
        color: "#F0EBE0", marginBottom: "1.1rem",
      }}
    >
      You're On Your Way to{" "}
      <em style={{ fontStyle: "italic", fontWeight: 300, color: "#9C7A20" }}>
        Your Tech Career
      </em>
    </h1>

    {/* Personalised welcome */}
    {submittedName && (
      <p style={{ fontSize: "1rem", color: "#D4AF37", marginBottom: "0.5rem", fontWeight: 500, letterSpacing: "0.02em" }}>
        Welcome, {submittedName}
      </p>
    )}

    {/* Subtext */}
    <p
      className="mx-auto"
      style={{ fontSize: "0.92rem", color: "#7A8499", lineHeight: 1.85, maxWidth: 480 }}
    >
      Your strategy call request has been received. This is the same first
      step hundreds of professionals took before landing their tech PM roles.
    </p>
  </div>
);

export default SuccessHero;