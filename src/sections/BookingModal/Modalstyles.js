export const MODAL_STYLES = `

.modal-overlay {
  position: fixed; inset: 0; z-index: 50;
  display: flex; align-items: center; justify-content: center;
  padding: 1rem;
  animation: overlay-in 0.3s ease forwards;
}
@keyframes overlay-in {
  from { opacity: 0; } to { opacity: 1; }
}

.modal-backdrop {
  position: absolute; inset: 0;
  background: rgba(4, 5, 8, 0.88);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.modal-box {
  position: relative;
  width: 100%; max-width: 500px;
  max-height: 92svh; overflow-y: auto;
  background: #080A0F;
  border: 1px solid rgba(212,175,55,0.15);
  border-radius: 3px;
  font-family: 'DM Sans', sans-serif;
  animation: modal-rise 0.4s cubic-bezier(0.34, 1.2, 0.64, 1) forwards;
  scrollbar-width: thin;
  scrollbar-color: rgba(212,175,55,0.2) transparent;
}
@keyframes modal-rise {
  from { opacity: 0; transform: translateY(24px) scale(0.97); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
}

.modal-box::before {
  content: '';
  position: absolute; top: 0; left: 0; right: 0; height: 1px; z-index: 2;
  background: linear-gradient(90deg, transparent 0%, #9C7A20 20%, #FBBF24 50%, #9C7A20 80%, transparent 100%);
}
.modal-corner {
  position: absolute; width: 14px; height: 14px;
  border-color: rgba(212,175,55,0.45); border-style: solid; z-index: 3;
}
.mc-tl { top: -1px; left: -1px; border-width: 1px 0 0 1px; }
.mc-tr { top: -1px; right: -1px; border-width: 1px 1px 0 0; }
.mc-bl { bottom: -1px; left: -1px; border-width: 0 0 1px 1px; }
.mc-br { bottom: -1px; right: -1px; border-width: 0 1px 1px 0; }

.modal-noise {
  position: absolute; inset: 0; pointer-events: none; z-index: 0; border-radius: 3px; overflow: hidden;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.025'/%3E%3C/svg%3E");
  background-size: 200px;
}
.modal-glow {
  position: absolute; inset: 0; pointer-events: none; z-index: 0; border-radius: 3px; overflow: hidden;
  background:
    radial-gradient(ellipse 70% 40% at 50% 0%, rgba(120,90,20,0.14) 0%, transparent 65%),
    radial-gradient(ellipse 50% 50% at 100% 100%, rgba(79,70,229,0.06) 0%, transparent 55%);
}

/* ── Header ── */
.modal-header {
  position: relative; z-index: 1;
  padding: 2.5rem 2.5rem 2rem;
  border-bottom: 1px solid rgba(255,255,255,0.05);
  text-align: center;
}
.modal-badge {
  display: inline-flex; align-items: center; gap: 0.5rem;
  border: 1px solid rgba(212,175,55,0.2);
  padding: 0.3rem 0.85rem; border-radius: 2px; margin-bottom: 1.25rem;
  font-size: 0.62rem; letter-spacing: 0.22em; text-transform: uppercase;
  color: #9C7A20; background: rgba(212,175,55,0.04);
}
.modal-badge-dot {
  width: 5px; height: 5px; border-radius: 50%; background: #FBBF24;
  animation: mpulse 2s ease-in-out infinite;
}
@keyframes mpulse { 0%,100%{opacity:1;} 50%{opacity:.3;} }

.modal-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 2.1rem; font-weight: 600; line-height: 1.1; letter-spacing: -0.02em;
  color: #F0EBE0; margin-bottom: 0.6rem;
}
.modal-title em { font-style: italic; font-weight: 300; color: #C9A84C; }

.modal-subtitle {
  font-size: 0.88rem;
  color: #8A93A8;
  letter-spacing: 0.03em;
  line-height: 1.6;
  background: rgba(212,175,55,0.05);
  border: 1px solid rgba(212,175,55,0.1);
  border-radius: 2px;
  padding: 0.4rem 0.85rem;
  display: inline-block;
}
.modal-subtitle strong { color: #A8B0C4; font-weight: 500; }

.trust-strip {
  display: flex; justify-content: center; flex-wrap: wrap; gap: 1.25rem;
  margin-top: 1.5rem;
}
.trust-item {
  display: flex; align-items: center; gap: 0.4rem;
  font-size: 0.7rem; color: #5A6275; letter-spacing: 0.06em;
}
.trust-check { color: #9C7A20; font-size: 0.75rem; }

/* Close btn */
.modal-close {
  position: absolute; top: 1.25rem; right: 1.25rem; z-index: 4;
  width: 32px; height: 32px; border-radius: 2px;
  background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07);
  color: #3E4455; font-size: 0.85rem; cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  transition: background 0.2s, color 0.2s, border-color 0.2s;
}
.modal-close:hover { background: rgba(212,175,55,0.06); border-color: rgba(212,175,55,0.25); color: #C9A84C; }
.modal-close:disabled { opacity: 0.4; cursor: not-allowed; }

/* ── Form body ── */
.modal-body {
  position: relative; z-index: 1;
  padding: 2rem 2.5rem 2.5rem;
}
@media (max-width: 480px) {
  .modal-header { padding: 2rem 1.5rem 1.75rem; }
  .modal-body { padding: 1.75rem 1.5rem 2rem; }
}

.form-field { margin-bottom: 1.25rem; }

.form-label {
  display: block; margin-bottom: 0.5rem;
  font-size: 0.7rem; font-weight: 500; letter-spacing: 0.14em; text-transform: uppercase;
  color: #3E4455;
}
.form-label span { color: #9C7A20; margin-left: 2px; }

.form-input, .form-select, .form-textarea {
  width: 100%;
  background: rgba(255,255,255,0.025);
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 2px;
  padding: 0.85rem 1rem;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.85rem; color: #C0BAB0;
  outline: none;
  transition: border-color 0.25s, background 0.25s, box-shadow 0.25s;
  -webkit-appearance: none;
}
.form-input::placeholder, .form-textarea::placeholder { color: #2A2F3B; }
.form-select { color: #2A2F3B; cursor: pointer; }
.form-select.has-value { color: #C0BAB0; }
.form-select option { background: #0D0F15; color: #C0BAB0; }
.form-textarea { resize: none; min-height: 90px; line-height: 1.6; }

.form-input:hover, .form-select:hover, .form-textarea:hover {
  border-color: rgba(255,255,255,0.12);
  background: rgba(255,255,255,0.035);
}
.form-input:focus, .form-select:focus, .form-textarea:focus {
  border-color: rgba(212,175,55,0.35);
  background: rgba(212,175,55,0.02);
  box-shadow: 0 0 0 3px rgba(212,175,55,0.06);
}
.form-input.err, .form-select.err { border-color: rgba(239,68,68,0.4); background: rgba(239,68,68,0.03); }
.form-error { margin-top: 0.35rem; font-size: 0.67rem; color: #EF4444; letter-spacing: 0.04em; }

.field-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
@media (max-width: 420px) { .field-row { grid-template-columns: 1fr; } }

.api-error {
  background: rgba(239,68,68,0.06); border: 1px solid rgba(239,68,68,0.2);
  border-radius: 2px; padding: 0.85rem 1rem; margin-bottom: 1.25rem;
  font-size: 0.78rem; color: #EF4444; line-height: 1.5;
}

.form-divider {
  height: 1px; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent);
  margin: 1.75rem 0;
}

/* Submit button */
.btn-submit {
  width: 100%; position: relative; overflow: hidden;
  display: flex; align-items: center; justify-content: center; gap: 0.65rem;
  background: linear-gradient(110deg, #9C7A20 0%, #D4AF37 35%, #FBBF24 55%, #D4AF37 75%, #9C7A20 100%);
  background-size: 250% 100%;
  color: #06080C;
  font-family: 'DM Sans', sans-serif; font-weight: 500; font-size: 0.8rem;
  letter-spacing: 0.12em; text-transform: uppercase;
  padding: 1.1rem 2rem; border: none; border-radius: 2px; cursor: pointer;
  transition: background-position 0.5s ease, box-shadow 0.3s, transform 0.2s, opacity 0.2s;
  box-shadow: 0 4px 30px rgba(212,175,55,0.18);
}
.btn-submit:hover:not(:disabled) {
  background-position: 100% 0;
  box-shadow: 0 0 0 3px rgba(212,175,55,0.18), 0 8px 40px rgba(212,175,55,0.3);
  transform: translateY(-1px);
}
.btn-submit:active:not(:disabled) { transform: translateY(0); }
.btn-submit:disabled { opacity: 0.55; cursor: not-allowed; }
.btn-submit-arrow { font-size: 1rem; transition: transform 0.3s; }
.btn-submit:hover:not(:disabled) .btn-submit-arrow { transform: translateX(5px); }

.spin { animation: spin 0.9s linear infinite; }
@keyframes spin { to { transform: rotate(360deg); } }

.form-note {
  text-align: center;
  font-size: 0.68rem;
  color: #4A5265;
  letter-spacing: 0.06em;
  margin-top: 0.85rem;
}

/* ── Success state ── */
.success-state {
  text-align: center; padding: 2.5rem 1rem;
  animation: overlay-in 0.5s ease;
}
.success-ring {
  width: 72px; height: 72px; border-radius: 50%; margin: 0 auto 1.5rem;
  background: rgba(212,175,55,0.08); border: 1px solid rgba(212,175,55,0.25);
  display: flex; align-items: center; justify-content: center;
  font-size: 1.8rem;
  animation: success-pop 0.5s cubic-bezier(0.34,1.4,0.64,1) forwards;
}
@keyframes success-pop {
  from { transform: scale(0.4); opacity: 0; }
  to   { transform: scale(1); opacity: 1; }
}
.success-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.9rem; font-weight: 600; color: #F0EBE0;
  margin-bottom: 0.5rem; letter-spacing: -0.01em;
}
.success-sub { font-size: 0.88rem; color: #7A8499; line-height: 1.65; }
.success-gold { color: #C9A84C; }
`;