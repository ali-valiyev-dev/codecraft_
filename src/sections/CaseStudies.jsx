import { useState, useEffect, useRef } from "react";
import { Container, NavButton, SectionHeader } from "../components";
import CaseStudyItem from "../components/CaseStudyItem";
import { CASE_STUDIES } from "../constants";

const CaseStudies = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const userHasInteracted = useRef(false);

  const handleNext = () => {
    userHasInteracted.current = true;
    setCurrentIndex(prevIndex => (prevIndex + 1) % CASE_STUDIES.length);
  };

  const handlePrev = () => {
    userHasInteracted.current = true;
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? CASE_STUDIES.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    if (!userHasInteracted.current) {
      const interval = setInterval(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % CASE_STUDIES.length);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [currentIndex]);

  return (
    <Container>
      <div className="flex flex-col items-center justify-center gap-12 xl:gap-16">
        {/* header content */}
        <SectionHeader
          title="Latest Case Studies"
          subtitle="From Challenge to Victory: Exploring Case Studies of Innovation and Excellence"
        />

        {/* main content */}
        <div className="w-full relative overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {CASE_STUDIES.map((caseStudy, index) => (
              <div
                className="w-full flex-shrink-0"
                key={index}
                style={{ width: "100%" }}>
                <CaseStudyItem
                  {...caseStudy}
                  index={index}
                />
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
