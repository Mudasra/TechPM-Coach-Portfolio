export const FAQ_STYLES = `

.faq-section {
  background: #06080C;
  padding: clamp(5rem, 10vh, 8rem) clamp(1.5rem, 5vw, 5rem);
  position: relative; overflow: hidden;
  font-family: 'DM Sans', sans-serif;
}
.faq-noise {
  position: absolute; inset: 0; pointer-events: none; z-index: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
  background-size: 200px;
}
.faq-glow {
  position: absolute; inset: 0; pointer-events: none; z-index: 0;
  background:
    radial-gradient(ellipse 70% 45% at 50% 0%, rgba(79,70,229,0.07) 0%, transparent 60%),
    radial-gradient(ellipse 50% 40% at 10% 80%, rgba(212,175,55,0.05) 0%, transparent 55%),
    radial-gradient(ellipse 50% 40% at 90% 20%, rgba(212,175,55,0.04) 0%, transparent 55%);
}
.faq-grid-svg {
  position: absolute; inset: 0; width: 100%; height: 100%;
  pointer-events: none; z-index: 1; opacity: 0.04;
}
.faq-line-top {
  position: absolute; top: 0; left: 0; right: 0; height: 1px; z-index: 2;
  background: linear-gradient(90deg, transparent, rgba(156,122,32,0.3) 30%, rgba(212,175,55,0.5) 50%, rgba(156,122,32,0.3) 70%, transparent);
}

.faq-inner {
  position: relative; z-index: 3;
  max-width: 780px; margin: 0 auto;
}

/* Header */
.faq-header {
  text-align: center; margin-bottom: 4rem;
  opacity: 0; transform: translateY(16px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}
.faq-header.vis { opacity: 1; transform: translateY(0); }

.faq-eyebrow {
  display: inline-flex; align-items: center; gap: 0.65rem;
  margin-bottom: 1.5rem;
}
.fe-line { width: 1.8rem; height: 1px; background: linear-gradient(90deg, transparent, #D4AF37); }
.fe-line-r { width: 1.8rem; height: 1px; background: linear-gradient(90deg, #D4AF37, transparent); }
.fe-text { font-size: 0.67rem; font-weight: 500; letter-spacing: 0.22em; text-transform: uppercase; color: #9C7A20; }

.faq-h2 {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(2.2rem, 4.5vw, 3.8rem);
  font-weight: 600; line-height: 1.08; letter-spacing: -0.02em;
  color: #F0EBE0; margin-bottom: 1rem;
}
.faq-h2 em { font-style: italic; font-weight: 300; color: #C9A84C; }

/* FIX: was #2E3340 — invisible on #06080C */
.faq-sub {
  font-size: 0.92rem; color: #7A8394; line-height: 1.7; max-width: 44ch; margin: 0 auto;
}

/* List */
.faq-list {
  display: flex; flex-direction: column; gap: 1px;
  border: 1px solid rgba(255,255,255,0.05); border-radius: 3px; overflow: hidden;
  opacity: 0; transform: translateY(18px);
  transition: opacity 0.75s ease 0.1s, transform 0.75s ease 0.1s;
}
.faq-list.vis { opacity: 1; transform: translateY(0); }

/* Item */
.faq-item {
  border-bottom: 1px solid rgba(255,255,255,0.04);
  position: relative; overflow: hidden;
  transition: background 0.3s;
}
.faq-item:last-child { border-bottom: none; }
.faq-item.open { background: rgba(212,175,55,0.025); }

/* Left accent bar */
.faq-item::before {
  content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 2px;
  background: linear-gradient(180deg, #D4AF37, rgba(212,175,55,0.3));
  transform: scaleY(0); transform-origin: top;
  transition: transform 0.35s cubic-bezier(0.4,0,0.2,1);
}
.faq-item.open::before { transform: scaleY(1); }

.faq-btn {
  width: 100%; display: flex; align-items: flex-start; justify-content: space-between;
  gap: 1.5rem; padding: 1.5rem 1.75rem;
  background: transparent; border: none; cursor: pointer; text-align: left;
  outline: none;
}
.faq-btn:focus-visible {
  box-shadow: inset 0 0 0 2px rgba(212,175,55,0.3);
}

.faq-q-wrap { display: flex; align-items: flex-start; gap: 1rem; flex: 1; min-width: 0; }

/* FIX: was #2A2F3B — invisible */
.faq-tag {
  flex-shrink: 0; margin-top: 1px;
  font-size: 0.6rem; letter-spacing: 0.14em; text-transform: uppercase;
  color: #606878; font-weight: 500;
  min-width: 4.5rem; text-align: right;
  padding-top: 2px;
  transition: color 0.3s;
}
.faq-item.open .faq-tag { color: #9C7A20; }

/* FIX: was #4A5060 — too dark */
.faq-q {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.9rem; font-weight: 400; line-height: 1.55;
  color: #7A8394; flex: 1;
  transition: color 0.3s;
}
.faq-item.open .faq-q { color: #C0BAB0; }

.faq-icon {
  flex-shrink: 0; width: 28px; height: 28px; border-radius: 2px; margin-top: 1px;
  border: 1px solid rgba(255,255,255,0.06);
  display: flex; align-items: center; justify-content: center;
  color: #2E3340; transition: border-color 0.3s, color 0.3s, transform 0.4s cubic-bezier(0.34,1.2,0.64,1);
}
.faq-item.open .faq-icon {
  border-color: rgba(212,175,55,0.3); color: #D4AF37; transform: rotate(45deg);
}

/* Answer panel */
.faq-answer {
  max-height: 0; overflow: hidden;
  transition: max-height 0.2s ease-in-out;
}
.faq-answer.open { max-height: 600px; }

.faq-answer-inner {
  padding: 0 1.75rem 1.5rem 1.75rem;
  padding-left: calc(1.75rem + 5.5rem);
}
@media (max-width: 540px) {
  .faq-answer-inner { padding-left: 1.75rem; }
  .faq-tag { display: none; }
}

/* FIX: was #3A4050 — near invisible */
.faq-a {
  font-size: 0.86rem; line-height: 1.82; color: #7A8394;
  border-left: 1px solid rgba(212,175,55,0.12); padding-left: 1rem;
}

/* Bottom card */
.faq-contact-card {
  margin-top: 2.5rem; padding: 2rem 2.5rem;
  background: rgba(255,255,255,0.015);
  border: 1px solid rgba(255,255,255,0.05); border-radius: 3px;
  position: relative; overflow: hidden; text-align: center;
  opacity: 0; transform: translateY(14px);
  transition: opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s;
}
.faq-contact-card.vis { opacity: 1; transform: translateY(0); }
.faq-contact-card::before {
  content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px;
  background: linear-gradient(90deg, transparent, rgba(212,175,55,0.3), transparent);
}
.fcc-corner {
  position: absolute; width: 10px; height: 10px;
  border-color: rgba(212,175,55,0.25); border-style: solid;
}
.fcc-tl { top:-1px; left:-1px; border-width: 1px 0 0 1px; }
.fcc-tr { top:-1px; right:-1px; border-width: 1px 1px 0 0; }
.fcc-bl { bottom:-1px; left:-1px; border-width: 0 0 1px 1px; }
.fcc-br { bottom:-1px; right:-1px; border-width: 0 1px 1px 0; }

.fcc-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.5rem; font-weight: 600; color: #F0EBE0; margin-bottom: 0.5rem;
  letter-spacing: -0.01em;
}

/* FIX: was #2E3340 — invisible */
.fcc-sub { font-size: 0.84rem; color: #7A8394; line-height: 1.65; margin-bottom: 1.5rem; }

.fcc-actions { display: flex; align-items: center; justify-content: center; flex-wrap: wrap; gap: 1rem; }

.btn-fcc-gold {
  display: inline-flex; align-items: center; gap: 0.55rem;
  background: linear-gradient(110deg, #9C7A20 0%, #D4AF37 40%, #FBBF24 60%, #D4AF37 80%, #9C7A20 100%);
  background-size: 250% 100%;
  color: #06080C;
  font-family: 'DM Sans', sans-serif; font-weight: 500; font-size: 0.75rem;
  letter-spacing: 0.1em; text-transform: uppercase;
  padding: 0.85rem 1.8rem; border: none; border-radius: 2px; cursor: pointer;
  transition: background-position 0.5s ease, box-shadow 0.3s, transform 0.2s;
  box-shadow: 0 4px 24px rgba(212,175,55,0.15);
}
.btn-fcc-gold:hover {
  background-position: 100% 0;
  box-shadow: 0 0 0 3px rgba(212,175,55,0.18), 0 6px 30px rgba(212,175,55,0.28);
  transform: translateY(-1px);
}
.fcc-arrow { transition: transform 0.3s; }
.btn-fcc-gold:hover .fcc-arrow { transform: translateX(4px); }

/* FIX: was #3A4050 — very dim */
.btn-fcc-ghost {
  display: inline-flex; align-items: center; gap: 0.45rem;
  background: transparent; border: 1px solid rgba(255,255,255,0.07);
  color: #7A8394; font-family: 'DM Sans', sans-serif; font-size: 0.75rem;
  padding: 0.8rem 1.4rem; border-radius: 2px; text-decoration: none;
  letter-spacing: 0.04em; cursor: pointer;
  transition: border-color 0.3s, color 0.3s;
}
.btn-fcc-ghost:hover { border-color: rgba(212,175,55,0.3); color: #C9A84C; }
`;