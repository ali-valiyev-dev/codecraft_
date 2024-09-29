import { useState, useRef } from "react";
import PropTypes from "prop-types";
import { Icon } from "@iconify/react";

const Accordion = ({ solutions }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const contentRefs = useRef([]);

  const toggleIndex = index => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  const getHeight = index => {
    return activeIndex === index
      ? contentRefs.current[index]?.scrollHeight + "px"
      : "0px";
  };

  return (
    <div className="flex flex-col md:flex-row gap-x-12 gap-y-5">
      {/* Leftside (titles) */}
      <div className="flex flex-col w-full lg:w-1/2">
        {solutions.map((solution, index) => (
          <div
            key={index}
            className="border-b border-blue-300">
            {/* title */}
            <div
              onClick={() => toggleIndex(index)}
              className={`cursor-pointer py-4 flex items-center justify-between transition-all duration-300 ${
                activeIndex === index ? "text-blue-500" : "text-gray-900"
              }`}>
              <span className="text-xl font-semibold">{solution.title}</span>

              <span
                className={`transform transition-transform duration-300 ${
                  activeIndex === index
                    ? "-rotate-45 text-blue-500"
                    : "rotate-0"
                }`}>
                <Icon
                  icon="mdi:chevron-right"
                  width={36}
                  height={36}
                />
              </span>
            </div>

            {/* content for mobile */}
            <div
              ref={el => (contentRefs.current[index] = el)}
              style={{ maxHeight: getHeight(index) }}
              className={`overflow-hidden transition-max-height duration-500 ease-in-out`}>
              <div className="p-4 text-gray-600 lg:hidden">
                {solution.content}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* rightside (content for larger screens) */}
      <div className="hidden lg:block w-full lg:w-1/2 transition-all duration-300 ease-in-out space-y-4">
        <h2 className="w-max text-xl text-nowrap font-semibold border-b border-blue-300 text-gray-900 py-5">
          {solutions[activeIndex]?.title || solutions[0]?.title}
        </h2>
        <p className="text-gray-600">
          {solutions[activeIndex]?.content || solutions[0]?.content}
        </p>
      </div>
    </div>
  );
};

Accordion.propTypes = {
  solutions: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Accordion;
