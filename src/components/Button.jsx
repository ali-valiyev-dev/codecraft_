import PropTypes from "prop-types";
import { Icon } from "@iconify/react";

const Button = ({ type, title, onClick, icon, alt }) => (
  <button
    type={type}
    className="w-max flex items-center gap-2.5 sm:gap-3 border rounded-lg py-2 sm:py-4 px-2 sm:px-6 font-medium text-nowrap group transition-colors duration-300 ease-in-out
    
    border-neutral-cyanBluishGray hover:border-primary-blue bg-primary-blue/70 hover:bg-neutral-white text-neutral-white hover:text-primary-blue
    "
    onClick={onClick}
    aria-label={alt}>
    {title}
    {icon && (
      <Icon
        icon={icon}
        width={20}
        height={20}
      />
    )}
  </button>
);

Button.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  onClick: PropTypes.func,
  icon: PropTypes.string,
  alt: PropTypes.string,
};

export default Button;
