export const ABOUT_STYLES = `

.about-section {
  background: #06080C;
  padding: clamp(5rem, 10vh, 8rem) clamp(1.5rem, 5vw, 5rem);
  position: relative;
  overflow: hidden;
  font-family: 'DM Sans', sans-serif;
}
.about-bg-noise {
  position: absolute; inset: 0; pointer-events: none; z-index: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
  background-size: 200px;
}
.about-bg-glow {
  position: absolute; inset: 0; pointer-events: none; z-index: 0;
  background:
    radial-gradient(ellipse 60% 50% at 0% 50%, rgba(212,175,55,0.06) 0%, transparent 60%),
    radial-gradient(ellipse 50% 60% at 100% 30%, rgba(79,70,229,0.07) 0%, transparent 60%);
}

.about-inner {
  position: relative; z-index: 2;
  max-width: 1200px; margin: 0 auto;
  display: grid; grid-template-columns: 1fr 1fr; gap: clamp(3rem, 6vw, 7rem); align-items: start;
}
@media (max-width: 900px) {
  .about-inner { grid-template-columns: 1fr; gap: 3.5rem; }
}

/* ── Left panel ── */
.about-left { position: relative; }

.profile-frame {
  position: relative;
  background: rgba(255,255,255,0.02);
  border: 1px solid rgba(212,175,55,0.12);
  border-radius: 3px;
  padding: 2.5rem 2rem;
  overflow: hidden;
}
.profile-frame::before {
  content: '';
  position: absolute; top: 0; left: 0; right: 0; height: 1px;
  background: linear-gradient(90deg, transparent, rgba(212,175,55,0.5), transparent);
}
.profile-frame::after {
  content: '';
  position: absolute; bottom: 0; left: 0; right: 0; height: 1px;
  background: linear-gradient(90deg, transparent, rgba(212,175,55,0.15), transparent);
}

/* Corner accents */
.frame-corner {
  position: absolute; width: 16px; height: 16px;
  border-color: rgba(212,175,55,0.4); border-style: solid;
}
.fc-tl { top: -1px; left: -1px; border-width: 1px 0 0 1px; }
.fc-tr { top: -1px; right: -1px; border-width: 1px 1px 0 0; }
.fc-bl { bottom: -1px; left: -1px; border-width: 0 0 1px 1px; }
.fc-br { bottom: -1px; right: -1px; border-width: 0 1px 1px 0; }

.avatar-ring {
  width: 110px; height: 110px; border-radius: 50%; margin: 0 auto 1.5rem;
  background: conic-gradient(from 0deg, #9C7A20, #D4AF37, #FBBF24, #D4AF37, #9C7A20, #D4AF37, #9C7A20);
  padding: 2px; position: relative;
  animation: ring-spin 12s linear infinite;
}
@keyframes ring-spin {
  from { filter: hue-rotate(0deg); }
  to { filter: hue-rotate(30deg); }
}
.avatar-inner {
  width: 100%; height: 100%; border-radius: 50%;
  background: linear-gradient(135deg, #1A1D24, #0E1018);
  display: flex; align-items: center; justify-content: center;
  font-family: 'Cormorant Garamond', serif;
  font-size: 2rem; font-weight: 600; color: #D4AF37;
  letter-spacing: 0.05em;
}

.profile-name {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.7rem; font-weight: 600; color: #F0EBE0;
  text-align: center; letter-spacing: 0.01em; margin-bottom: 0.3rem;
}
.profile-title {
  font-size: 0.7rem; font-weight: 500; letter-spacing: 0.2em; text-transform: uppercase;
  color: #9C7A20; text-align: center; margin-bottom: 2rem;
}

.profile-divider {
  height: 1px; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent);
  margin: 0 0 1.75rem;
}

.stat-trio {
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 0; margin-bottom: 2rem;
}
.stat-trio-item {
  text-align: center; padding: 1rem 0.5rem;
  border-right: 1px solid rgba(255,255,255,0.05);
}
.stat-trio-item:last-child { border-right: none; }
.sti-val {
  font-family: 'Cormorant Garamond', serif; font-size: 1.8rem; font-weight: 600;
  color: #FBBF24; line-height: 1; letter-spacing: -0.02em; margin-bottom: 0.3rem;
}

/* FIX: was #353A47 — invisible on #06080C */
.sti-label { font-size: 0.65rem; letter-spacing: 0.16em; text-transform: uppercase; color: #6B7280; }

/* FIX: was #2E3340 — invisible */
.as-seen-label {
  font-size: 0.65rem; letter-spacing: 0.2em; text-transform: uppercase;
  color: #6B7280; text-align: center; margin-bottom: 1rem;
}
.as-seen-row {
  display: flex; flex-wrap: wrap; justify-content: center; gap: 0.5rem;
}

/* FIX: was #4A5060 — too dim */
.as-seen-badge {
  font-size: 0.7rem; font-weight: 500; letter-spacing: 0.06em;
  color: #7A8394; border: 1px solid rgba(255,255,255,0.06);
  padding: 0.4rem 0.85rem; border-radius: 2px; background: rgba(255,255,255,0.015);
  transition: color 0.3s, border-color 0.3s;
}
.as-seen-badge:hover { color: #C9A84C; border-color: rgba(212,175,55,0.25); }

/* ── Right content ── */
.about-right {}

.about-eyebrow {
  display: inline-flex; align-items: center; gap: 0.7rem; margin-bottom: 2rem;
  opacity: 0; transform: translateY(12px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.about-eyebrow.vis { opacity: 1; transform: translateY(0); }
.ae-line { width: 2.2rem; height: 1px; background: linear-gradient(90deg, #9C7A20, #FBBF24); }
.ae-text { font-size: 0.68rem; font-weight: 500; letter-spacing: 0.22em; text-transform: uppercase; color: #C9A84C; }

.about-h2 {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(2.2rem, 4vw, 3.5rem);
  font-weight: 600; line-height: 1.07; letter-spacing: -0.02em;
  color: #F0EBE0; margin-bottom: 2rem;
  opacity: 0; transform: translateY(18px);
  transition: opacity 0.75s ease, transform 0.75s ease;
}
.about-h2.vis { opacity: 1; transform: translateY(0); }
.about-h2 em { font-style: italic; font-weight: 300; color: #9C7A20; }

.about-prose {
  margin-bottom: 2.5rem;
  opacity: 0; transform: translateY(14px);
  transition: opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s;
}
.about-prose.vis { opacity: 1; transform: translateY(0); }

/* FIX: was #4E5567 — too dark on #06080C */
.about-prose p {
  font-size: 0.95rem; line-height: 1.85; color: #7A8394; margin-bottom: 1.1rem;
}
.about-prose p:last-child { margin-bottom: 0; }
.about-prose strong { color: #9AA0B0; font-weight: 500; }

/* Credentials grid */
.cred-grid {
  display: grid; grid-template-columns: 1fr 1fr; gap: 0;
  border: 1px solid rgba(255,255,255,0.05); border-radius: 3px;
  overflow: hidden; margin-bottom: 2.5rem;
  opacity: 0; transform: translateY(12px);
  transition: opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s;
}
.cred-grid.vis { opacity: 1; transform: translateY(0); }
@media (max-width: 540px) { .cred-grid { grid-template-columns: 1fr; } }

.cred-item {
  display: flex; align-items: flex-start; gap: 1rem;
  padding: 1.1rem 1.25rem;
  border-right: 1px solid rgba(255,255,255,0.04);
  border-bottom: 1px solid rgba(255,255,255,0.04);
  transition: background 0.3s;
  position: relative; overflow: hidden;
}
.cred-item:nth-child(even) { border-right: none; }
.cred-item:nth-last-child(-n+2) { border-bottom: none; }
.cred-item:hover { background: rgba(212,175,55,0.03); }
.cred-item::before {
  content: ''; position: absolute; top: 0; left: 0; width: 2px; height: 0;
  background: linear-gradient(180deg, #D4AF37, transparent);
  transition: height 0.4s ease;
}
.cred-item:hover::before { height: 100%; }

.cred-badge {
  flex-shrink: 0; min-width: 2.8rem;
  font-family: 'Cormorant Garamond', serif; font-weight: 700;
  font-size: 0.72rem; letter-spacing: 0.04em; color: #D4AF37;
  padding-top: 1px;
}

/* FIX: was #3E4455 — nearly invisible */
.cred-text { font-size: 0.8rem; color: #7A8394; line-height: 1.55; }

/* CTA */
.about-cta-wrap {
  opacity: 0; transform: translateY(12px);
  transition: opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s;
}
.about-cta-wrap.vis { opacity: 1; transform: translateY(0); }

.btn-about-gold {
  position: relative; display: inline-flex; align-items: center; gap: 0.65rem;
  background: linear-gradient(110deg, #9C7A20 0%, #D4AF37 40%, #FBBF24 60%, #D4AF37 80%, #9C7A20 100%);
  background-size: 250% 100%;
  color: #06080C;
  font-family: 'DM Sans', sans-serif; font-weight: 500; font-size: 0.82rem;
  letter-spacing: 0.1em; text-transform: uppercase;
  padding: 1.05rem 2.3rem; border: none; border-radius: 2px; cursor: pointer;
  transition: background-position 0.5s ease, box-shadow 0.3s, transform 0.2s;
  box-shadow: 0 4px 30px rgba(212,175,55,0.15);
}
.btn-about-gold:hover {
  background-position: 100% 0;
  box-shadow: 0 0 0 3px rgba(212,175,55,0.18), 0 8px 40px rgba(212,175,55,0.3);
  transform: translateY(-2px);
}
.btn-about-arrow { font-size: 1rem; transition: transform 0.3s; }
.btn-about-gold:hover .btn-about-arrow { transform: translateX(5px); }

/* Left panel animation */
.about-left-wrap {
  opacity: 0; transform: translateX(-20px);
  transition: opacity 0.9s ease, transform 0.9s ease;
}
.about-left-wrap.vis { opacity: 1; transform: translateX(0); }
`;