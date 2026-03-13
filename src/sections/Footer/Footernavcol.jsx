const FooterNavCol = ({ title, links, ariaLabel }) => (
  <nav aria-label={ariaLabel}>
    <div className="footer-col-title">{title}</div>
    <ul className="footer-nav-list">
      {links.map((l) => (
        <li key={l.label}>
          <a href={l.href}>{l.label}</a>
        </li>
      ))}
    </ul>
  </nav>
);

export default FooterNavCol;