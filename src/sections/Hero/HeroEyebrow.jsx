const HeroEyebrow = ({ visible }) => (
  <div className={`hero-eyebrow ${visible ? "vis" : ""}`}>
    <div className="ey-line" aria-hidden="true" />
    <span className="ey-text">Premium Career Coaching</span>
    <span className="ey-sep" aria-hidden="true">·</span>
    <span className="ey-text" style={{ color: "#7A8499" }}>2025 Cohort Open</span>
    <div className="ey-dot" aria-label="Enrollment active" />
  </div>
);

export default HeroEyebrow;