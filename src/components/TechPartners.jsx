import { useEffect, useRef } from "react";
import SectionHeader from "./SectionHeader";
import { PARTNER_COMPANY_LOGOS } from "../constants";
import useAnimation from "../utils/hooks/useAnimations";

const TechPartners = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const ul = carouselRef.current;

    ul.insertAdjacentHTML("afterend", ul.outerHTML);
    ul.nextSibling.setAttribute("aria-hidden", "true");
  }, []);

  useAnimation([".anim-partners"]);

  return (
    <div className="w-full mx-auto max-w-screen-2xl">
      <div className="anim-partners flex flex-col items-center justify-center gap-12 xl:gap-16">
        {/* header content */}
        <SectionHeader
          title="Our Tech Partners"
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
                  className="h-8 lg:h-12"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TechPartners;
