const MobileDrawer = ({ menuOpen, navLinks, onClose, onNavClick, onCtaClick }) => (
  <>
    {/* Mobile backdrop */}
    {menuOpen && (
      <div
        className="mob-backdrop"
        onClick={onClose}
        aria-hidden="true"
      />
    )}

    {/* Mobile drawer */}
    <div
      id="mobile-menu"
      className={`mob-drawer ${menuOpen ? "open" : "closed"}`}
      role="dialog"
      aria-label="Mobile navigation menu"
      aria-modal="true"
    >
      <div className="mob-drawer-noise" aria-hidden="true" />
      <div className="mob-drawer-glow" aria-hidden="true" />
      <div className="mob-drawer-top-line" aria-hidden="true" />

      {/* Drawer header */}
      <div className="mob-header">
        <div className="mob-logo">
          <div className="mob-logo-mark" aria-hidden="true">JM</div>
          <div>
            <div className="mob-logo-name">Jordan Mitchell</div>
            <div className="mob-logo-sub">Tech Career Coach</div>
          </div>
        </div>
        <button
          className="mob-close"
          onClick={onClose}
          aria-label="Close menu"
        >
          ✕
        </button>
      </div>

      {/* Nav links */}
      <nav className="mob-nav" aria-label="Mobile navigation">
        <p className="mob-nav-label">Navigate</p>
        {navLinks.map((link) => (
          <button
            key={link.label}
            className="mob-nav-item"
            onClick={() => onNavClick(link.href)}
            aria-label={`Go to ${link.label} section`}
          >
            {link.label}
            <span className="mob-nav-arrow" aria-hidden="true">→</span>
          </button>
        ))}
      </nav>

      {/* Drawer footer CTA */}
      <div className="mob-footer">
        <div className="mob-spots" aria-live="polite">
          <span className="mob-spots-dot" aria-hidden="true" />
          Only 5 spots remaining this month
        </div>
        <button
          className="btn-mob-gold"
          onClick={onCtaClick}
          aria-label="Book your free career strategy call"
        >
          Book Your Free Call →
        </button>
      </div>
    </div>
  </>
);

export default MobileDrawer;