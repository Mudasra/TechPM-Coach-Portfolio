const PainCard = ({ p, index, visible }) => (
  <article
    className={`pain-card ${visible ? "vis" : ""}`}
    role="listitem"
    aria-label={p.title}
    style={{ transitionDelay: `${index * 0.12}s` }}
  >
    {/* Top accent line */}
    <div
      className="pain-card-line"
      style={{ background: `linear-gradient(90deg, ${p.accentColor}, transparent)` }}
      aria-hidden="true"
    />

    {/* Left border color per card */}
    <style>{`.pain-card:nth-child(${index + 1})::before { background: ${p.accentColor}; opacity: 0.5; }`}</style>

    {/* Background glyph */}
    <div className="pain-card-glyph" aria-hidden="true" style={{ color: p.glyphColor }}>
      {p.glyph}
    </div>

    {/* Index */}
    <span className="pain-index" style={{ color: p.accentColor }} aria-hidden="true">
      {p.index}
    </span>

    {/* Title */}
    <h3 className="pain-title">{p.title}</h3>

    {/* Description */}
    <p className="pain-desc">{p.description}</p>

    {/* Highlights */}
    <ul className="pain-highlights" aria-label="Key pain points">
      {p.highlights.map((h, j) => (
        <li key={j} className="pain-hl">
          <span
            className="pain-hl-dot"
            style={{ background: p.accentColor, opacity: 0.5 }}
            aria-hidden="true"
          />
          {h}
        </li>
      ))}
    </ul>
  </article>
);

export default PainCard;