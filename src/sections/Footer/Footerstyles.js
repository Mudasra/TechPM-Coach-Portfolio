export const FOOTER_STYLES = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,500;0,600;0,700;1,300;1,600&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');

.footer-root {
  background: #030407;
  position: relative; overflow: hidden;
  font-family: 'DM Sans', sans-serif;
  border-top: 1px solid rgba(255,255,255,0.04);
}
.footer-noise {
  position: absolute; inset: 0; pointer-events: none; z-index: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.025'/%3E%3C/svg%3E");
  background-size: 200px;
}
.footer-glow {
  position: absolute; inset: 0; pointer-events: none; z-index: 0;
  background:
    radial-gradient(ellipse 70% 50% at 20% 100%, rgba(212,175,55,0.05) 0%, transparent 60%),
    radial-gradient(ellipse 60% 40% at 80% 0%, rgba(79,70,229,0.05) 0%, transparent 55%);
}
.footer-grid-svg {
  position: absolute; inset: 0; width: 100%; height: 100%;
  pointer-events: none; z-index: 1; opacity: 0.03;
}

/* Top gold accent line */
.footer-top-line {
  position: absolute; top: 0; left: 0; right: 0; height: 1px; z-index: 2;
  background: linear-gradient(90deg, transparent 5%, #9C7A20 25%, #D4AF37 50%, #9C7A20 75%, transparent 95%);
  opacity: 0.6;
}

.footer-inner {
  position: relative; z-index: 3;
  max-width: 1200px; margin: 0 auto;
  padding: clamp(3.5rem, 7vh, 5.5rem) clamp(1.5rem, 5vw, 5rem) 0;
}

/* ── Top section: brand + cols ── */
.footer-top {
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr 1fr;
  gap: clamp(2rem, 4vw, 5rem);
  padding-bottom: 3.5rem;
  border-bottom: 1px solid rgba(255,255,255,0.04);
}
@media (max-width: 900px) {
  .footer-top { grid-template-columns: 1fr 1fr; gap: 2.5rem; }
}
@media (max-width: 540px) {
  .footer-top { grid-template-columns: 1fr; gap: 2.5rem; }
}

/* Brand col */
.footer-brand-logo {
  display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1.25rem;
}
.logo-mark {
  width: 38px; height: 38px; border-radius: 2px; flex-shrink: 0;
  background: rgba(212,175,55,0.06);
  border: 1px solid rgba(212,175,55,0.2);
  display: flex; align-items: center; justify-content: center;
  font-family: 'Cormorant Garamond', serif; font-weight: 600; font-size: 1rem;
  color: #D4AF37; letter-spacing: 0.02em;
  position: relative;
}
.logo-mark::before {
  content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px;
  background: linear-gradient(90deg, transparent, rgba(212,175,55,0.5), transparent);
}
.logo-name {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.25rem; font-weight: 600; color: #E8E2D6;
  letter-spacing: 0.01em;
}

/* FIX: was #2A2F3B — invisible on #030407 */
.footer-tagline {
  font-size: 0.82rem; line-height: 1.75; color: #6B7280; margin-bottom: 1.75rem;
  max-width: 26ch;
}

/* Socials */
.footer-socials { display: flex; gap: 0.6rem; }
.social-btn {
  width: 34px; height: 34px; border-radius: 2px;
  background: rgba(255,255,255,0.02);
  border: 1px solid rgba(255,255,255,0.06);
  display: flex; align-items: center; justify-content: center;
  /* FIX: was #2E3340 — invisible */
  color: #606878; text-decoration: none;
  transition: border-color 0.25s, color 0.25s, background 0.25s;
}
.social-btn:hover {
  border-color: rgba(212,175,55,0.3);
  color: #C9A84C;
  background: rgba(212,175,55,0.04);
}

/* Nav cols */
.footer-col-title {
  font-size: 0.6rem; font-weight: 500; letter-spacing: 0.22em; text-transform: uppercase;
  color: #9C7A20; margin-bottom: 1.4rem;
  display: flex; align-items: center; gap: 0.5rem;
}
.footer-col-title::after {
  content: ''; flex: 1; height: 1px;
  background: linear-gradient(90deg, rgba(156,122,32,0.3), transparent);
}

.footer-nav-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.7rem; }

/* FIX: was #2A2F3B — invisible */
.footer-nav-list a {
  font-size: 0.8rem; color: #6B7280; text-decoration: none;
  letter-spacing: 0.02em; display: inline-flex; align-items: center; gap: 0.4rem;
  transition: color 0.25s;
}
.footer-nav-list a:hover { color: #C9A84C; }
.footer-nav-list a::before {
  content: ''; width: 3px; height: 3px; border-radius: 50%;
  background: #9C7A20; opacity: 0; flex-shrink: 0;
  transition: opacity 0.25s, transform 0.25s;
  transform: scale(0);
}
.footer-nav-list a:hover::before { opacity: 1; transform: scale(1); }

/* Contact items */
.contact-item {
  display: flex; align-items: flex-start; gap: 0.85rem;
  margin-bottom: 1rem;
}
.contact-item:last-child { margin-bottom: 0; }
.contact-icon {
  width: 20px; height: 20px; flex-shrink: 0; margin-top: 1px;
  display: flex; align-items: center; justify-content: center;
  color: #9C7A20;
}

/* FIX: was #2A2F3B — invisible */
.contact-text {
  font-size: 0.8rem; color: #6B7280; line-height: 1.55;
}
.contact-text a {
  color: #6B7280; text-decoration: none;
  transition: color 0.25s;
}
.contact-text a:hover { color: #C9A84C; }

/* ── Bottom bar ── */
.footer-bottom {
  display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center;
  gap: 1rem;
  padding: 1.5rem 0 clamp(2rem, 5vh, 3rem);
}

/* FIX: was #1E2229 — completely invisible */
.footer-copy {
  font-size: 0.67rem; color: #4A5060; letter-spacing: 0.08em; text-transform: uppercase;
}

/* FIX: was #1A1E25 — completely invisible */
.footer-made {
  display: flex; align-items: center; gap: 0.5rem;
  font-size: 0.72rem; color: #4A5060; letter-spacing: 0.06em;
}
.footer-made-diamond { color: #9C7A20; font-size: 0.65rem; }

.footer-legal {
  display: flex; gap: 1.5rem;
}

/* FIX: was #1E2229 — completely invisible */
.footer-legal a {
  font-size: 0.6rem; color: #4A5060; text-decoration: none;
  letter-spacing: 0.08em; text-transform: uppercase;
  transition: color 0.25s;
}
.footer-legal a:hover { color: #9C7A20; }

@media (max-width: 600px) {
  .footer-bottom { flex-direction: column; align-items: flex-start; gap: 0.75rem; }
  .footer-legal { gap: 1rem; }
}
`;