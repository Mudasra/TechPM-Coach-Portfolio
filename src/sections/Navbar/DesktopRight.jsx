const DesktopRight = ({ isLandingPage, onCtaClick }) => (
  <div className="nav-right">
    <div className="nav-spots" aria-live="polite">
      <span className="nav-spots-dot" aria-hidden="true" />
      5 spots left
    </div>
    <button
      onClick={onCtaClick}
      className="btn-nav-gold"
      aria-label={
        isLandingPage
          ? "Book your free career strategy call"
          : "Return to homepage"
      }
    >
      {isLandingPage ? "Book Free Call" : "Back to Homepage"}
      <span className="bng-arrow" aria-hidden="true">→</span>
    </button>
  </div>
);

export default DesktopRight;