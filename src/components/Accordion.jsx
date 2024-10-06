import { useState, useRef } from "react";
import PropTypes from "prop-types";
import { Icon } from "@iconify/react";
import animate from "../utils/animations";
import { useGSAP } from "@gsap/react";

const Accordion = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const contentRefs = useRef([]);

  useGSAP(() => {
    animate([".anim-accordion-content"]);
  }, [data]);

  const toggleIndex = index => {
    setActiveIndex(activeIndex === index ? 0 : index);
  };

  const getHeight = index => {
    return activeIndex === index
      ? contentRefs.current[index]?.scrollHeight + "px"
      : "0px";
  };

  return (
    <div className="flex flex-col md:flex-row gap-x-6 md:gap-x-8 lg:gap-x-12 gap-y-4 md:gap-y-5">
      {/* Leftside (titles) */}
      <div className="flex flex-col w-full lg:w-1/2">
        {data.map((data, index) => (
          <div
            key={index}
            className={`anim-accordion-content border-b ${
              activeIndex === index
                ? "border-primary-blue"
                : "border-neutral-600"
            }`}>
            {/* title */}
            <div
              onClick={() => toggleIndex(index)}
              className={`cursor-pointer py-3 md:py-4 flex items-center justify-between transition-all duration-300 ${
                activeIndex === index ? "text-primary-blue" : "text-neutral-600"
              }`}>
              <span className="text-base md:text-lg lg:text-xl font-semibold">
                {data.title}
              </span>

              <span
                className={`transform transition-transform duration-300 ${
                  activeIndex === index
                    ? "-rotate-45 text-primary-blue"
                    : "rotate-0"
                }`}>
                <Icon
                  icon="mdi:chevron-right"
                  width={30}
                  height={30}
                />
              </span>
            </div>

            {/* content for mobile */}
            <div
              ref={el => (contentRefs.current[index] = el)}
              style={{ maxHeight: getHeight(index) }}
              className="overflow-hidden transition-max-height duration-500 ease-in-out">
              <p className="px-3 md:px-4 pb-3 md:pb-4 text-neutral-500 lg:hidden text-sm md:text-base">
                {data.content}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* rightside (content for larger screens) */}
      <div className="anim-accordion-content hidden lg:block w-full lg:w-1/2  space-y-3 lg:space-y-4">
        <h2 className="w-max text-lg lg:text-xl font-semibold border-b border-primary-blue text-primary-blue py-4">
          {data[activeIndex]?.title || data[0]?.title}
        </h2>
        <p className="text-neutral-500 text-base lg:text-lg">
          {data[activeIndex]?.content || data[0]?.content}
        </p>
      </div>
    </div>
  );
};

Accordion.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Accordion;
