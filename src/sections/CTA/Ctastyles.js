export const CTA_STYLES = `

.cta-section {
  position: relative;
  overflow: hidden;
  padding: clamp(5rem, 10vh, 8rem) clamp(1.5rem, 5vw, 5rem);
  background: #050609;
  font-family: 'DM Sans', sans-serif;
}

/* Layered atmosphere */
.cta-bg-noise {
  position: absolute; inset: 0; pointer-events: none; z-index: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
  background-size: 200px;
}
.cta-bg-glow {
  position: absolute; inset: 0; pointer-events: none; z-index: 0;
  background:
    radial-gradient(ellipse 90% 60% at 50% 100%, rgba(120,90,20,0.2) 0%, transparent 60%),
    radial-gradient(ellipse 60% 60% at 50% -10%, rgba(79,70,229,0.08) 0%, transparent 55%),
    radial-gradient(ellipse 40% 50% at 0% 50%, rgba(212,175,55,0.05) 0%, transparent 55%),
    radial-gradient(ellipse 40% 50% at 100% 50%, rgba(212,175,55,0.05) 0%, transparent 55%);
}

/* Top + bottom gold lines */
.cta-line-top {
  position: absolute; top: 0; left: 0; right: 0; height: 1px; z-index: 2;
  background: linear-gradient(90deg, transparent 0%, #9C7A20 25%, #FBBF24 50%, #9C7A20 75%, transparent 100%);
  transform-origin: left;
  transition: transform 1.2s cubic-bezier(0.4,0,0.2,1);
}
.cta-line-bottom {
  position: absolute; bottom: 0; left: 0; right: 0; height: 1px; z-index: 2;
  background: linear-gradient(90deg, transparent 0%, rgba(156,122,32,0.3) 30%, rgba(212,175,55,0.5) 50%, rgba(156,122,32,0.3) 70%, transparent 100%);
}

/* Grid */
.cta-grid-svg {
  position: absolute; inset: 0; width: 100%; height: 100%;
  pointer-events: none; z-index: 1; opacity: 0.04;
}

/* Orbs */
.cta-orb {
  position: absolute; border-radius: 50%; pointer-events: none; z-index: 1; filter: blur(100px);
}
.cta-orb-1 {
  width: 500px; height: 500px;
  background: radial-gradient(circle, rgba(212,175,55,0.1) 0%, transparent 70%);
  bottom: -150px; left: 50%; transform: translateX(-50%);
  animation: corb1 18s ease-in-out infinite alternate;
}
.cta-orb-2 {
  width: 350px; height: 350px;
  background: radial-gradient(circle, rgba(79,70,229,0.08) 0%, transparent 70%);
  top: -100px; right: -80px;
  animation: corb2 22s ease-in-out infinite alternate;
}
@keyframes corb1 { from { transform: translateX(-50%) scale(1); } to { transform: translateX(-50%) scale(1.1); } }
@keyframes corb2 { from { transform: translate(0,0); } to { transform: translate(-30px, 20px); } }

/* Inner */
.cta-inner {
  position: relative; z-index: 3;
  max-width: 760px; margin: 0 auto; text-align: center;
}

/* Eyebrow */
.cta-eyebrow {
  display: inline-flex; align-items: center; gap: 0.65rem;
  margin-bottom: 2rem;
  opacity: 0; transform: translateY(12px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.cta-eyebrow.vis { opacity: 1; transform: translateY(0); }
.ce-line { width: 2rem; height: 1px; background: linear-gradient(90deg, transparent, #D4AF37); }
.ce-line-r { width: 2rem; height: 1px; background: linear-gradient(90deg, #D4AF37, transparent); }
.ce-text { font-size: 0.67rem; font-weight: 500; letter-spacing: 0.22em; text-transform: uppercase; color: #9C7A20; }

/* Urgency pill */
.urgency-pill {
  display: inline-flex; align-items: center; gap: 0.55rem;
  background: rgba(239,68,68,0.07); border: 1px solid rgba(239,68,68,0.22);
  padding: 0.4rem 1rem; border-radius: 2px; margin-bottom: 2rem;
  font-size: 0.67rem; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase;
  color: #EF4444;
  opacity: 0; transform: translateY(10px);
  transition: opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s;
}
.urgency-pill.vis { opacity: 1; transform: translateY(0); }
.up-dot { width: 5px; height: 5px; border-radius: 50%; background: #EF4444; animation: upulse 1.6s ease-in-out infinite; }
@keyframes upulse { 0%,100%{opacity:1;} 50%{opacity:.2;} }

/* Headline */
.cta-headline {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(2.6rem, 5.5vw, 5rem);
  font-weight: 600; line-height: 1.05; letter-spacing: -0.025em;
  color: #F0EBE0; margin-bottom: 1.5rem;
  opacity: 0; transform: translateY(20px);
  transition: opacity 0.8s ease 0.15s, transform 0.8s ease 0.15s;
}
.cta-headline.vis { opacity: 1; transform: translateY(0); }
.cta-headline em { font-style: italic; font-weight: 300; color: #C9A84C; }

/* FIX: was #3E4455 — invisible on #050609 */
.cta-body {
  font-size: clamp(0.92rem, 1.2vw, 1.02rem);
  line-height: 1.82; color: #7A8394; max-width: 50ch; margin: 0 auto 3rem;
  opacity: 0; transform: translateY(14px);
  transition: opacity 0.7s ease 0.25s, transform 0.7s ease 0.25s;
}
.cta-body.vis { opacity: 1; transform: translateY(0); }

/* FIX: was #5A6070 — too dim */
.cta-body strong { color: #9AA0B0; font-weight: 400; }

/* ── Countdown ── */
.countdown-wrap {
  margin-bottom: 3rem;
  opacity: 0; transform: translateY(14px);
  transition: opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s;
}
.countdown-wrap.vis { opacity: 1; transform: translateY(0); }

/* FIX: was #2A2F3B — invisible */
.countdown-label {
  font-size: 0.65rem; letter-spacing: 0.24em; text-transform: uppercase;
  color: #6B7280; margin-bottom: 1.25rem;
}

.countdown-blocks {
  display: flex; align-items: center; justify-content: center; gap: 0.75rem;
}

.time-block {
  display: flex; flex-direction: column; align-items: center; gap: 0.5rem;
}

.time-cell {
  position: relative; width: 72px; height: 72px;
  background: rgba(255,255,255,0.02);
  border: 1px solid rgba(212,175,55,0.15);
  border-radius: 2px;
  display: flex; align-items: center; justify-content: center;
  overflow: hidden;
}
.time-cell::before {
  content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px;
  background: linear-gradient(90deg, transparent, rgba(212,175,55,0.4), transparent);
}
.time-cell::after {
  content: ''; position: absolute;
  top: 50%; left: 0; right: 0; height: 1px;
  background: rgba(0,0,0,0.5);
  transform: translateY(-50%);
}
.time-val {
  font-family: 'Cormorant Garamond', serif;
  font-size: 2rem; font-weight: 600; color: #FBBF24;
  letter-spacing: -0.02em; line-height: 1; z-index: 1;
}

/* FIX: was #2A2F3B — invisible */
.time-label {
  font-size: 0.62rem; letter-spacing: 0.2em; text-transform: uppercase; color: #6B7280;
}

.time-sep {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.8rem; font-weight: 300; color: rgba(212,175,55,0.25);
  padding-bottom: 1.4rem; line-height: 1; user-select: none;
  animation: sep-blink 1s ease-in-out infinite;
}
@keyframes sep-blink { 0%,100%{opacity:1;} 50%{opacity:0.2;} }

@media (max-width: 480px) {
  .time-cell { width: 58px; height: 58px; }
  .time-val { font-size: 1.6rem; }
}

/* ── CTA button ── */
.cta-btn-wrap {
  margin-bottom: 2.5rem;
  opacity: 0; transform: translateY(14px);
  transition: opacity 0.7s ease 0.4s, transform 0.7s ease 0.4s;
}
.cta-btn-wrap.vis { opacity: 1; transform: translateY(0); }

.btn-cta-gold {
  position: relative; display: inline-flex; align-items: center; gap: 0.7rem;
  background: linear-gradient(110deg, #9C7A20 0%, #D4AF37 35%, #FBBF24 55%, #D4AF37 75%, #9C7A20 100%);
  background-size: 250% 100%;
  color: #06080C;
  font-family: 'DM Sans', sans-serif; font-weight: 500; font-size: 0.82rem;
  letter-spacing: 0.12em; text-transform: uppercase;
  padding: 1.2rem 3rem; border: none; border-radius: 2px; cursor: pointer;
  transition: background-position 0.5s ease, box-shadow 0.3s, transform 0.2s;
  box-shadow: 0 4px 40px rgba(212,175,55,0.22), 0 0 0 0 rgba(212,175,55,0);
  animation: btn-breathe 3s ease-in-out infinite;
}
@keyframes btn-breathe {
  0%,100% { box-shadow: 0 4px 40px rgba(212,175,55,0.22), 0 0 0 0 rgba(212,175,55,0); }
  50% { box-shadow: 0 4px 50px rgba(212,175,55,0.35), 0 0 0 8px rgba(212,175,55,0.04); }
}
.btn-cta-gold:hover {
  background-position: 100% 0;
  box-shadow: 0 0 0 4px rgba(212,175,55,0.2), 0 10px 50px rgba(212,175,55,0.4);
  transform: translateY(-2px);
  animation: none;
}
.btn-cta-gold:active { transform: translateY(0); }
.bcg-arrow { font-size: 1rem; transition: transform 0.3s; }
.btn-cta-gold:hover .bcg-arrow { transform: translateX(5px); }

/* FIX: was #2A2F3B — invisible */
.trust-row {
  display: flex; flex-wrap: wrap; justify-content: center; gap: 0 2rem;
  opacity: 0; transition: opacity 0.7s ease 0.5s;
}
.trust-row.vis { opacity: 1; }
.trust-item-cta {
  display: flex; align-items: center; gap: 0.4rem;
  font-size: 0.7rem; color: #6B7280; letter-spacing: 0.08em;
  padding: 0.4rem 0;
}
.tic-diamond { color: #9C7A20; font-size: 0.5rem; }

/* Scarcity bar */
.scarcity-bar {
  margin: 0 auto 2.5rem;
  max-width: 320px;
  opacity: 0; transform: translateY(10px);
  transition: opacity 0.6s ease 0.35s, transform 0.6s ease 0.35s;
}
.scarcity-bar.vis { opacity: 1; transform: translateY(0); }
.sb-track {
  height: 2px; background: rgba(255,255,255,0.04);
  border-radius: 1px; margin-bottom: 0.6rem; overflow: hidden;
}
.sb-fill {
  height: 100%; width: 33%;
  background: linear-gradient(90deg, #9C7A20, #FBBF24);
  border-radius: 1px;
  animation: sb-fill-anim 1.5s 0.8s ease-out both;
  transform-origin: left;
}
@keyframes sb-fill-anim { from { width: 0; } to { width: 67%; } }

/* FIX: was #2A2F3B — invisible */
.sb-label {
  display: flex; justify-content: space-between;
  font-size: 0.65rem; letter-spacing: 0.1em; color: #6B7280;
}
.sb-label span:first-child { color: #9C7A20; }
`;