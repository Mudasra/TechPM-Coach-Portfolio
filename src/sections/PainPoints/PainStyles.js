export const PAIN_STYLES = `

.pain-section {
  background: #080A0F;
  padding: clamp(5rem,10vh,8rem) clamp(1.5rem,5vw,5rem);
  position: relative; overflow: hidden;
  font-family: 'DM Sans', sans-serif;
}
.pain-noise {
  position: absolute; inset: 0; pointer-events: none; z-index: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
  background-size: 200px;
}
.pain-glow {
  position: absolute; inset: 0; pointer-events: none; z-index: 0;
  background:
    radial-gradient(ellipse 70% 40% at 50% 0%, rgba(79,70,229,0.06) 0%, transparent 60%),
    radial-gradient(ellipse 50% 50% at 5% 60%, rgba(212,175,55,0.04) 0%, transparent 55%),
    radial-gradient(ellipse 50% 50% at 95% 60%, rgba(212,175,55,0.04) 0%, transparent 55%);
}
.pain-grid-svg {
  position: absolute; inset: 0; width: 100%; height: 100%;
  pointer-events: none; z-index: 1; opacity: 0.04;
}
.pain-top-line {
  position: absolute; top: 0; left: 0; right: 0; height: 1px; z-index: 2;
  background: linear-gradient(90deg, transparent, rgba(156,122,32,0.3) 30%, rgba(212,175,55,0.5) 50%, rgba(156,122,32,0.3) 70%, transparent);
}

.pain-inner {
  position: relative; z-index: 3;
  max-width: 1200px; margin: 0 auto;
}

/* ── Header ── */
.pain-header {
  text-align: center; margin-bottom: 4.5rem;
  opacity: 0; transform: translateY(16px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}
.pain-header.vis { opacity: 1; transform: translateY(0); }
.pain-eyebrow {
  display: inline-flex; align-items: center; gap: 0.65rem; margin-bottom: 1.5rem;
}
.pe-line { width: 1.8rem; height: 1px; background: linear-gradient(90deg, transparent, #D4AF37); }
.pe-line-r { width: 1.8rem; height: 1px; background: linear-gradient(90deg, #D4AF37, transparent); }
.pe-text { font-size: 0.67rem; font-weight: 500; letter-spacing: 0.22em; text-transform: uppercase; color: #9C7A20; }
.pain-h2 {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(2.2rem, 4.5vw, 3.8rem);
  font-weight: 600; line-height: 1.08; letter-spacing: -0.02em;
  color: #F0EBE0; margin-bottom: 1rem;
}
.pain-h2 em { font-style: italic; font-weight: 300; color: #C9A84C; }
.pain-sub { font-size: 0.88rem; color: #2E3340; line-height: 1.7; max-width: 48ch; margin: 0 auto; }

/* ── Cards grid ── */
.pain-grid {
  display: grid; grid-template-columns: repeat(3, 1fr);
  gap: 1px; background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.04); border-radius: 3px; overflow: hidden;
  margin-bottom: 3.5rem;
}
@media (max-width: 900px) {
  .pain-grid { grid-template-columns: 1fr; background: transparent; border: none; gap: 1rem; }
}

.pain-card {
  position: relative; overflow: hidden;
  background: #06080C;
  padding: 2.5rem 2rem;
  transition: background 0.35s;
  opacity: 0; transform: translateY(20px);
  transition: opacity 0.7s ease, transform 0.7s ease, background 0.35s;
}
.pain-card.vis { opacity: 1; transform: translateY(0); }
.pain-card:hover { background: rgba(12,14,20,0.9); }

/* Big decorative glyph behind content */
.pain-card-glyph {
  position: absolute; right: -0.5rem; bottom: -1.5rem;
  font-family: 'Cormorant Garamond', serif; font-weight: 700;
  font-size: 10rem; line-height: 1; pointer-events: none; user-select: none;
  transition: transform 0.5s ease, opacity 0.5s ease;
}
.pain-card:hover .pain-card-glyph { transform: scale(1.08) translateY(-4px); }

/* Top accent line per card */
.pain-card-line {
  position: absolute; top: 0; left: 0; right: 0; height: 2px;
  transform: scaleX(0); transform-origin: left;
  transition: transform 0.6s cubic-bezier(0.4,0,0.2,1) 0.1s;
}
.pain-card.vis .pain-card-line { transform: scaleX(1); }

/* Left border accent on hover */
.pain-card::before {
  content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 2px;
  transform: scaleY(0); transform-origin: top;
  transition: transform 0.4s cubic-bezier(0.4,0,0.2,1);
}
.pain-card:hover::before { transform: scaleY(1); }

/* Index number */
.pain-index {
  font-family: 'Cormorant Garamond', serif; font-weight: 300; font-style: italic;
  font-size: 0.85rem; letter-spacing: 0.08em;
  margin-bottom: 1.5rem; display: block;
}

/* Title */
.pain-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.5rem; font-weight: 600; line-height: 1.2; letter-spacing: -0.01em;
  color: #C0BAB0; margin-bottom: 1rem;
  transition: color 0.3s;
}
.pain-card:hover .pain-title { color: #F0EBE0; }

/* Desc — FIX: was #2E3340 (invisible on dark bg), now legible */
.pain-desc { font-size: 0.88rem; line-height: 1.8; color: #7A8394; margin-bottom: 1.75rem; }

/* Highlights */
.pain-highlights { display: flex; flex-direction: column; gap: 0.55rem; }
.pain-hl {
  display: flex; align-items: center; gap: 0.7rem;
  font-size: 0.72rem; color: #272C38; letter-spacing: 0.04em;
  transition: color 0.3s;
}
.pain-card:hover .pain-hl { color: #3A4050; }
.pain-hl-dot {
  width: 4px; height: 4px; border-radius: 50%; flex-shrink: 0;
  transition: transform 0.3s;
}
.pain-card:hover .pain-hl-dot { transform: scale(1.5); }

/* ── Bridge callout ── */
.pain-bridge {
  position: relative; overflow: hidden;
  border: 1px solid rgba(212,175,55,0.1); border-radius: 3px;
  padding: 1.75rem 2.5rem; text-align: center;
  background: rgba(212,175,55,0.02);
  opacity: 0; transform: translateY(14px);
  transition: opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s;
}
.pain-bridge.vis { opacity: 1; transform: translateY(0); }
.pain-bridge::before {
  content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px;
  background: linear-gradient(90deg, transparent, rgba(212,175,55,0.4), transparent);
}
.pb-corner { position: absolute; width: 10px; height: 10px; border-color: rgba(212,175,55,0.25); border-style: solid; }
.pb-tl { top:-1px; left:-1px; border-width:1px 0 0 1px; }
.pb-tr { top:-1px; right:-1px; border-width:1px 1px 0 0; }
.pb-bl { bottom:-1px; left:-1px; border-width:0 0 1px 1px; }
.pb-br { bottom:-1px; right:-1px; border-width:0 1px 1px 0; }
.pain-bridge-text {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(1.15rem, 2vw, 1.5rem); font-weight: 500;
  color: #4A5060; line-height: 1.5; letter-spacing: -0.01em;
}
.pain-bridge-text em { font-style: italic; font-weight: 300; color: #9C7A20; }
.pain-bridge-text strong { font-weight: 600; color: #6B7280; }
`;