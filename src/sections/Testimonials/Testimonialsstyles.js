export const TESTIMONIALS_STYLES = `

.testi-section {
  background: #080A0F;
  padding: clamp(5rem,10vh,8rem) clamp(1.5rem,5vw,5rem);
  position: relative; overflow: hidden;
  font-family: 'DM Sans', sans-serif;
}
.testi-noise {
  position: absolute; inset: 0; pointer-events: none; z-index: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
  background-size: 200px;
}
.testi-glow {
  position: absolute; inset: 0; pointer-events: none; z-index: 0;
  background:
    radial-gradient(ellipse 75% 45% at 50% 0%, rgba(120,90,20,0.12) 0%, transparent 60%),
    radial-gradient(ellipse 45% 50% at 0% 80%, rgba(79,70,229,0.06) 0%, transparent 55%),
    radial-gradient(ellipse 45% 50% at 100% 20%, rgba(79,70,229,0.06) 0%, transparent 55%);
}
.testi-grid-svg {
  position: absolute; inset: 0; width: 100%; height: 100%;
  pointer-events: none; z-index: 1; opacity: 0.04;
}
.testi-top-line {
  position: absolute; top: 0; left: 0; right: 0; height: 1px; z-index: 2;
  background: linear-gradient(90deg, transparent, rgba(156,122,32,0.3) 30%, rgba(212,175,55,0.5) 50%, rgba(156,122,32,0.3) 70%, transparent);
}

.testi-inner {
  position: relative; z-index: 3;
  max-width: 1200px; margin: 0 auto;
}

/* ── Header ── */
.testi-header {
  text-align: center; margin-bottom: 4.5rem;
  opacity: 0; transform: translateY(16px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}
.testi-header.vis { opacity: 1; transform: translateY(0); }
.testi-eyebrow {
  display: inline-flex; align-items: center; gap: 0.65rem; margin-bottom: 1.5rem;
}
.te-line  { width: 1.8rem; height: 1px; background: linear-gradient(90deg, transparent, #D4AF37); }
.te-line-r{ width: 1.8rem; height: 1px; background: linear-gradient(90deg, #D4AF37, transparent); }
.te-text  { font-size: 0.67rem; font-weight: 500; letter-spacing: 0.22em; text-transform: uppercase; color: #9C7A20; }
.testi-h2 {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(2.2rem, 4.5vw, 3.8rem);
  font-weight: 600; line-height: 1.08; letter-spacing: -0.02em;
  color: #F0EBE0; margin-bottom: 1rem;
}
.testi-h2 em { font-style: italic; font-weight: 300; color: #C9A84C; }

/* FIX: was #2E3340 — invisible on #080A0F */
.testi-sub { font-size: 0.92rem; color: #7A8394; line-height: 1.7; max-width: 46ch; margin: 0 auto; }

/* ── Grid ── */
.testi-grid {
  display: grid; grid-template-columns: repeat(3, 1fr);
  gap: clamp(0.85rem, 1.5vw, 1.25rem);
}
@media (max-width: 960px) { .testi-grid { grid-template-columns: 1fr; max-width: 520px; margin: 0 auto; } }

/* Card wrapper for stagger */
.tc-wrap {
  opacity: 0; transform: translateY(22px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}
.tc-wrap.vis { opacity: 1; transform: translateY(0); }

/* ── Card ── */
.testi-card {
  position: relative; overflow: hidden;
  background: rgba(255,255,255,0.018);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 3px;
  padding: 2rem 1.85rem 1.6rem;
  display: flex; flex-direction: column;
  transition: border-color 0.3s, background 0.3s;
}
.testi-card:hover {
  border-color: rgba(212,175,55,0.15);
  background: rgba(212,175,55,0.015);
}

/* Top gold shimmer line per card */
.testi-card::before {
  content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px;
  background: linear-gradient(90deg, transparent, rgba(212,175,55,0.35), transparent);
  opacity: 0; transition: opacity 0.3s;
}
.testi-card:hover::before { opacity: 1; }

/* Opening quote mark */
.tc-quote-mark {
  font-family: 'Cormorant Garamond', serif; font-weight: 300;
  font-size: 5rem; line-height: 0.7; letter-spacing: -0.05em;
  color: rgba(212,175,55,0.1);
  display: block; margin-bottom: 0.5rem;
  user-select: none; pointer-events: none;
  transition: color 0.3s;
}
.testi-card:hover .tc-quote-mark { color: rgba(212,175,55,0.18); }

/* Stars */
.tc-stars {
  display: flex; gap: 2px; margin-bottom: 1.1rem;
}
.tc-star { color: #D4AF37; font-size: 0.85rem; line-height: 1; }
.tc-star-empty { color: rgba(212,175,55,0.15); font-size: 0.85rem; line-height: 1; }

/* FIX: was #3A4050 — too dark on dark bg */
.tc-quote {
  font-size: 0.88rem; line-height: 1.82; color: #7A8394;
  flex: 1; margin-bottom: 1.5rem;
  transition: color 0.3s;
}
.testi-card:hover .tc-quote { color: #8E99A8; }

/* Metrics row */
.tc-metrics {
  display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 1.5rem;
}
.tc-metric {
  font-size: 0.62rem; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase;
  border: 1px solid; padding: 0.28rem 0.65rem; border-radius: 2px;
}
.tc-metric-time {
  color: rgba(5,150,105,0.7); border-color: rgba(5,150,105,0.18);
  background: rgba(5,150,105,0.05);
}
.tc-metric-salary {
  color: rgba(212,175,55,0.7); border-color: rgba(212,175,55,0.18);
  background: rgba(212,175,55,0.04);
}

/* Person row */
.tc-person {
  display: flex; align-items: center; gap: 0.85rem;
  padding-top: 1.25rem;
  border-top: 1px solid rgba(255,255,255,0.04);
}
.tc-avatar {
  width: 40px; height: 40px; border-radius: 50%; flex-shrink: 0;
  display: flex; align-items: center; justify-content: center;
  font-family: 'Cormorant Garamond', serif; font-weight: 600; font-size: 0.88rem;
  color: #06080C; border: 1px solid rgba(255,255,255,0.06);
}
.tc-name {
  font-family: 'Cormorant Garamond', serif; font-size: 1rem; font-weight: 600;
  color: #C0BAB0; letter-spacing: 0.01em; margin-bottom: 0.15rem;
}

/* FIX: was #252930 — basically invisible */
.tc-prev-role { font-size: 0.68rem; color: #606878; letter-spacing: 0.03em; margin-bottom: 0.2rem; }

.tc-curr-role {
  font-size: 0.65rem; font-weight: 500; letter-spacing: 0.06em; text-transform: uppercase;
  color: #9C7A20;
}
.tc-arrow { color: rgba(212,175,55,0.35); margin-right: 0.2rem; }

/* ── Skeleton ── */
.tc-skeleton {
  position: relative; overflow: hidden;
  background: rgba(255,255,255,0.018); border: 1px solid rgba(255,255,255,0.05);
  border-radius: 3px; padding: 2rem 1.85rem;
}
.tc-skeleton::after {
  content: ''; position: absolute; inset: 0;
  background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.025) 50%, transparent 100%);
  background-size: 200% 100%;
  animation: tsk-shimmer 1.8s ease-in-out infinite;
}
@keyframes tsk-shimmer { 0%{background-position:200% 0;} 100%{background-position:-200% 0;} }
.tsk-bar { border-radius: 2px; background: rgba(255,255,255,0.04); }
.tsk-circle { border-radius: 50%; background: rgba(255,255,255,0.04); }

/* Error */
.testi-error {
  text-align: center; padding: 2rem;
  font-size: 0.8rem; color: rgba(239,68,68,0.6); letter-spacing: 0.06em;
}
`;