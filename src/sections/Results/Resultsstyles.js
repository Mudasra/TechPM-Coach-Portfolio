export const RESULTS_STYLES = `

.results-section {
  background: #06080C;
  padding: clamp(5rem,10vh,8rem) clamp(1.5rem,5vw,5rem);
  position: relative; overflow: hidden;
  font-family: 'DM Sans', sans-serif;
}
.results-noise {
  position: absolute; inset: 0; pointer-events: none; z-index: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
  background-size: 200px;
}
.results-glow {
  position: absolute; inset: 0; pointer-events: none; z-index: 0;
  background:
    radial-gradient(ellipse 65% 40% at 50% 0%, rgba(79,70,229,0.07) 0%, transparent 60%),
    radial-gradient(ellipse 45% 45% at 5% 70%, rgba(212,175,55,0.05) 0%, transparent 55%),
    radial-gradient(ellipse 45% 45% at 95% 30%, rgba(212,175,55,0.05) 0%, transparent 55%);
}
.results-grid-svg {
  position: absolute; inset: 0; width: 100%; height: 100%;
  pointer-events: none; z-index: 1; opacity: 0.04;
}
.results-top-line {
  position: absolute; top: 0; left: 0; right: 0; height: 1px; z-index: 2;
  background: linear-gradient(90deg, transparent, rgba(156,122,32,0.3) 30%, rgba(212,175,55,0.5) 50%, rgba(156,122,32,0.3) 70%, transparent);
}

.results-inner {
  position: relative; z-index: 3;
  max-width: 1200px; margin: 0 auto;
}

/* ── Header ── */
.results-header {
  text-align: center; margin-bottom: 4.5rem;
  opacity: 0; transform: translateY(16px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}
.results-header.vis { opacity: 1; transform: translateY(0); }
.results-eyebrow {
  display: inline-flex; align-items: center; gap: 0.65rem; margin-bottom: 1.5rem;
}
.re-line { width: 1.8rem; height: 1px; background: linear-gradient(90deg, transparent, #D4AF37); }
.re-line-r { width: 1.8rem; height: 1px; background: linear-gradient(90deg, #D4AF37, transparent); }
.re-text { font-size: 0.67rem; font-weight: 500; letter-spacing: 0.22em; text-transform: uppercase; color: #9C7A20; }
.results-h2 {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(2.2rem, 4.5vw, 3.8rem);
  font-weight: 600; line-height: 1.08; letter-spacing: -0.02em;
  color: #F0EBE0; margin-bottom: 1rem;
}
.results-h2 em { font-style: italic; font-weight: 300; color: #C9A84C; }

/* FIX: was #2E3340 — invisible on #06080C */
.results-sub { font-size: 0.92rem; color: #7A8394; line-height: 1.7; max-width: 50ch; margin: 0 auto; }

/* ── Cards grid ── */
.results-grid {
  display: grid; grid-template-columns: repeat(3, 1fr);
  gap: clamp(1rem, 2vw, 1.5rem);
  margin-bottom: 4rem;
}
@media (max-width: 960px) { .results-grid { grid-template-columns: 1fr; max-width: 480px; margin-left: auto; margin-right: auto; } }

.rc-wrap {
  opacity: 0; transform: translateY(24px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}
.rc-wrap.vis { opacity: 1; transform: translateY(0); }

.result-card {
  position: relative; overflow: hidden;
  background: rgba(255,255,255,0.018);
  border-radius: 3px;
  display: flex; flex-direction: column;
}

/* Card top accent line */
.rc-accent-line {
  height: 1px; width: 100%;
  background: linear-gradient(90deg, var(--accent), transparent 70%);
  transform: scaleX(0); transform-origin: left;
  transition: transform 0.7s cubic-bezier(0.4,0,0.2,1) 0.15s;
}
.rc-wrap.vis .rc-accent-line { transform: scaleX(1); }

.rc-body { padding: 1.75rem 1.75rem 1.5rem; display: flex; flex-direction: column; flex: 1; }

/* Header row */
.rc-header-row {
  display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.75rem;
}
.rc-index {
  font-family: 'Cormorant Garamond', serif; font-style: italic; font-weight: 300;
  font-size: 0.82rem; letter-spacing: 0.08em;
}
.rc-label {
  font-size: 0.6rem; font-weight: 500; letter-spacing: 0.14em; text-transform: uppercase;
  border: 1px solid; padding: 0.25rem 0.6rem; border-radius: 2px;
}

/* FIX: was #2A2F3B — invisible */
.rc-time { font-size: 0.65rem; letter-spacing: 0.12em; text-transform: uppercase; color: #6B7280; }

/* Before block */
.rc-before {
  border: 1px solid rgba(192,57,43,0.12);
  background: rgba(192,57,43,0.03);
  border-radius: 2px; padding: 1.1rem; margin-bottom: 0;
}
.rc-block-header {
  display: flex; align-items: center; gap: 0.55rem; margin-bottom: 0.85rem;
}
.rc-block-dot {
  width: 5px; height: 5px; border-radius: 50%; flex-shrink: 0;
}
.rc-block-tag {
  font-size: 0.58rem; font-weight: 500; letter-spacing: 0.2em; text-transform: uppercase;
}
.rc-role {
  font-family: 'Cormorant Garamond', serif; font-size: 1rem; font-weight: 600;
  color: #4A5060; line-height: 1.2; margin-bottom: 0.2rem;
}

/* FIX: was #252930 — invisible */
.rc-company { font-size: 0.72rem; color: #606878; margin-bottom: 0.65rem; letter-spacing: 0.02em; }

.rc-salary {
  font-family: 'Cormorant Garamond', serif; font-size: 1.35rem; font-weight: 600;
  letter-spacing: -0.01em; margin-bottom: 0.4rem;
}

/* FIX: was #252930 — invisible */
.rc-note { font-size: 0.73rem; font-style: italic; color: #606878; line-height: 1.5; }

/* Arrow */
.rc-arrow-row {
  display: flex; align-items: center; justify-content: center;
  padding: 0.6rem 0; gap: 1rem;
}
.rc-arrow-line {
  flex: 1; height: 1px;
}
.rc-arrow-circle {
  width: 28px; height: 28px; border-radius: 50%; flex-shrink: 0;
  display: flex; align-items: center; justify-content: center;
  font-size: 0.75rem; color: #06080C; font-weight: 600;
}

/* After block */
.rc-after {
  border-radius: 2px; padding: 1.1rem;
}

/* Footer */
.rc-footer {
  display: flex; align-items: center; justify-content: space-between;
  padding: 1rem 1.75rem;
  border-top: 1px solid rgba(255,255,255,0.04);
  margin-top: auto;
}
.rc-avatar {
  width: 28px; height: 28px; border-radius: 50%; flex-shrink: 0;
  display: flex; align-items: center; justify-content: center;
  font-family: 'Cormorant Garamond', serif; font-size: 0.72rem; font-weight: 600;
  color: #06080C;
}

/* FIX: was #3A4050 — too dim */
.rc-name { font-size: 0.75rem; color: #7A8394; letter-spacing: 0.04em; }

/* ── Stats bar ── */
.results-stats {
  display: grid; grid-template-columns: repeat(3, 1fr);
  border: 1px solid rgba(255,255,255,0.05); border-radius: 3px; overflow: hidden;
  opacity: 0; transform: translateY(14px);
  transition: opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s;
}
.results-stats.vis { opacity: 1; transform: translateY(0); }
@media (max-width: 540px) { .results-stats { grid-template-columns: 1fr; } }

.rs-item {
  text-align: center; padding: 2rem 1.5rem;
  border-right: 1px solid rgba(255,255,255,0.05);
  position: relative; overflow: hidden;
  transition: background 0.3s;
}
.rs-item:last-child { border-right: none; }
.rs-item:hover { background: rgba(212,175,55,0.025); }
.rs-item::before {
  content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px;
  background: linear-gradient(90deg, transparent, rgba(212,175,55,0.3), transparent);
}
.rs-val {
  font-family: 'Cormorant Garamond', serif; font-size: clamp(2rem, 3.5vw, 2.8rem);
  font-weight: 600; color: #FBBF24; letter-spacing: -0.02em; line-height: 1; margin-bottom: 0.4rem;
}

/* FIX: was #2A2F3B — invisible */
.rs-label { font-size: 0.65rem; letter-spacing: 0.18em; text-transform: uppercase; color: #6B7280; }
`;