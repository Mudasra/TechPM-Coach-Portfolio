import React from "react";

const PageBackground = () => (
  <>
    {/* Glows */}
    <div
      style={{
        position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0,
        background: `
          radial-gradient(ellipse 55% 45% at 5% 50%, rgba(212,175,55,0.05) 0%, transparent 60%),
          radial-gradient(ellipse 45% 55% at 95% 25%, rgba(79,70,229,0.06) 0%, transparent 60%)
        `,
      }}
    />
    {/* Noise */}
    <div
      style={{
        position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.025'/%3E%3C/svg%3E")`,
        backgroundSize: "200px",
      }}
    />
  </>
);

export default PageBackground;