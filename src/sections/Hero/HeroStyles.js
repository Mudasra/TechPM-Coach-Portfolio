export const HERO_STYLES = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,500;0,600;0,700;1,300;1,600&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');

.hero-premium {
  min-height: 100svh;
  background: #080A0F;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.hero-noise {
  position: absolute; inset: 0; z-index: 1; pointer-events: none;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E");
  background-size: 200px;
}
.hero-radial {
  position: absolute; inset: 0; z-index: 1; pointer-events: none;
  background:
    radial-gradient(ellipse 80% 55% at 50% -5%, rgba(120,90,25,0.2) 0%, transparent 60%),
    radial-gradient(ellipse 45% 45% at 88% 70%, rgba(79,70,229,0.1) 0%, transparent 60%),
    radial-gradient(ellipse 50% 40% at 8% 85%, rgba(212,175,55,0.07) 0%, transparent 55%);
}
.hero-grid-svg { position: absolute; inset: 0; width: 100%; height: 100%; z-index: 1; pointer-events: none; opacity: 0.055; }
.orb { position: absolute; border-radius: 50%; pointer-events: none; z-index: 1; filter: blur(90px); }
.orb-1 { width: 700px; height: 700px; background: radial-gradient(circle, rgba(79,70,229,0.09) 0%, transparent 70%); top: -250px; right: -150px; animation: od1 20s ease-in-out infinite alternate; }
.orb-2 { width: 450px; height: 450px; background: radial-gradient(circle, rgba(212,175,55,0.08) 0%, transparent 70%); bottom: -120px; left: 5%; animation: od2 25s ease-in-out infinite alternate; }
@keyframes od1 { from { transform: translate(0,0) scale(1); } to { transform: translate(50px,40px) scale(1.06); } }
@keyframes od2 { from { transform: translate(0,0); } to { transform: translate(-40px,-50px); } }

