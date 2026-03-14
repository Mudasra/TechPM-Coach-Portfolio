const ResultsHeader = ({ visible }) => (
  <div className={`results-header ${visible ? "vis" : ""}`}>
    <div className="results-eyebrow" aria-hidden="true">
      <div className="re-line" />
      <span className="re-text">Real Results</span>
      <div className="re-line-r" />
    </div>
    <h2 className="results-h2">
      Before & After ,<br /><em>Real Transformations</em>
    </h2>
    <p className="results-sub">
      These aren't cherry-picked exceptions. This is what a proven system looks like when applied consistently.
    </p>
  </div>
);

export default ResultsHeader;