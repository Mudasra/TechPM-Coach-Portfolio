const FAQHeader = ({ visible }) => (
  <div className={`faq-header ${visible ? "vis" : ""}`}>
    <div className="faq-eyebrow" aria-hidden="true">
      <div className="fe-line" />
      <span className="fe-text">Questions & Answers</span>
      <div className="fe-line-r" />
    </div>
    <h2 className="faq-h2">
      Questions You're <em>Probably</em>
      <br />Thinking Right Now
    </h2>
    <p className="faq-sub">
      Every doubt is valid, and every one has a clear answer.
    </p>
  </div>
);

export default FAQHeader;