.gold-bar {
  position: absolute; top: 0; left: 0; right: 0; height: 1px; z-index: 10;
  background: linear-gradient(90deg, transparent 0%, #9C7A20 20%, #D4AF37 45%, #FBBF24 55%, #D4AF37 70%, #9C7A20 80%, transparent 100%);
  transform-origin: left;
  transition: transform 1.4s cubic-bezier(0.4,0,0.2,1);
}

.hero-inner {
  position: relative; z-index: 5;
  display: flex; flex-direction: column; justify-content: center; flex: 1;
  padding: clamp(6.5rem,12vh,10rem) clamp(1.5rem,5vw,5rem) clamp(5rem,9vh,8rem);
  max-width: 1300px; margin: 0 auto; width: 100%;
}

.hero-eyebrow {
  display: inline-flex; align-items: center; gap: 0.8rem;
  margin-bottom: 2.5rem;
  opacity: 0; transform: translateY(14px);
  transition: opacity 0.65s ease, transform 0.65s ease;
}
.hero-eyebrow.vis { opacity: 1; transform: translateY(0); }
.ey-line { width: 2.8rem; height: 1px; background: linear-gradient(90deg, #9C7A20, #FBBF24); }
.ey-text { font-family: 'DM Sans',sans-serif; font-size: 0.68rem; font-weight: 500; letter-spacing: 0.24em; text-transform: uppercase; color: #C9A84C; }
.ey-sep { color: #2E3340; font-size: 0.8rem; }
.ey-dot { width: 5px; height: 5px; border-radius: 50%; background: #FBBF24; animation: pg 2s ease-in-out infinite; }
@keyframes pg { 0%,100%{opacity:1;box-shadow:0 0 0 0 rgba(251,191,36,.6);} 50%{opacity:.5;box-shadow:0 0 0 6px rgba(251,191,36,0);} }

.hero-headline {
  margin-bottom: 2.25rem;
  opacity: 0; transform: translateY(22px);
  transition: opacity 0.85s ease, transform 0.85s ease;
}
.hero-headline.vis { opacity: 1; transform: translateY(0); }
.h1-main {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(3.2rem, 7vw, 7rem);
  line-height: 0.97;
  letter-spacing: -0.025em;
  margin: 0;
  color: #F0EBE0;
}
.h1-italic { font-style: italic; font-weight: 300; color: #B8913A; display: block; }
.h1-bold { font-weight: 700; color: #FFFFFF; display: block; }
.h1-underlined { position: relative; display: inline-block; }
.h1-underlined::after {
  content: ''; position: absolute; bottom: 6px; left: 0; width: 100%; height: 2px;
  background: linear-gradient(90deg, #9C7A20, #FBBF24, #9C7A20);
  transform: scaleX(0); transform-origin: left;
  animation: udraw 1.1s 1.3s cubic-bezier(0.4,0,0.2,1) forwards;
}
@keyframes udraw { to { transform: scaleX(1); } }
.h1-em2 { font-style: italic; font-weight: 300; font-size: 0.55em; letter-spacing: 0.04em; color: #6B5820; margin-top: 0.2em; display: block; }

.hero-sub {
  font-family: 'DM Sans', sans-serif;
  font-size: clamp(1rem, 1.3vw, 1.15rem);
  line-height: 1.78; color: #5A6070; max-width: 46ch;
  margin-bottom: 3rem;
  opacity: 0; transform: translateY(16px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}
.hero-sub.vis { opacity: 1; transform: translateY(0); }
.hero-sub strong { color: #9A9590; font-weight: 400; }

.hero-ctas {
  display: flex; align-items: center; flex-wrap: wrap; gap: 1.25rem;
  margin-bottom: 4.5rem;
  opacity: 0; transform: translateY(16px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}
.hero-ctas.vis { opacity: 1; transform: translateY(0); }

.btn-primary-gold {
  position: relative; display: inline-flex; align-items: center; gap: 0.65rem;
  background: linear-gradient(110deg, #9C7A20 0%, #D4AF37 40%, #FBBF24 60%, #D4AF37 80%, #9C7A20 100%);
  background-size: 250% 100%;
  color: #06080C;
  font-family: 'DM Sans', sans-serif; font-weight: 500; font-size: 0.82rem;
  letter-spacing: 0.1em; text-transform: uppercase;
  padding: 1.1rem 2.5rem; border: none; border-radius: 2px; cursor: pointer;
  transition: background-position 0.5s ease, box-shadow 0.3s, transform 0.2s;
  box-shadow: 0 4px 30px rgba(212,175,55,0.2), 0 1px 0 rgba(255,255,255,0.1) inset;
}
.btn-primary-gold:hover {
  background-position: 100% 0;
  box-shadow: 0 0 0 3px rgba(212,175,55,0.2), 0 8px 40px rgba(212,175,55,0.35);
  transform: translateY(-2px);
}
.btn-primary-gold:active { transform: translateY(0); }
.btn-arrow { font-size: 1rem; display: inline-block; transition: transform 0.3s; }
.btn-primary-gold:hover .btn-arrow { transform: translateX(5px); }

.btn-outline-ghost {
  display: inline-flex; align-items: center; gap: 0.55rem;
  background: transparent; border: 1px solid rgba(255,255,255,0.09);
  color: #5A6070;
  font-family: 'DM Sans', sans-serif; font-size: 0.82rem; font-weight: 400;
  padding: 1.05rem 1.9rem; border-radius: 2px; cursor: pointer; text-decoration: none;
  letter-spacing: 0.03em;
  transition: border-color 0.3s, color 0.3s, background 0.3s;
}
.btn-outline-ghost:hover { border-color: rgba(212,175,55,0.4); color: #C9A84C; background: rgba(212,175,55,0.04); }

.stats-row {
  display: grid; grid-template-columns: repeat(4, 1fr);
  border-top: 1px solid rgba(255,255,255,0.06);
  padding-top: 2.75rem;
  opacity: 0; transform: translateY(14px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}
.stats-row.vis { opacity: 1; transform: translateY(0); }
@media (max-width: 640px) { .stats-row { grid-template-columns: repeat(2,1fr); gap: 2rem; border-top: none; } }

.stat-item { padding-left: 1.75rem; border-left: 1px solid rgba(255,255,255,0.05); }
.stat-item:first-child { padding-left: 0; border-left: none; }
@media (max-width: 640px) { .stat-item { padding-left: 0; border-left: none; } }
.stat-number {
  font-family: 'Cormorant Garamond', serif; font-weight: 600;
  font-size: clamp(2.5rem, 4vw, 3.5rem);
  color: #FBBF24; line-height: 1; letter-spacing: -0.02em; margin-bottom: 0.4rem;
}
.stat-label {
  font-family: 'DM Sans', sans-serif; font-size: 0.67rem; font-weight: 400;
  color: #3A4050; letter-spacing: 0.18em; text-transform: uppercase;
}

.side-panel {
  position: absolute; right: clamp(1.5rem,4vw,5rem); top: 50%; z-index: 5;
  transform: translateY(-50%) translateX(30px);
  width: 215px;
  opacity: 0; transition: opacity 0.9s ease 1.4s, transform 0.9s ease 1.4s;
}
.side-panel.vis { opacity: 1; transform: translateY(-50%) translateX(0); }
@media (max-width: 1100px) { .side-panel { display: none; } }

.proof-card {
  background: rgba(255,255,255,0.025); border: 1px solid rgba(212,175,55,0.12);
  border-radius: 3px; padding: 1.3rem; margin-bottom: 0.85rem;
  backdrop-filter: blur(16px); position: relative; overflow: hidden;
}
.proof-card::before {
  content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px;
  background: linear-gradient(90deg, transparent, rgba(212,175,55,0.45), transparent);
}
.pc-row { display: flex; align-items: center; gap: 0.7rem; margin-bottom: 0.65rem; }
.pc-avatar {
  width: 34px; height: 34px; border-radius: 50%; flex-shrink: 0;
  display: flex; align-items: center; justify-content: center;
  font-family: 'Cormorant Garamond', serif; font-weight: 600; font-size: 0.82rem; color: white;
}
.pc-name { font-family: 'DM Sans', sans-serif; font-size: 0.75rem; font-weight: 500; color: #C0BAB0; }
.pc-role { font-size: 0.65rem; color: #454B5C; margin-top: 2px; }
.pc-quote { font-family: 'Cormorant Garamond', serif; font-style: italic; font-size: 0.85rem; color: #8A93A8; line-height: 1.55; }
.pc-stars { margin-top: 0.6rem; font-size: 0.7rem; color: #D4AF37; letter-spacing: 2px; }

.spots-pill {
  display: flex; align-items: center; gap: 0.55rem;
  padding: 0.8rem 1rem; background: rgba(239,68,68,0.06);
  border: 1px solid rgba(239,68,68,0.18); border-radius: 3px; margin-top: 1rem;
}
.sp-dot { width: 6px; height: 6px; border-radius: 50%; background: #EF4444; animation: pd 1.8s ease-in-out infinite; flex-shrink: 0; }
@keyframes pd { 0%,100%{opacity:1;} 50%{opacity:0.25;} }
.sp-text { font-family: 'DM Sans',sans-serif; font-size: 0.67rem; color: #EF4444; font-weight: 500; letter-spacing: 0.04em; }

.scroll-cue {
  position: absolute; bottom: 2.2rem; left: 50%; transform: translateX(-50%);
  display: flex; flex-direction: column; align-items: center; gap: 0.45rem;
  z-index: 5; opacity: 0; transition: opacity 0.6s ease 2.2s;
}
.scroll-cue.vis { opacity: 1; }
.sc-label { font-size: 0.58rem; letter-spacing: 0.22em; text-transform: uppercase; color: #292E3B; font-family: 'DM Sans',sans-serif; }
.sc-mouse { width: 18px; height: 28px; border: 1px solid #1E232F; border-radius: 9px; display: flex; justify-content: center; padding-top: 5px; }
.sc-wheel { width: 2px; height: 5px; background: #9C7A20; border-radius: 1px; animation: sw 2.2s ease-in-out infinite; }
@keyframes sw { 0%{opacity:1;transform:translateY(0);} 100%{opacity:0;transform:translateY(8px);} }

.hero-wave { position: absolute; bottom: 0; left: 0; right: 0; z-index: 4; line-height: 0; }
`;