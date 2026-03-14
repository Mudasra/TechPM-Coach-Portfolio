import React from "react";

const StepCard = ({ step, visible, delay }) => (
  <div
    style={{
      background: "rgba(255,255,255,0.018)",
      border: "1px solid rgba(255,255,255,0.05)",
      borderRadius: 3,
      padding: "1.4rem 1.5rem",
      position: "relative",
      overflow: "hidden",
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(18px)",
      transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.background = "rgba(212,175,55,0.03)";
      e.currentTarget.style.borderColor = "rgba(212,175,55,0.15)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.background = "rgba(255,255,255,0.018)";
      e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)";
    }}
  >
    {/* Top gradient line */}
    <div
      style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 1,
        background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.3), transparent)",
      }}
    />

    <div className="flex gap-4 items-start">
      {/* Step number badge */}
      <div
        style={{
          flexShrink: 0,
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "2rem", fontWeight: 700,
          color: "rgba(212,175,55,0.15)",
          lineHeight: 1, letterSpacing: "-0.03em",
          minWidth: 44,
        }}
      >
        {step.step}
      </div>

      <div>
        <p style={{ fontSize: "0.62rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#9C7A20", marginBottom: "0.35rem", fontWeight: 500 }}>
          Step {step.step}
        </p>
        <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem", fontWeight: 600, color: "#E8E2D6", marginBottom: "0.4rem", letterSpacing: "0.01em" }}>
          {step.title}
        </h3>
        <p style={{ fontSize: "0.84rem", color: "#7A8499", lineHeight: 1.75 }}>
          {step.desc}
        </p>
      </div>
    </div>
  </div>
);

export default StepCard;