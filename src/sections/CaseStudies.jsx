import { useState, useEffect, useRef } from "react";
import { Container, Loading, NavButton, SectionHeader } from "../components";
import CaseStudyItem from "../components/CaseStudyItem";
import { useGSAP } from "@gsap/react";
import animate from "../utils/animate";
import { useFetchData } from "../hooks";

const CaseStudies = () => {
  const {
    data: caseStudies,
    loading,
    error,
  } = useFetchData("case_studies", "*");

  const [currentIndex, setCurrentIndex] = useState(0);
  const userHasInteracted = useRef(false);

  const handleNext = () => {
    userHasInteracted.current = true;
    setCurrentIndex(prevIndex => (prevIndex + 1) % caseStudies.length);
  };

  const handlePrev = () => {
    userHasInteracted.current = true;
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? caseStudies.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    if (!userHasInteracted.current) {
      const interval = setInterval(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % caseStudies.length);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [currentIndex, caseStudies.length]);

  useGSAP(() => {
    if (!loading) {
      animate([".anim-cs-title"]);
    }
  }, [loading]);

  if (error) return null;

  if (loading) return <Loading />;

  return (
    <Container>
      <div className="flex flex-col items-center justify-center gap-12 xl:gap-16">
        {/* header content */}
        <div className="anim-cs-title">
          <SectionHeader
            title="Latest Case Studies"
            subtitle="Innovative Solutions to Challenges, Showcasing Success and Triumph."
          />
        </div>

        {/* main content */}
        <div className="w-full relative overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {caseStudies.map(caseStudy => (
              <div
                className="w-full flex-shrink-0"
                key={caseStudy._id}
                style={{ width: "100%" }}>
                <CaseStudyItem {...caseStudy} />
              </div>
            ))}
          </div>
        </div>

        {/* navigation buttons */}
        <div className="flex items-center gap-3 lg:gap-6">
          <NavButton
            icon="mdi:arrow-left"
            onClick={handlePrev}
            alt="Previous button"
          />

          <NavButton
            icon="mdi:arrow-right"
            onClick={handleNext}
            alt="Next button"
          />
        </div>
      </div>
    </Container>
  );
};

export default CaseStudies;
