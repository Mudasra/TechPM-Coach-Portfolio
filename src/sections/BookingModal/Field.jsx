import React from "react";

const Field = ({ label, required, optional, error, touched, children }) => (
  <div className="field-wrap">
    <div className="field-label">
      <span className="field-label-text">{label}</span>
      {required && <span className="field-required">Required</span>}
      {optional && <span className="field-optional">Optional</span>}
    </div>
    {children}
    {touched && error && (
      <p className="field-error" role="alert">{error}</p>
    )}
  </div>
);

export default Field;