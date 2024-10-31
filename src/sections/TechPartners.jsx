import SectionHeader from "../components/SectionHeader";
import animate from "../utils/animate";
import { useFetchData } from "../hooks";
import Loading from "../components/Loading";
import { Container, TechPartner } from "../components";
import { useGSAP } from "@gsap/react";

const TechPartners = () => {
  const {
    data: techPartners,
    loading,
    error,
  } = useFetchData("tech_partners", "*");

  useGSAP(() => {
    if (!loading) {
      animate([".anim-partners"]);
    }
  }, [loading]);

  if (error) return null;

  if (loading) return <Loading />;

  return (
    <Container>
      <div className="flex flex-col items-center gap-12 xl:gap-16">
        {/* section header */}
        <div className="anim-partners">
          <SectionHeader
            title="Our Tech Partners"
            subtitle="Global Expertise: Collaborations that Drive Growth and IT Success."
          />
        </div>

        {/* partners */}
        <div className="anim-partners w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-8 p-6 sm:p-8 md:p-10 bg-neutral-100 rounded-lg">
          {techPartners.map(techPartner => (
            <TechPartner
              key={techPartner._id}
              {...techPartner}
            />
          ))}
        </div>
        {/* partners */}
      </div>
    </Container>
  );
};

export default TechPartners;
