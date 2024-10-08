import { useGSAP } from "@gsap/react";
import { Icon } from "@iconify/react";
import PropTypes from "prop-types";
import animate from "../utils/animations";

const IndustryCard = ({ icon, title, desc }) => {
  useGSAP(() => {
    animate([".anim-industry-card"]);
  }, [title]);

  return (
    <div className="anim-industry-card max-w-[300px] lg:max-w-[350px] flex flex-col p-5 lg:px-6 lg:pt-8 rounded-lg bg-neutral-white justify-between border border-primary-dark-blue text-primary-blue">
      <div className="space-y-3 lg:space-y-5">
        <div className="p-3 w-max">
          <Icon
            icon={icon}
            width={54}
            height={54}
          />
        </div>

        <h3 className="font-semibold text-xl lg:text-2xl">{title}</h3>

        <hr className="w-1/2 h-[1px] bg-neutral-white border-0 my-9" />

        <p className="text-md lg:text-lg text-neutral-800">{desc}</p>
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
