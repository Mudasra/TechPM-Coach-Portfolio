const HamburgerButton = ({ menuOpen, onToggle }) => (
  <button
    className="nav-hamburger"
    onClick={onToggle}
    aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
    aria-expanded={menuOpen}
    aria-controls="mobile-menu"
  >
    <span className={`hb-bar ${menuOpen ? "open-1" : ""}`} />
    <span className={`hb-bar ${menuOpen ? "open-2" : ""}`} />
    <span className={`hb-bar ${menuOpen ? "open-3" : ""}`} />
  </button>
);

export default HamburgerButton;