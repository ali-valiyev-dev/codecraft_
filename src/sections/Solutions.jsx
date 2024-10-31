import { useGSAP } from "@gsap/react";
import { Container, Loading, SectionHeader, SolutionCard } from "../components";
import { useFetchData } from "../hooks";
import animate from "../utils/animate";

const Solutions = () => {
  const { data, loading, error } = useFetchData("solutions", "*");

  useGSAP(() => {
    if (!loading) {
      animate([".anim-solutions-title"]);
    }
  }, [loading]);

  if (error) return null;

  if (loading) return <Loading />;

  return (
    <Container>
      <div className="flex flex-col items-center justify-center gap-12 md:gap-16">
        <div className="anim-solutions-title">
          <SectionHeader
            title="IT Solutions"
            subtitle="Excellence Redefined: Unleashing Tailored Solutions for Your Success Journey."
          />
        </div>
        <div className="flex flex-wrap items-stretch justify-center gap-4 lg:gap-6 xl:gap-8">
          {data.map(solution => (
            <SolutionCard
              key={solution._id}
              {...solution}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Solutions;
