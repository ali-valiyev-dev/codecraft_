import { useGSAP } from "@gsap/react";
import { Container, Loading, SectionHeader } from "../components";
import { TestimonialItem } from "../components";
import animate from "../utils/animate";
import { useFetchData } from "../hooks";

const Testimonials = () => {
  const {
    data: testimonials,
    loading,
    error,
  } = useFetchData("testimonials", "*");

  useGSAP(() => {
    if (!loading) {
      animate([".anim-endrs-title"]);
    }
  }, [loading]);

  if (error) return null;

  if (loading) return <Loading />;

  return (
    <Container>
      <div className="flex flex-col items-center justify-center gap-12 xl:gap-16">
        {/* header content */}
        <div className="anim-endrs-title">
          <SectionHeader
            title="Testimonials"
            subtitle="Client Voices: Real Stories of Success and Trust in Our Solutions."
          />
        </div>

        {/* main content */}
        <div className="w-full flex justify-center flex-wrap gap-6 ">
          {testimonials.map(testimonial => (
            <TestimonialItem
              key={testimonial._id}
              {...testimonial}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Testimonials;
