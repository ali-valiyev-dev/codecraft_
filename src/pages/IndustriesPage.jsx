import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import {
  Container,
  Accordion,
  SectionHeader,
  TechPartners,
  IndustryCard,
} from "../components";
import { INDUSTRIES_DATA } from "../constants";

const IndustriesPage = () => {
  const params = useParams();
  const navigate = useNavigate();

  const industries = INDUSTRIES_DATA.find(
    industries => industries.id === params.id
  );

  useEffect(() => {
    if (!industries) {
      navigate("/notFound");
    }
  }, [industries, navigate]);

  if (!industries) return null;

  const { headerTitle, headerSubtitle, cardsData, accordionData } = industries;

  return (
    <Container id="industries">
      {/* main content */}
      <div className="space-y-16">
        {/* section header */}
        <SectionHeader
          title={headerTitle}
          subtitle={headerSubtitle}
        />

        {/* industry cards */}
        <div className="flex flex-wrap items-stretch justify-center gap-6">
          {cardsData.map((card, index) => (
            <IndustryCard
              key={index}
              {...card}
            />
          ))}
        </div>

        {/* accordion */}
        <div className="space-y-6">
          <h2 className="text-4xl text-blue-500 font-semibold">
            {`Our ${headerTitle}`}
          </h2>

          <Accordion solutions={accordionData} />
        </div>

        {/* tech partners */}
        <TechPartners />
      </div>
    </Container>
  );
};

export default IndustriesPage;
