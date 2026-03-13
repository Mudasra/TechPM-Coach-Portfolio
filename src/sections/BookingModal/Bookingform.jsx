import React from "react";
import Field from "./Field";
import SubmitButton from "./SubmitButton";

const BookingForm = ({
  form,
  touched,
  errors,
  apiError,
  isLoading,
  firstFieldRef,
  onChange,
  onBlur,
  onSubmit,
}) => {
  const inputClass = (field) =>
    `field-input${touched[field] && errors[field] ? " has-error" : ""}`;

  return (
    <div className="modal-body">
      <form onSubmit={onSubmit} noValidate>

        <Field id="name" label="Full Name" required touched={touched.name} error={errors.name}>
          <input
            ref={firstFieldRef}
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={onChange}
            onBlur={onBlur}
            placeholder="Jane Smith"
            className={inputClass("name")}
            aria-invalid={touched.name && !!errors.name}
            aria-describedby={touched.name && errors.name ? "name-err" : undefined}
          />
        </Field>

        <Field id="email" label="Work Email" required touched={touched.email} error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={onChange}
            onBlur={onBlur}
            placeholder="jane@company.com"
            className={inputClass("email")}
            aria-invalid={touched.email && !!errors.email}
          />
        </Field>

        <Field id="role" label="Current Job Title" required touched={touched.role} error={errors.role}>
          <input
            id="role"
            name="role"
            type="text"
            value={form.role}
            onChange={onChange}
            onBlur={onBlur}
            placeholder="e.g. Senior Marketing Manager"
            className={inputClass("role")}
          />
        </Field>

        <Field
          id="experience"
          label="Years of Marketing Experience"
          required
          touched={touched.experience}
          error={errors.experience}
        >
          <select
            id="experience"
            name="experience"
            value={form.experience}
            onChange={onChange}
            onBlur={onBlur}
            className={inputClass("experience")}
          >
            <option value="">Select level</option>
            <option value="2-4">2–4 years</option>
            <option value="5-7">5–7 years</option>
            <option value="8-10">8–10 years</option>
            <option value="10+">10+ years</option>
          </select>
        </Field>

        <div className="form-divider" aria-hidden="true" />

        <Field id="goal" label="Your #1 Goal From This Call" optional>
          <textarea
            id="goal"
            name="goal"
            rows={3}
            value={form.goal}
            onChange={onChange}
            placeholder="e.g. I want to know if I'm a realistic PM candidate and what to focus on first…"
            className="field-input"
            style={{ resize: "none" }}
          />
        </Field>

        {apiError && (
          <div className="api-error" role="alert">{apiError}</div>
        )}

        <SubmitButton isLoading={isLoading} />

        <p className="form-fine-print">No spam · No obligation · Cancel anytime</p>
      </form>
    </div>
  );
};

export default BookingForm;