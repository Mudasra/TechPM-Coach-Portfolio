import SkeletonCard from "./Skeletoncard";
import TestimonialCard from "./Testimonialcard";

const TestimonialsGrid = ({ status, testimonials, vis }) => (
  <>
    <div className="testi-grid">
      {status === "loading"
        ? [0, 1, 2].map((i) => (
            <div
              key={i}
              className={`tc-wrap ${vis ? "vis" : ""}`}
            >
              <SkeletonCard />
            </div>
          ))
        : testimonials.map((t, i) => (
            <TestimonialCard key={t.id} t={t} index={i} visible={vis} />
          ))}
    </div>

    {status === "failed" && (
      <p className="testi-error" role="alert">
        Could not load testimonials. Please refresh the page.
      </p>
    )}
  </>
);

export default TestimonialsGrid;