import { socials } from "./Footerdata";

const FooterBrand = () => (
  <div>
    <div className="footer-brand-logo">
      <div className="logo-mark" aria-hidden="true">JM</div>
      <span className="logo-name">Jordan Mitchell</span>
    </div>
    <p className="footer-tagline">
      Helping marketing professionals land their first tech PM role — without a CS degree.
    </p>
    <div className="footer-socials" aria-label="Social media links">
      {socials.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Follow on ${s.label}`}
          className="social-btn"
        >
          {s.icon}
        </a>
      ))}
    </div>
  </div>
);

export default FooterBrand;