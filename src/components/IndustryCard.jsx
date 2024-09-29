import { Icon } from "@iconify/react";
import PropTypes from "prop-types";

const IndustryCard = ({ icon, title, desc }) => {
  return (
    <div className="max-w-80 lg:max-w-96 flex flex-col px-5 py-6 rounded-xl bg-[#232558] justify-between border border-primary-blue">
      <div className="space-y-9">
        <div className="p-3 w-max">
          <Icon
            icon={icon}
            width={54}
            height={54}
            className="text-neutral-white"
          />
        </div>

        <h3 className="font-semibold text-2xl bg-gradient-to-r from-neutral-white to-neutral-cyanBluishGray bg-clip-text text-transparent">
          {title}
        </h3>

        <hr className="w-1/2 h-[1px] bg-gradient-to-r from-neutral-white to-neutral-cyanBluishGray border-0" />

        <p className="text-lg text-neutral-white">{desc}</p>
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
