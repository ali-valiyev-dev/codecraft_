import { Icon } from "@iconify/react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import animate from "../utils/animations";
import { useGSAP } from "@gsap/react";

const SolutionCard = ({ icon, title, desc, to }) => {
  useGSAP(() => {
    animate([".anim-solution-card"]);
  }, []);

  return (
    <Link
      to={to}
      className="anim-solution-card group max-w-[340px] flex flex-col p-5 lg:px-6 lg:pt-8 rounded-lg bg-neutral-white hover:bg-primary-blue justify-between border border-primary-dark-blue text-primary-blue hover:text-neutral-white transition-colors duration-300">
      <div>
        <div className="w-max">
          <Icon
            icon={icon}
            width={48}
            height={48}
            className=""
          />
        </div>

        <h3 className="font-semibold text-xl lg:text-2xl mt-8 lg:mt-10">
          {title}
        </h3>

        <hr className="w-1/2 h-[1px] bg-primary-dark-blue group-hover:bg-neutral-white border-0 my-6 lg:my-9" />

        <p className="text-md lg:text-lg">{desc}</p>
      </div>

      <div className="flex flex-col items-center justify-center mt-6 lg:mt-8">
        <hr className="w-full h-[1px] bg-primary-dark-blue group-hover:bg-neutral-white border-0" />

        <div className="flex items-center gap-3 pt-4 text-md lg:text-lg text-nowrap uppercase">
          <span>Read More</span>
          <span>
            <Icon
              icon="lucide:arrow-right"
              width={24}
              height={24}
            />
          </span>
        </div>
      </div>
    </Link>
  );
};

SolutionCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default SolutionCard;
