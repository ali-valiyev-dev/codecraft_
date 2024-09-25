import PropTypes from "prop-types";
import { Icon } from "@iconify/react";

const NavButton = ({ onClick, icon, alt }) => (
  <button
    type="button"
    className="w-max flex items-center justify-center border rounded-full p-2 lg:p-3 font-medium group transition-colors duration-300 ease-in-out
    
    border-neutral-cyanBluishGray text-neutral-cyanBluishGray hover:border-primary-blue hover:bg-neutral-white hover:text-primary-blue
    "
    onClick={onClick}
    aria-label={alt}>
    <Icon
      icon={icon}
      className="text-3xl xl:text-4xl"
    />
  </button>
);

NavButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default NavButton;
