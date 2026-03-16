import React, { useEffect, useRef, useState } from "react";
import { transformations } from "./Resultsdata";
import "../../../styles/Results.css";
import ResultsBackground from "./Resultsbackground";
import ResultsHeader from "./Resultsheader";
import ResultCard from "./Resultcard";
import ResultsStats from "./Resultsstats";

const Results = () => {
  const sectionRef = useRef(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVis(true)
          obs.disconnect()
        }
      },
      { threshold: 0, rootMargin: '0px 0px -50px 0px' }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="results"
      className="results-section"
      aria-label="Client transformation results"
      ref={sectionRef}
    >
      <ResultsBackground />
      <div className="results-inner">
        <ResultsHeader visible={vis} />
        <div className="results-grid">
          {transformations.map((item, i) => (
            <ResultCard key={i} item={item} index={i} visible={vis} />
          ))}
        </div>
        <ResultsStats visible={vis} />
      </div>
    </section>
  );
};

export default Results;