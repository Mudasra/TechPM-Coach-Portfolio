const PainBridge = ({ visible }) => (
  <div className={`pain-bridge ${visible ? "vis" : ""}`}>
    <div className="pb-corner pb-tl" aria-hidden="true" />
    <div className="pb-corner pb-tr" aria-hidden="true" />
    <div className="pb-corner pb-bl" aria-hidden="true" />
    <div className="pb-corner pb-br" aria-hidden="true" />
    <p className="pain-bridge-text">
      Every one of these is solvable — with <em>the right strategy</em> and{" "}
      <strong>someone who's done it before.</strong>
    </p>
  </div>
);

export default PainBridge;