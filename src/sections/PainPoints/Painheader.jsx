const PainHeader = ({ visible }) => (
  <div className={`pain-header ${visible ? "vis" : ""}`}>
    <div className="pain-eyebrow" aria-hidden="true">
      <div className="pe-line" />
      <span className="pe-text">Sound Familiar?</span>
      <div className="pe-line-r" />
    </div>
    <h2 className="pain-h2">
      The <em>3 Walls</em> Every<br />Marketing Pro Hits
    </h2>
    <p className="pain-sub">
      If any of these feel painfully familiar, you're not alone — and there's a proven way through all three.
    </p>
  </div>
);

export default PainHeader;