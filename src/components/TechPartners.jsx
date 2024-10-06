import { useEffect, useRef } from "react";
import SectionHeader from "./SectionHeader";
import { PARTNER_COMPANY_LOGOS } from "../constants";
import { useGSAP } from "@gsap/react";
import animate from "../utils/animations";
import { useLocation } from "react-router-dom";

const TechPartners = () => {
  const carouselRef = useRef(null);

  const { pathname } = useLocation();

  useEffect(() => {
    const ul = carouselRef.current;

    ul.insertAdjacentHTML("afterend", ul.outerHTML);
    ul.nextSibling.setAttribute("aria-hidden", "true");
  }, []);

  useGSAP(() => {
    animate([".anim-partners-title", ".anim-partners"]);
  }, [pathname]);

  return (
    <div className="w-full mx-auto max-w-screen-2xl py-10 lg:py-14 xl:py-20">
      <div className="anim-partners flex flex-col items-center justify-center gap-12 xl:gap-16">
        {/* section header */}
        <div className="anim-partners-title">
          <SectionHeader
            title="Our Tech Partners"
            subtitle="Leveraging Global Expertise to Empower IT for Business Growth"
          />
        </div>

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
