const DesktopNav = ({ navLinks, onNavClick }) => (
  <nav className="nav-links" aria-label="Main navigation">
    {navLinks.map((link) => (
      <button
        key={link.label}
        onClick={() => onNavClick(link.href)}
        className="nav-link"
        aria-label={`Go to ${link.label} section`}
      >
        {link.label}
      </button>
    ))}
  </nav>
);

export default DesktopNav;