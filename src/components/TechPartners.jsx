import { useEffect, useRef } from "react";
import Container from "./Container";
import SectionHeader from "./SectionHeader";
import { PARTNER_COMPANY_LOGOS } from "../constants";

const TechPartners = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const ul = carouselRef.current;

    ul.insertAdjacentHTML("afterend", ul.outerHTML);
    ul.nextSibling.setAttribute("aria-hidden", "true");
  }, []);

  return (
    <Container id="case_studies">
      <div className="flex flex-col items-center justify-center gap-12 xl:gap-16">
        {/* header content */}
        <SectionHeader
          title="Our Tech Partner"
          subtitle="Leveraging Global Expertise to Empower IT for Business Growth"
        />

        {/* partner logos carousel */}
        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          <ul
            ref={carouselRef}
            className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
            {PARTNER_COMPANY_LOGOS.map((logo, index) => (
              <li key={index}>
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-12"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default TechPartners;
