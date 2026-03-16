import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TestimonialsBackground from "./Testimonialsbackground";
import TestimonialsHeader from "./Testimonialsheader";
import TestimonialsGrid from "./Testimonialsgrid";
import { fetchTestimonials, selectTestimonials, selectTestimonialsStatus } from "../../redux/testimonialsSlice";
import "../../../styles/Testimonials.css"

const Testimonials = () => {
  const dispatch = useDispatch();
  const testimonials = useSelector(selectTestimonials);
  const status = useSelector(selectTestimonialsStatus);
  const sectionRef = useRef(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    if (status === "idle") dispatch(fetchTestimonials());
  }, [status, dispatch]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVis(true)
          obs.disconnect()
        }
      },
      { threshold: 0, rootMargin: '0px 0px -50px 0px' }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="testimonials"
      className="testi-section"
      aria-label="Client testimonials"
      ref={sectionRef}
    >
      <TestimonialsBackground />
      <div className="testi-inner">
        <TestimonialsHeader visible={vis} />
        <TestimonialsGrid status={status} testimonials={testimonials} vis={vis} />
      </div>
    </section>
  );
};

export default Testimonials;