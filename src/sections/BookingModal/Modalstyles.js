export const MODAL_STYLES = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,500;0,600;0,700;1,300;1,600&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');

.modal-overlay {
  position: fixed; inset: 0; z-index: 9999;
  display: flex; align-items: center; justify-content: center;
  padding: 1rem;
  font-family: 'DM Sans', sans-serif;
}

.modal-backdrop {
  position: absolute; inset: 0;
  background: rgba(4, 5, 9, 0.88);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
}

.modal-panel {
  position: relative; z-index: 1;
  width: 100%; max-width: 500px;
  max-height: 92svh; overflow-y: auto;
  background: #0C0E14;
  border: 1px solid rgba(212,175,55,0.18);
  border-radius: 3px;
  animation: modal-rise 0.4s cubic-bezier(0.16,1,0.3,1) forwards;
  scrollbar-width: thin;
  scrollbar-color: rgba(212,175,55,0.2) transparent;
}
.modal-panel::-webkit-scrollbar { width: 4px; }
.modal-panel::-webkit-scrollbar-track { background: transparent; }
.modal-panel::-webkit-scrollbar-thumb { background: rgba(212,175,55,0.2); border-radius: 2px; }

@keyframes modal-rise {
  from { opacity: 0; transform: translateY(20px) scale(0.98); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
}

/* Corner accents */
.modal-corner {
  position: absolute; width: 14px; height: 14px;
  border-color: rgba(212,175,55,0.5); border-style: solid; pointer-events: none; z-index: 2;
}
.mc-tl { top: -1px; left: -1px; border-width: 1px 0 0 1px; }
.mc-tr { top: -1px; right: -1px; border-width: 1px 1px 0 0; }
.mc-bl { bottom: -1px; left: -1px; border-width: 0 0 1px 1px; }
.mc-br { bottom: -1px; right: -1px; border-width: 0 1px 1px 0; }

/* Top shimmer line */
.modal-topline {
  height: 1px;
  background: linear-gradient(90deg, transparent, #9C7A20 25%, #FBBF24 50%, #9C7A20 75%, transparent);
  animation: shimline 3s ease-in-out infinite;
}
@keyframes shimline {
  0%   { background-position: -200% center; }
  100% { background-position: 200% center; }
}

/* Header */
.modal-header {
  padding: 2.2rem 2.2rem 1.8rem;
  position: relative;
  background: linear-gradient(160deg, rgba(212,175,55,0.05) 0%, transparent 60%);
  border-bottom: 1px solid rgba(255,255,255,0.04);
}
.modal-eyebrow {
  display: inline-flex; align-items: center; gap: 0.6rem;
  margin-bottom: 1.2rem;
}
.me-line { width: 1.8rem; height: 1px; background: linear-gradient(90deg, #9C7A20, #FBBF24); }
.me-text {
  font-size: 0.62rem; font-weight: 500; letter-spacing: 0.22em;
  text-transform: uppercase; color: #C9A84C;
}
.modal-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.9rem; font-weight: 600; line-height: 1.1;
  letter-spacing: -0.02em; color: #F0EBE0; margin-bottom: 0.6rem;
}
.modal-title em { font-style: italic; font-weight: 300; color: #9C7A20; }
.modal-subtitle {
  font-size: 0.88rem;
  color: #8A92A6;
  letter-spacing: 0.03em;
  line-height: 1.6;
  background: rgba(212,175,55,0.06);
  border: 1px solid rgba(212,175,55,0.1);
  border-radius: 2px;
  padding: 0.45rem 0.8rem;
  display: inline-block;
}
.modal-trust-pills {
  display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 1.25rem;
}
.mtp {
  font-size: 0.68rem; font-weight: 500; letter-spacing: 0.08em;
  color: #7A8499; border: 1px solid rgba(255,255,255,0.1);
  padding: 0.35rem 0.8rem; border-radius: 2px; background: rgba(255,255,255,0.04);
}

/* Close button */
.modal-close {
  position: absolute; top: 1.4rem; right: 1.4rem;
  width: 32px; height: 32px;
  background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);
  border-radius: 2px; cursor: pointer; color: #3E4455;
  display: flex; align-items: center; justify-content: center;
  font-size: 0.85rem; transition: background 0.2s, color 0.2s, border-color 0.2s;
}
.modal-close:hover { background: rgba(212,175,55,0.08); color: #C9A84C; border-color: rgba(212,175,55,0.3); }
.modal-close:disabled { opacity: 0.4; cursor: not-allowed; }

/* Form body */
.modal-body { padding: 1.8rem 2.2rem 2.2rem; }

/* Field */
.field-wrap { margin-bottom: 1.35rem; }
.field-label {
  display: flex; align-items: center; justify-content: space-between;
  margin-bottom: 0.55rem;
}
.field-label-text {
  font-size: 0.7rem; font-weight: 500; letter-spacing: 0.12em;
  text-transform: uppercase; color: #4A5060;
}
.field-required { font-size: 0.62rem; color: #9C7A20; letter-spacing: 0.08em; }
.field-optional { font-size: 0.62rem; color: #2E3340; letter-spacing: 0.06em; font-style: italic; }

.field-input {
  width: 100%; background: rgba(255,255,255,0.025);
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 2px; padding: 0.85rem 1rem;
  font-family: 'DM Sans', sans-serif; font-size: 0.85rem;
  color: #C9C5BC; outline: none;
  transition: border-color 0.25s, background 0.25s, box-shadow 0.25s;
  appearance: none; -webkit-appearance: none;
}
.field-input::placeholder { color: #2A2F3B; }
.field-input:hover { border-color: rgba(255,255,255,0.12); background: rgba(255,255,255,0.03); }
.field-input:focus {
  border-color: rgba(212,175,55,0.45);
  background: rgba(212,175,55,0.03);
  box-shadow: 0 0 0 3px rgba(212,175,55,0.07);
}
.field-input.has-error {
  border-color: rgba(239,68,68,0.45);
  background: rgba(239,68,68,0.03);
}
.field-input.has-error:focus {
  box-shadow: 0 0 0 3px rgba(239,68,68,0.06);
}
.field-input option { background: #0C0E14; color: #C9C5BC; }

.field-error {
  margin-top: 0.4rem; font-size: 0.67rem; color: #EF4444;
  letter-spacing: 0.04em; display: flex; align-items: center; gap: 0.35rem;
}
.field-error::before { content: '⚠'; font-size: 0.6rem; }

/* Divider */
.form-divider {
  height: 1px; background: rgba(255,255,255,0.04); margin: 1.5rem 0;
}

/* Submit button */
.btn-modal-submit {
  width: 100%; position: relative; overflow: hidden;
  display: flex; align-items: center; justify-content: center; gap: 0.65rem;
  background: linear-gradient(110deg, #9C7A20 0%, #D4AF37 40%, #FBBF24 60%, #D4AF37 80%, #9C7A20 100%);
  background-size: 250% 100%;
  color: #06080C;
  font-family: 'DM Sans', sans-serif; font-weight: 500; font-size: 0.82rem;
  letter-spacing: 0.1em; text-transform: uppercase;
  padding: 1.15rem 2rem; border: none; border-radius: 2px; cursor: pointer;
  transition: background-position 0.5s ease, box-shadow 0.3s, transform 0.2s;
  box-shadow: 0 4px 30px rgba(212,175,55,0.15);
  margin-top: 0.25rem;
}
.btn-modal-submit:not(:disabled):hover {
  background-position: 100% 0;
  box-shadow: 0 0 0 3px rgba(212,175,55,0.18), 0 8px 40px rgba(212,175,55,0.3);
  transform: translateY(-1px);
}
.btn-modal-submit:disabled { opacity: 0.5; cursor: not-allowed; transform: none; }
.btn-modal-submit .submit-arrow { font-size: 1rem; transition: transform 0.3s; }
.btn-modal-submit:not(:disabled):hover .submit-arrow { transform: translateX(4px); }

.form-fine-print {
  margin-top: 1rem; text-align: center;
  font-size: 0.7rem; color: #5A6275; letter-spacing: 0.06em;
}

/* API error */
.api-error {
  background: rgba(239,68,68,0.06); border: 1px solid rgba(239,68,68,0.2);
  border-radius: 2px; padding: 0.85rem 1rem; margin-bottom: 1rem;
  font-size: 0.75rem; color: #EF4444; letter-spacing: 0.02em;
}

/* Success state */
.modal-success {
  padding: 3.5rem 2.2rem;
  display: flex; flex-direction: column; align-items: center; text-align: center;
}
.success-icon-wrap {
  width: 72px; height: 72px; border-radius: 2px; margin-bottom: 1.75rem;
  border: 1px solid rgba(212,175,55,0.3);
  background: rgba(212,175,55,0.06);
  display: flex; align-items: center; justify-content: center;
  position: relative;
  animation: success-pulse 2s ease-in-out infinite;
}
@keyframes success-pulse {
  0%,100% { box-shadow: 0 0 0 0 rgba(212,175,55,0.2); }
  50% { box-shadow: 0 0 0 10px rgba(212,175,55,0); }
}
.success-icon-wrap::before {
  content: ''; position: absolute; top: -1px; left: 0; right: 0; height: 1px;
  background: linear-gradient(90deg, transparent, #D4AF37, transparent);
}
.success-checkmark { font-size: 1.8rem; line-height: 1; }
.success-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.9rem; font-weight: 600; color: #F0EBE0;
  margin-bottom: 0.6rem; letter-spacing: -0.01em;
}
.success-sub { font-size: 0.88rem; color: #7A8499; line-height: 1.7; max-width: 30ch; }

/* Spinner */
.spinner {
  width: 16px; height: 16px; border: 2px solid rgba(6,8,12,0.3);
  border-top-color: #06080C; border-radius: 50%;
  animation: spin 0.7s linear infinite; flex-shrink: 0;
}
@keyframes spin { to { transform: rotate(360deg); } }
`;