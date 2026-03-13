// components/BookingForm.jsx
import React from "react";
import SubmitButton from "./SubmitButton";

const BookingForm = ({
  form,
  touched,
  errors,
  apiError,
  isLoading,
  onChange,
  onBlur,
  onSubmit,
}) => {
  const inputClass = (field) =>
    `form-input${touched[field] && errors[field] ? " err" : ""}`;

  const selectClass = () =>
    `form-select${form.experience ? " has-value" : ""}${
      touched.experience && errors.experience ? " err" : ""
    }`;

  return (
    <form onSubmit={onSubmit} noValidate>
      {/* Name + Email */}
      <div className="field-row">
        <div className="form-field">
          <label className="form-label" htmlFor="bm-name">
            Full Name <span>*</span>
          </label>
          <input
            id="bm-name" name="name" type="text"
            value={form.name} onChange={onChange} onBlur={onBlur}
            placeholder="Jane Smith"
            className={inputClass("name")}
            aria-invalid={touched.name && !!errors.name}
            aria-describedby={touched.name && errors.name ? "err-name" : undefined}
          />
          {touched.name && errors.name && (
            <p className="form-error" id="err-name">{errors.name}</p>
          )}
        </div>

        <div className="form-field">
          <label className="form-label" htmlFor="bm-email">
            Work Email <span>*</span>
          </label>
          <input
            id="bm-email" name="email" type="email"
            value={form.email} onChange={onChange} onBlur={onBlur}
            placeholder="jane@company.com"
            className={inputClass("email")}
            aria-invalid={touched.email && !!errors.email}
          />
          {touched.email && errors.email && (
            <p className="form-error">{errors.email}</p>
          )}
        </div>
      </div>

      {/* Role + Experience */}
      <div className="field-row">
        <div className="form-field">
          <label className="form-label" htmlFor="bm-role">
            Current Title <span>*</span>
          </label>
          <input
            id="bm-role" name="role" type="text"
            value={form.role} onChange={onChange} onBlur={onBlur}
            placeholder="Sr. Marketing Manager"
            className={inputClass("role")}
          />
          {touched.role && errors.role && (
            <p className="form-error">{errors.role}</p>
          )}
        </div>

        <div className="form-field">
          <label className="form-label" htmlFor="bm-exp">
            Years in Marketing <span>*</span>
          </label>
          <select
            id="bm-exp" name="experience"
            value={form.experience} onChange={onChange} onBlur={onBlur}
            className={selectClass()}
          >
            <option value="">Select range</option>
            <option value="2-4">2–4 years</option>
            <option value="5-7">5–7 years</option>
            <option value="8-10">8–10 years</option>
            <option value="10+">10+ years</option>
          </select>
          {touched.experience && errors.experience && (
            <p className="form-error">{errors.experience}</p>
          )}
        </div>
      </div>

      {/* Goal */}
      <div className="form-field">
        <label className="form-label" htmlFor="bm-goal">
          Your #1 goal from this call
          <span style={{ color: "#2A2F3B", marginLeft: "4px", textTransform: "none", letterSpacing: 0 }}>
            (optional)
          </span>
        </label>
        <textarea
          id="bm-goal" name="goal" rows={3}
          value={form.goal} onChange={onChange}
          placeholder="e.g. I want to understand if I'm a real candidate for PM roles and what to focus on first…"
          className="form-textarea"
        />
      </div>

      {apiError && (
        <div className="api-error" role="alert">{apiError}</div>
      )}

      <div className="form-divider" aria-hidden="true" />

      <SubmitButton isLoading={isLoading} />

      <p className="form-note">No spam · No obligation · Unsubscribe anytime</p>
    </form>
  );
};

export default BookingForm;