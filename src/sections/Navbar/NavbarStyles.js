export const NAVBAR_STYLES = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,300&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');

/* ── Header shell ── */
.nav-header {
  position: fixed; top: 0; left: 0; right: 0; z-index: 40;
  transition: background 0.4s ease, border-color 0.4s ease, padding 0.3s ease, backdrop-filter 0.4s ease;
  font-family: 'DM Sans', sans-serif;
}
.nav-header.floating {
  padding: 1.4rem 0;
  background: transparent;
  border-bottom: 1px solid transparent;
}
.nav-header.anchored {
  padding: 0.85rem 0;
  background: rgba(5, 6, 9, 0.92);
  border-bottom: 1px solid rgba(212,175,55,0.12);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}

/* Gold top line — only when anchored */
.nav-gold-line {
  position: absolute; top: 0; left: 0; right: 0; height: 1px;
  background: linear-gradient(90deg, transparent 5%, #9C7A20 25%, #D4AF37 50%, #9C7A20 75%, transparent 95%);
  opacity: 0; transition: opacity 0.4s ease;
}
.nav-header.anchored .nav-gold-line { opacity: 0.7; }

.nav-inner {
  max-width: 1280px; margin: 0 auto;
  padding: 0 clamp(1.25rem, 4vw, 4rem);
  display: flex; align-items: center; justify-content: space-between; gap: 2rem;
}

/* ── Logo ── */
.nav-logo {
  display: flex; align-items: center; gap: 0.75rem;
  text-decoration: none; flex-shrink: 0;
}
.nav-logo-mark {
  width: 36px; height: 36px; border-radius: 2px; flex-shrink: 0;
  background: rgba(212,175,55,0.08);
  border: 1px solid rgba(212,175,55,0.25);
  display: flex; align-items: center; justify-content: center;
  font-family: 'Cormorant Garamond', serif; font-weight: 600; font-size: 0.95rem;
  color: #D4AF37; letter-spacing: 0.02em;
  transition: background 0.3s, border-color 0.3s;
  position: relative;
}
.nav-logo-mark::before {
  content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px;
  background: linear-gradient(90deg, transparent, rgba(212,175,55,0.55), transparent);
}
.nav-logo:hover .nav-logo-mark {
  background: rgba(212,175,55,0.13);
  border-color: rgba(212,175,55,0.45);
}
.nav-logo-text { display: flex; flex-direction: column; line-height: 1.25; }
.nav-logo-name {
  font-family: 'Cormorant Garamond', serif; font-weight: 600; font-size: 1.1rem;
  color: #E8E2D6; letter-spacing: 0.01em;
  transition: color 0.3s;
}
.nav-logo-sub {
  font-size: 0.6rem; font-weight: 400; letter-spacing: 0.18em; text-transform: uppercase;
  color: #9C7A20;
}

/* ── Desktop nav links ── */
.nav-links {
  display: flex; align-items: center; gap: 0.25rem;
}
@media (max-width: 768px) { .nav-links { display: none; } }

.nav-link {
  position: relative;
  font-size: 0.75rem; font-weight: 400; letter-spacing: 0.1em; text-transform: uppercase;
  color: #3A4050;
  background: transparent; border: none; cursor: pointer;
  padding: 0.5rem 0.9rem; border-radius: 2px;
  transition: color 0.25s, background 0.25s;
}
/* Make visible on floating (dark hero bg) */
.nav-header.floating .nav-link { color: rgba(255,255,255,0.55); }
.nav-link:hover { color: #C9A84C; background: rgba(212,175,55,0.05); }
.nav-header.floating .nav-link:hover { color: #D4AF37; background: rgba(212,175,55,0.08); }

/* Underline dot */
.nav-link::after {
  content: ''; position: absolute; bottom: 4px; left: 50%;
  width: 3px; height: 3px; border-radius: 50%; background: #D4AF37;
  transform: translateX(-50%) scale(0);
  transition: transform 0.25s cubic-bezier(0.34,1.4,0.64,1);
}
.nav-link:hover::after { transform: translateX(-50%) scale(1); }

/* ── Desktop right: spots + CTA ── */
.nav-right {
  display: flex; align-items: center; gap: 1.25rem; flex-shrink: 0;
}
@media (max-width: 768px) { .nav-right { display: none; } }

.nav-spots {
  display: flex; align-items: center; gap: 0.45rem;
  font-size: 0.62rem; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase;
  color: #2A2F3B;
  transition: color 0.3s;
}
.nav-header.floating .nav-spots { color: rgba(255,255,255,0.35); }
.nav-spots-dot {
  width: 5px; height: 5px; border-radius: 50%; background: #EF4444; flex-shrink: 0;
  animation: ndot 1.8s ease-in-out infinite;
}
@keyframes ndot { 0%,100%{opacity:1;} 50%{opacity:.25;} }

.btn-nav-gold {
  display: inline-flex; align-items: center; gap: 0.5rem;
  background: linear-gradient(110deg, #9C7A20 0%, #D4AF37 40%, #FBBF24 60%, #D4AF37 80%, #9C7A20 100%);
  background-size: 250% 100%;
  color: #06080C;
  font-family: 'DM Sans', sans-serif; font-weight: 500; font-size: 0.7rem;
  letter-spacing: 0.12em; text-transform: uppercase;
  padding: 0.65rem 1.4rem; border: none; border-radius: 2px; cursor: pointer;
  transition: background-position 0.5s ease, box-shadow 0.3s, transform 0.2s;
  box-shadow: 0 2px 16px rgba(212,175,55,0.18);
  white-space: nowrap;
}
.btn-nav-gold:hover {
  background-position: 100% 0;
  box-shadow: 0 0 0 2px rgba(212,175,55,0.2), 0 4px 24px rgba(212,175,55,0.3);
  transform: translateY(-1px);
}
.btn-nav-gold:active { transform: translateY(0); }
.bng-arrow { transition: transform 0.3s; font-style: normal; }
.btn-nav-gold:hover .bng-arrow { transform: translateX(3px); }

/* ── Hamburger ── */
.nav-hamburger {
  display: none; flex-direction: column; justify-content: center; align-items: center;
  gap: 5px; width: 38px; height: 38px; border-radius: 2px;
  background: rgba(212,175,55,0.05); border: 1px solid rgba(212,175,55,0.15);
  cursor: pointer; transition: background 0.2s, border-color 0.2s;
}
@media (max-width: 768px) { .nav-hamburger { display: flex; } }
.nav-hamburger:hover { background: rgba(212,175,55,0.1); border-color: rgba(212,175,55,0.3); }

.hb-bar {
  display: block; width: 18px; height: 1px; background: #C9A84C;
  border-radius: 1px;
  transition: transform 0.35s cubic-bezier(0.4,0,0.2,1), opacity 0.25s;
  transform-origin: center;
}
.hb-bar.open-1 { transform: translateY(6px) rotate(45deg); }
.hb-bar.open-2 { opacity: 0; transform: scaleX(0); }
.hb-bar.open-3 { transform: translateY(-6px) rotate(-45deg); }

/* ── Mobile backdrop ── */
.mob-backdrop {
  position: fixed; inset: 0; z-index: 38;
  background: rgba(3,4,7,0.85);
  backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);
  animation: fade-in-bd 0.25s ease;
}
@keyframes fade-in-bd { from{opacity:0;} to{opacity:1;} }

/* ── Mobile drawer ── */
.mob-drawer {
  position: fixed; top: 0; right: 0; bottom: 0; z-index: 39;
  width: min(300px, 88vw);
  background: #080A0F;
  border-left: 1px solid rgba(212,175,55,0.12);
  display: flex; flex-direction: column;
  transition: transform 0.35s cubic-bezier(0.4,0,0.2,1);
  overflow: hidden;
}
.mob-drawer.closed { transform: translateX(100%); }
.mob-drawer.open  { transform: translateX(0); }

/* Drawer noise + glow */
.mob-drawer-noise {
  position: absolute; inset: 0; pointer-events: none; z-index: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.025'/%3E%3C/svg%3E");
  background-size: 200px;
}
.mob-drawer-glow {
  position: absolute; inset: 0; pointer-events: none; z-index: 0;
  background: radial-gradient(ellipse 80% 40% at 50% 0%, rgba(120,90,20,0.15) 0%, transparent 60%);
}
.mob-drawer-top-line {
  position: absolute; top: 0; left: 0; right: 0; height: 1px; z-index: 2;
  background: linear-gradient(90deg, transparent, #D4AF37 40%, #FBBF24 60%, #D4AF37 80%, transparent);
}

/* Drawer header */
.mob-header {
  position: relative; z-index: 1;
  display: flex; align-items: center; justify-content: space-between;
  padding: 1.5rem 1.5rem 1.25rem;
  border-bottom: 1px solid rgba(255,255,255,0.05);
}
.mob-logo { display: flex; align-items: center; gap: 0.65rem; }
.mob-logo-mark {
  width: 32px; height: 32px; border-radius: 2px;
  background: rgba(212,175,55,0.07); border: 1px solid rgba(212,175,55,0.2);
  display: flex; align-items: center; justify-content: center;
  font-family: 'Cormorant Garamond', serif; font-weight: 600; font-size: 0.85rem; color: #D4AF37;
}
.mob-logo-name {
  font-family: 'Cormorant Garamond', serif; font-size: 1rem; font-weight: 600; color: #E8E2D6;
}
.mob-logo-sub { font-size: 0.58rem; letter-spacing: 0.16em; text-transform: uppercase; color: #9C7A20; }

.mob-close {
  width: 30px; height: 30px; border-radius: 2px;
  background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07);
  color: #3E4455; font-size: 0.75rem; cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  transition: background 0.2s, color 0.2s, border-color 0.2s;
}
.mob-close:hover { background: rgba(212,175,55,0.07); border-color: rgba(212,175,55,0.25); color: #C9A84C; }

/* Drawer nav */
.mob-nav {
  position: relative; z-index: 1;
  flex: 1; padding: 1.25rem 1rem; overflow-y: auto;
}
.mob-nav-label {
  font-size: 0.58rem; letter-spacing: 0.22em; text-transform: uppercase;
  color: #1E2229; padding: 0 0.5rem; margin-bottom: 0.75rem;
}
.mob-nav-item {
  display: flex; align-items: center; justify-content: space-between;
  width: 100%; padding: 0.85rem 0.75rem;
  background: transparent; border: none; border-bottom: 1px solid rgba(255,255,255,0.03);
  color: #4A5060; font-family: 'DM Sans', sans-serif;
  font-size: 0.82rem; font-weight: 400; letter-spacing: 0.06em;
  cursor: pointer; text-align: left;
  transition: color 0.25s, background 0.25s, padding-left 0.25s;
}
.mob-nav-item:last-child { border-bottom: none; }
.mob-nav-item:hover { color: #C9A84C; background: rgba(212,175,55,0.04); padding-left: 1.1rem; }
.mob-nav-item:hover .mob-nav-arrow { opacity: 1; transform: translateX(0); }
.mob-nav-arrow {
  color: #9C7A20; font-size: 0.75rem; opacity: 0;
  transform: translateX(-4px); transition: opacity 0.25s, transform 0.25s;
}

/* Drawer footer */
.mob-footer {
  position: relative; z-index: 1;
  padding: 1.25rem 1.25rem 1.75rem;
  border-top: 1px solid rgba(255,255,255,0.04);
}
.mob-spots {
  display: flex; align-items: center; justify-content: center; gap: 0.45rem;
  font-size: 0.62rem; letter-spacing: 0.1em; text-transform: uppercase; color: #2A2F3B;
  margin-bottom: 1rem;
}
.mob-spots-dot { width: 5px; height: 5px; border-radius: 50%; background: #EF4444; animation: ndot 1.8s ease-in-out infinite; }

.btn-mob-gold {
  width: 100%; display: flex; align-items: center; justify-content: center; gap: 0.55rem;
  background: linear-gradient(110deg, #9C7A20 0%, #D4AF37 40%, #FBBF24 60%, #D4AF37 80%, #9C7A20 100%);
  background-size: 250% 100%;
  color: #06080C;
  font-family: 'DM Sans', sans-serif; font-weight: 500; font-size: 0.75rem;
  letter-spacing: 0.12em; text-transform: uppercase;
  padding: 1rem; border: none; border-radius: 2px; cursor: pointer;
  transition: background-position 0.5s, box-shadow 0.3s;
  box-shadow: 0 4px 20px rgba(212,175,55,0.15);
}
.btn-mob-gold:hover { background-position: 100% 0; box-shadow: 0 4px 30px rgba(212,175,55,0.3); }
`;