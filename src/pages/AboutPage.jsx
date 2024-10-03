import { useNavigate } from "react-router-dom";
import {
  Button,
  Container,
  MemberCard,
  SectionHeader,
  TechPartners,
} from "../components";
import { TEAM } from "../constants";

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <div className="space-y-16 mt-20">
        {/* main content */}
        <div className="flex flex-col items-center justify-center gap-6 md:gap-8">
          {/* section header */}
          <SectionHeader
            title="About Us"
            subtitle="Epic Beginnings: Unveiling Our Essence, Crafting Futures with Excellence."
          />

          {/* main about us content */}
          <div className="w-full flex flex-col lg:flex-row gap-6 xl:gap-12">
            {/* leftside image content */}
            <div className="w-full lg:w-1/2 rounded-lg overflow-hidden">
              {/* images */}
              <div className="flex gap-2">
                <div className="flex flex-col gap-2 w-1/2">
                  {/* top small image */}
                  <img
                    src="/team-1.jpg"
                    alt="Rabalon team"
                    className="w-full h-1/2 object-cover rounded-sm"
                  />
                  {/* bottom small image */}
                  <img
                    src="/team-3.jpg"
                    alt="Rabalon team"
                    className="w-full h-1/2 object-cover rounded-sm"
                  />
                </div>

                {/* right side large image */}
                <div className="w-1/2">
                  <img
                    src="/team-4.jpg"
                    alt="Rabalon team"
                    className="w-full h-full object-cover rounded-sm"
                  />
                </div>
              </div>
            </div>

            {/* rightside text content */}
            <div className="w-full lg:w-1/2 flex flex-col space-y-6">
              {/* text content */}
              <h1 className="text-2xl md:text-3xl xl:text-4xl text-primary-blue font-semibold">
                Fostering Business Growth
              </h1>

              <article className="text-neutral-600 text-base md:text-lg lg:text-xl flex flex-col gap-3 md:gap-4">
                <p>
                  Rabalon emerged in 2019, as an IT service provider and is
                  helping companies with its innovative solutions. We always
                  keep the client’s best interest in mind. Our dedicated and
                  expert team helps us develop cutting-edge solutions that bring
                  value to our clients and help in business growth.
                </p>
                <div>
                  <h3 className="font-semibold text-primary-blue text-lg md:text-xl">
                    Our Mission
                  </h3>
                  <p>
                    We strive to make our clients&apos; dreams true by offering
                    them practical solutions in the form of secure, scalable,
                    and feature-rich software.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-primary-blue text-lg md:text-xl">
                    Our Vision
                  </h3>
                  <p>
                    Our vision is to enable our clients to discover the digital
                    world and set their goals and objectives.
                  </p>
                </div>
              </article>

              {/* button */}
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

        {/* team */}
        <div className="space-y-6 md:space-y-12">
          {/* team section header */}
          <SectionHeader
            title="Rabalon Team"
            subtitle="Meet Our Leadership"
          />

          <div className="flex flex-wrap items-stretch justify-center gap-5">
            {TEAM.map((member, index) => (
              <MemberCard
                key={index}
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
