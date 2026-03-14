const FooterBottom = ({ year }) => (
  <div className="footer-bottom">
    <p className="footer-copy">© {year} Jordan Mitchell Coaching. All rights reserved.</p>
    <div className="footer-legal" aria-label="Legal links">
      <a href="#privacy">Privacy Policy</a>
      <a href="#terms">Terms of Service</a>
    </div>
    <div className="footer-made">
      <span className="footer-made-diamond" aria-hidden="true">◆</span>
      Developed & Coded by Mudasra
    </div>
  </div>
);

export default FooterBottom;