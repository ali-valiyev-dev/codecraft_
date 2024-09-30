import { Container, SectionHeader } from "../components";
import { TestimonialItem } from "../components";
import { TESTIMONIALS } from "../constants";

const Testimonials = () => {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center gap-12 xl:gap-16">
        {/* header content */}
        <SectionHeader
          title="Testimonials"
          subtitle="Voices of Trust: Client Stories, Testimonials that Illuminate Our Shared Success."
        />

        {/* main content */}
        <div className="w-full flex justify-center flex-wrap gap-6 overflow-hidden">
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
