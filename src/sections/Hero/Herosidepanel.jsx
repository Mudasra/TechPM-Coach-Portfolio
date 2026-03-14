const HeroSidePanel = ({ visible }) => (
  <aside className={`side-panel ${visible ? "vis" : ""}`} aria-label="Client success stories">
    <div className="proof-card">
      <div className="pc-row">
        <div className="pc-avatar" style={{ background: "linear-gradient(135deg,#4F46E5,#7C3AED)" }}>SC</div>
        <div>
          <div className="pc-name">Sarah Chen</div>
          <div className="pc-role">Now: PM @ Stripe</div>
        </div>
      </div>
      <p className="pc-quote">"3 offers in 5 months. Stripe was my dream, I thought it was impossible."</p>
      <div className="pc-stars">★★★★★</div>
    </div>

    <div className="proof-card">
      <div className="pc-row">
        <div className="pc-avatar" style={{ background: "linear-gradient(135deg,#059669,#047857)" }}>MW</div>
        <div>
          <div className="pc-name">Marcus W.</div>
          <div className="pc-role">Now: APM @ Shopify</div>
        </div>
      </div>
      <p className="pc-quote">"Zero coding background. Still landed it. The system works."</p>
      <div className="pc-stars">★★★★★</div>
    </div>

    <div className="spots-pill" aria-live="polite">
      <div className="sp-dot" aria-hidden="true" />
      <span className="sp-text">5 spots remaining this month</span>
    </div>
  </aside>
);

export default HeroSidePanel;