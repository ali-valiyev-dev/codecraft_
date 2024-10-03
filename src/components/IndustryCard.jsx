import { Icon } from "@iconify/react";
import PropTypes from "prop-types";

const IndustryCard = ({ icon, title, desc }) => {
  return (
    <div className="max-w-[300px] flex flex-col p-5 lg:px-6 lg:pt-8 rounded-lg bg-neutral-white justify-between border border-primary-dark-blue text-primary-blue">
      <div className="space-y-5">
        <div className="p-3 w-max">
          <Icon
            icon={icon}
            width={54}
            height={54}
            className=""
          />
        </div>

        <h3 className="font-semibold text-xl lg:text-2xl">{title}</h3>

        <hr className="w-1/2 h-[1px] bg-neutral-white border-0 my-9" />

        <p className="text-md lg:text-lg">{desc}</p>
      </div>
    </div>
  );
};

IndustryCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default IndustryCard;
