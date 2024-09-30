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

  const { pageTitle, pageSubtitle, cardsData, accordionData } = industries;

  return (
    <Container>
      {/* main content */}
      <div className="space-y-16">
        {/* section header */}
        <SectionHeader
          title={pageTitle}
          subtitle={pageSubtitle}
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
            {`Our ${pageTitle}`}
          </h2>

          <Accordion data={accordionData} />
        </div>

        {/* tech partners */}
        <TechPartners />
      </div>
    </Container>
  );
};

export default IndustriesPage;
