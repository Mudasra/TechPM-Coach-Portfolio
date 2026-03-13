import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { closeModal, selectFormError, selectFormStatus, selectIsModalOpen, submitLeadForm } from "../../redux/formSlice";
import { MODAL_STYLES } from "./Modalstyles";
import ModalCorners from "./Modalcorners";
import ModalCloseButton from "./Modalclosebutton";
import ModalHeader from "./Modalheader";
import ModalSuccess from "./Modalsuccess";
import BookingForm from "./Bookingform";

const BookingModal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isOpen = useSelector(selectIsModalOpen);
  const status = useSelector(selectFormStatus);
  const error = useSelector(selectFormError);
  const firstFieldRef = useRef(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "",
    experience: "",
    goal: "",
  });
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (status === "success") {
      const t = setTimeout(() => {
        dispatch(closeModal());
        navigate("/thank-you");
      }, 1400);
      return () => clearTimeout(t);
    }
  }, [status, dispatch, navigate]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    if (isOpen) setTimeout(() => firstFieldRef.current?.focus(), 100);
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const validate = (data) => {
    const e = {};
    if (!data.name.trim()) e.name = "Name is required";
    if (!data.email.trim() || !/\S+@\S+\.\S+/.test(data.email))
      e.email = "Valid email required";
    if (!data.role.trim()) e.role = "Current role is required";
    if (!data.experience) e.experience = "Please select your experience";
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    if (touched[name]) setErrors(validate({ ...form, [name]: value }));
  };

  const handleBlur = (e) => {
    setTouched((p) => ({ ...p, [e.target.name]: true }));
    setErrors(validate(form));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const allTouched = { name: true, email: true, role: true, experience: true };
    setTouched(allTouched);
    const errs = validate(form);
    setErrors(errs);
    if (!Object.keys(errs).length) dispatch(submitLeadForm(form));
  };

  const handleClose = () => {
    if (status !== "loading") dispatch(closeModal());
  };

  if (!isOpen) return null;

  return (
    <>
      <style>{MODAL_STYLES}</style>

      <div
        className="modal-overlay"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Backdrop */}
        <div
          className="modal-backdrop"
          onClick={handleClose}
          aria-hidden="true"
        />

        {/* Panel */}
        <div className="modal-panel">
          <ModalCorners />

          {/* Top shimmer */}
          <div className="modal-topline" aria-hidden="true" />

          <ModalCloseButton
            onClick={handleClose}
            disabled={status === "loading"}
          />

          <ModalHeader />

          {status === "success" ? (
            <ModalSuccess />
          ) : (
            <BookingForm
              form={form}
              touched={touched}
              errors={errors}
              apiError={error}
              isLoading={status === "loading"}
              firstFieldRef={firstFieldRef}
              onChange={handleChange}
              onBlur={handleBlur}
              onSubmit={handleSubmit}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default BookingModal;