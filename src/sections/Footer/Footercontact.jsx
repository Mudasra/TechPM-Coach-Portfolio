const FooterContact = () => (
  <div>
    <div className="footer-col-title">Contact</div>

    <div className="contact-item">
      <span className="contact-icon" aria-hidden="true">
        <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="M2 7l10 7 10-7" strokeLinecap="round" />
        </svg>
      </span>
      <div className="contact-text">
        <a href="mailto:hello@jordanmitchell.co" aria-label="Email Jordan Mitchell">
          hello@jordanmitchell.co
        </a>
      </div>
    </div>

    <div className="contact-item">
      <span className="contact-icon" aria-hidden="true">
        <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <path d="M16 2v4M8 2v4M3 10h18" strokeLinecap="round" />
        </svg>
      </span>
      <div className="contact-text">Mon–Fri, 9am–5pm EST</div>
    </div>

    <div className="contact-item">
      <span className="contact-icon" aria-hidden="true">
        <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
          <circle cx="12" cy="9" r="2.5" />
        </svg>
      </span>
      <div className="contact-text">
        San Francisco, CA<br />Remote-first coaching
      </div>
    </div>
  </div>
);

export default FooterContact;