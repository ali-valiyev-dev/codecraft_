import { useGSAP } from "@gsap/react";
import { Container, SectionHeader } from "../components";
import { TestimonialItem } from "../components";
import { TESTIMONIALS } from "../constants";
import animate from "../utils/animations";

const Testimonials = () => {
  useGSAP(() => {
    animate([".anim-endrs-title"]);
  }, []);

  return (
    <Container>
      <div className="flex flex-col items-center justify-center gap-12 xl:gap-16">
        {/* header content */}
        <div className="anim-endrs-title">
          <SectionHeader
            title="Testimonials"
            subtitle="Voices of Trust: Client Stories, Testimonials that Illuminate Our Shared Success."
          />
        </div>

        {/* main content */}
        <div className="w-full flex justify-center flex-wrap gap-6 ">
          {TESTIMONIALS.map((testimonial, index) => (
            <TestimonialItem
              key={index}
              {...testimonial}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Testimonials;
