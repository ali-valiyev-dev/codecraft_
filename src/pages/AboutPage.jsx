import { useNavigate } from "react-router-dom";
import {
  Button,
  Container,
  ImagesGrid,
  Loading,
  MemberCard,
  SectionHeader,
} from "../components";
import animate from "../utils/animate";
import { useGSAP } from "@gsap/react";
import { useFetchData } from "../hooks";
import { TechPartners } from "../sections";

const AboutPage = () => {
  const { data: about, loading, error } = useFetchData("about", "*");

  const aboutContent = about[0];

  const navigate = useNavigate();

  useGSAP(() => {
    if (!loading) {
      animate([".anim-about-page-content"]);
    }
  }, [loading]);

  if (error) return null;

  if (loading) return <Loading />;

  return (
    <Container>
      <div className="space-y-16 mt-20">
        {/* about company */}
        <div className="flex flex-col items-center justify-center gap-6 md:gap-8">
          {/* header */}
          <div className="anim-about-page-content">
            <SectionHeader
              title="About Us"
              subtitle="Epic Beginnings: Unveiling Our Essence, Crafting Futures with Excellence."
            />
          </div>

          {/* about company content */}
          <div className="w-full flex flex-col lg:flex-row gap-6 xl:gap-12">
            {/* leftside image content */}
            <div className="w-full lg:w-1/2 rounded-lg overflow-hidden">
              <ImagesGrid />
            </div>

            {/* rightside text content */}
            <div className="w-full lg:w-1/2 flex flex-col space-y-6">
              {/* text content */}
              <article className="text-neutral-800 text-base md:text-lg lg:text-xl flex flex-col gap-3 md:gap-6">
                <h1 className="anim-about-page-content text-2xl md:text-3xl xl:text-4xl text-primary-blue font-semibold">
                  {aboutContent.title}
                </h1>

                <p className="anim-about-page-content">
                  {aboutContent.history}
                </p>

                <div className="anim-about-page-content">
                  <h3 className="font-semibold text-primary-blue text-lg md:text-xl">
                    Our Mission
                  </h3>
                  <p>{aboutContent.mission}</p>
                </div>

                <div className="anim-about-page-content">
                  <h3 className="font-semibold text-primary-blue text-lg md:text-xl">
                    Our Vision
                  </h3>
                  <p>{aboutContent.vision}</p>
                </div>
              </article>

              {/* button */}
              <div className="anim-about-page-content">
                <Button
                  title="Reach Out To Us"
                  icon="lucide:arrow-right"
                  onClick={() => {
                    navigate("/contacts");
                  }}
                  alt="Navigate to Contacts page"
                />
              </div>
            </div>
          </div>
        </div>

        {/* team */}
        <div className="space-y-6 md:space-y-12">
          {/* team section header */}
          <div className="anim-about-page-content">
            <SectionHeader
              title="Management"
              subtitle="Meet Our Visionary Leaders Driving Innovation and Our Path to Success."
            />
          </div>

          <div className="flex flex-wrap items-stretch justify-center gap-5">
            {aboutContent.team.map(member => (
              <MemberCard
                key={member.id}
                {...member}
              />
            ))}
          </div>
        </div>

        {/* tech partners */}
        <TechPartners />
      </div>
    </Container>
  );
};

export default AboutPage;
