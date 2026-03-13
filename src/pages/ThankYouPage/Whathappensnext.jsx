import React from "react";
import StepCard from "./StepCard";

const steps = [
  {
    step: "01",
    title: "Check Your Email",
    desc: "You'll receive a confirmation email within 5 minutes with your calendar link to select a time.",
    icon: "✉",
  },
  {
    step: "02",
    title: "Pick Your Time Slot",
    desc: "Choose a 45-minute window from available slots. Evenings and weekends available.",
    icon: "◈",
  },
  {
    step: "03",
    title: "Prepare Your Situation",
    desc: "Think about your current role, what you want next, and the 2–3 biggest obstacles.",
    icon: "◎",
  },
  {
    step: "04",
    title: "Show Up Ready",
    desc: "Jordan will join with a structured framework and you'll leave with a clear plan.",
    icon: "◆",
  },
];

const WhatHappensNext = ({ visible }) => (
  <div className="mb-20">
    {/* Section heading */}
    <div className="text-center mb-11">
      <div className="inline-flex items-center gap-3">
        <span style={{ display: "block", width: "2.5rem", height: 1, background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.4))" }} />
        <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.55rem", fontWeight: 600, color: "#D4AF37", letterSpacing: "0.01em" }}>
          What Happens Next
        </span>
        <span style={{ display: "block", width: "2.5rem", height: 1, background: "linear-gradient(90deg, rgba(212,175,55,0.4), transparent)" }} />
      </div>
    </div>

    <div className="grid md:grid-cols-2 gap-5">
      {steps.map((s, i) => (
        <StepCard key={i} step={s} visible={visible} delay={300 + i * 100} />
      ))}
    </div>
  </div>
);

export default WhatHappensNext;