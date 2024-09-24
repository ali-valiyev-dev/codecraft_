import { Container, SectionHeader, SolutionCard } from "../components";
import { SOLUTIONS } from "../constants";

const Solutions = () => {
  return (
    <Container id="solutions">
      <div className="flex flex-col items-center justify-center gap-16">
        <SectionHeader
          title="IT Solutions"
          subtitle="Excellence Redefined: Unleashing Tailored Solutions for Your Success Journey."
        />

        <div className="flex flex-wrap items-stretch justify-center gap-6">
          {SOLUTIONS.map((solution, index) => (
            <SolutionCard
              key={index}
              {...solution}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Solutions;
