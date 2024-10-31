import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import {
  Container,
  Accordion,
  SectionHeader,
  IndustryCard,
  Loading,
} from "../components";
import { VALID_INDUSTRY_IDS } from "../constants";
import animate from "../utils/animate";
import { useGSAP } from "@gsap/react";
import { useFetchData } from "../hooks";
import { TechPartners } from "../sections";

const IndustriesPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!VALID_INDUSTRY_IDS.includes(id)) {
      navigate("/notFound");
    }
  }, [navigate, id]);

  const {
    data: industriesData,
    loading,
    error,
  } = useFetchData("industries_data", "*", ["industry_id", id]);

  const industry = industriesData[0];

  useGSAP(() => {
    if (!loading) {
      animate([".anim-industry-title", ".anim-industry-accordion-title"]);
    }
  }, [loading]);

  if (error) return null;
  if (loading || !industry) return <Loading />;

  const { pageTitle, pageSubtitle, cardsData, accordionData } = industry;

  return (
    <Container>
      <div className="space-y-16 mt-20">
        {/* section header */}
        <div className="anim-industry-title">
          <SectionHeader
            title={pageTitle}
            subtitle={pageSubtitle}
          />
        </div>

        {/* industry cards */}
        <div className="flex flex-wrap items-stretch justify-center gap-5">
          {cardsData.map((card, index) => (
            <IndustryCard
              key={index}
              {...card}
            />
          ))}
        </div>

        {/* accordion */}
        <div className="space-y-6">
          <h2 className="anim-industry-accordion-title text-2xl lg:text-3xl text-primary-blue font-semibold">
            What We Offer
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
