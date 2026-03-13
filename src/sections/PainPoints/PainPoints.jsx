import React, { useEffect, useRef, useState } from "react";
import { painPoints } from "./Painpointsdata";
import { PAIN_STYLES } from "./PainStyles";
import PainBridge from "./Painbridge";
import PainCard from "./Paincard";
import PainHeader from "./Painheader";
import PainBackground from "./Painbackground";

const PainPoints = () => {
  const sectionRef = useRef(null);
  const [vis, setVis] = useState(false);
  const [cardVis, setCardVis] = useState([false, false, false]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVis(true);
          painPoints.forEach((_, i) => {
            setTimeout(() => {
              setCardVis((prev) => {
                const next = [...prev];
                next[i] = true;
                return next;
              });
            }, i * 140);
          });
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{PAIN_STYLES}</style>
      <section
        id="pain-points"
        className="pain-section"
        aria-label="Common challenges faced"
        ref={sectionRef}
      >
        <PainBackground />

        <div className="pain-inner">
          <PainHeader visible={vis} />

          <div className="pain-grid" role="list">
            {painPoints.map((p, i) => (
              <PainCard key={i} p={p} index={i} visible={cardVis[i]} />
            ))}
          </div>

          <PainBridge visible={vis} />
        </div>
      </section>
    </>
  );
};

export default PainPoints;