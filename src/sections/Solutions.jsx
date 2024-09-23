import { Container, SolutionCard } from "../components";
import { solutions } from "../constants";

const Solutions = () => {
  return (
    <Container id="solutions">
      <div className="flex flex-col items-center justify-center gap-16">
        <div className="flex flex-wrap items-stretch justify-center gap-6">
          {solutions.map((solution, index) => (
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
