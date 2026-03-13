import React from "react";
import PrepItem from "./PrepItem";

const CORNER_STYLES = [
  { top: -1, left: -1, borderWidth: "1px 0 0 1px" },
  { top: -1, right: -1, borderWidth: "1px 1px 0 0" },
  { bottom: -1, left: -1, borderWidth: "0 0 1px 1px" },
  { bottom: -1, right: -1, borderWidth: "0 1px 1px 0" },
];

const prepItems = [
  {
    label: "Write Down Your Story",
    desc: "From your first marketing job until today. Identify the patterns.",
  },
  {
    label: "Define Your Ideal Role",
    desc: "What does your dream PM job look like? Industry, comp, impact.",
  },
];

const WhileYouWait = ({ visible }) => (
  <div
    className="mb-16"
    style={{
      border: "1px solid rgba(212,175,55,0.15)",
      borderRadius: 3,
      padding: "clamp(2rem,4vw,3rem)",
      position: "relative",
      overflow: "hidden",
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(14px)",
      transition: "opacity 0.75s ease 0.55s, transform 0.75s ease 0.55s",
    }}
  >
    {/* Corner accents */}
    {CORNER_STYLES.map((style, i) => (
      <span
        key={i}
        style={{
          position: "absolute", width: 14, height: 14,
          borderStyle: "solid", borderColor: "rgba(212,175,55,0.4)",
          ...style,
        }}
      />
    ))}

    {/* Top glow line */}
    <div
      style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 1,
        background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.45), transparent)",
      }}
    />

    {/* Heading */}
    <div className="text-center mb-8">
      <p style={{ fontSize: "0.62rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#9C7A20", marginBottom: "0.75rem", fontWeight: 500 }}>
        While You Wait
      </p>
      <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.6rem", fontWeight: 600, color: "#D4AF37", letterSpacing: "0.01em", marginBottom: "0.6rem" }}>
        Start Here
      </h3>
      <p style={{ fontSize: "0.86rem", color: "#7A8499", lineHeight: 1.75, maxWidth: 400, margin: "0 auto" }}>
        Spend 15 minutes preparing so your strategy call becomes far more valuable.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-4">
      {prepItems.map((item, i) => (
        <PrepItem key={i} label={item.label} desc={item.desc} />
      ))}
    </div>
  </div>
);

export default WhileYouWait;