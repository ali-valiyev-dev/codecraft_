import { Icon } from "@iconify/react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SolutionCard = ({ icon, title, desc, to }) => {
  return (
    <Link
      to={to}
      className="group max-w-80 lg:max-w-96 flex flex-col px-5 pt-6 rounded-lg bg-neutral-white hover:bg-primary-blue justify-between border border-primary-dark-blue text-primary-blue hover:text-neutral-white transition-colors duration-300">
      <div className="">
        <div className="p-3 w-max">
          <Icon
            icon={icon}
            width={54}
            height={54}
            className=""
          />
        </div>

        <h3 className="font-semibold text-2xl mt-12">{title}</h3>

        <hr className="w-1/2 h-[1px] bg-primary-dark-blue group-hover:bg-neutral-white border-0 my-9" />

        <p className="text-lg">{desc}</p>
      </div>

      <div className="flex flex-col items-center justify-center mt-9">
        <hr className="w-full h-[1px] bg-primary-dark-blue group-hover:bg-neutral-white border-0" />

        <div className="flex items-center gap-3 py-4 text-lg text-nowrap uppercase">
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
