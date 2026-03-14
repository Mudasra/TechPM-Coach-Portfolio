import React, { useState, useEffect } from "react";
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
  const isOpen   = useSelector(selectIsModalOpen);
  const status   = useSelector(selectFormStatus);
  const error    = useSelector(selectFormError);

  const [form,    setForm]    = useState({ name: "", email: "", role: "", experience: "", goal: "" });
  const [touched, setTouched] = useState({});
  const [errors,  setErrors]  = useState({});

  // Redirect on success
  useEffect(() => {
    if (status === "success") {
      const t = setTimeout(() => { dispatch(closeModal()); navigate("/thank-you"); }, 1400);
      return () => clearTimeout(t);
    }
  }, [status, dispatch, navigate]);

  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const validate = (d) => {
    const e = {};
    if (!d.name.trim())  e.name = "Name is required";
    if (!d.email.trim() || !/\S+@\S+\.\S+/.test(d.email)) e.email = "Valid email is required";
    if (!d.role.trim())  e.role = "Current role is required";
    if (!d.experience)   e.experience = "Please select experience level";
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
    setTouched({ name: true, email: true, role: true, experience: true });
    const errs = validate(form);
    setErrors(errs);
    if (!Object.keys(errs).length) dispatch(submitLeadForm(form));
  };

  const handleClose = () => { if (status !== "loading") dispatch(closeModal()); };

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
        <div className="modal-backdrop" onClick={handleClose} aria-hidden="true" />

        {/* Modal box */}
        <div className="modal-box">
          <div className="modal-noise" aria-hidden="true" />
          <div className="modal-glow"  aria-hidden="true" />

          <ModalCorners />
          <ModalCloseButton onClose={handleClose} disabled={status === "loading"} />
          <ModalHeader />

          <div className="modal-body">
            {status === "success" ? (
              <ModalSuccess />
            ) : (
              <BookingForm
                form={form}
                touched={touched}
                errors={errors}
                apiError={error}
                isLoading={status === "loading"}
                onChange={handleChange}
                onBlur={handleBlur}
                onSubmit={handleSubmit}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
