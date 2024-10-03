import PropTypes from "prop-types";
import { Icon } from "@iconify/react";

const Button = ({ type = "button", title, onClick, icon, alt = title }) => (
  <button
    type={type}
    className="w-max flex items-center gap-2 border rounded-lg py-3 px-3 lg:px-5 font-medium text-nowrap group transition-colors duration-300 ease-in-out 
    text-sm md:text-lg
    border-primary-blue hover:border-neutral-white bg-neutral-white hover:bg-primary-blue text-primary-blue hover:text-neutral-white"
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
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  icon: PropTypes.string,
  alt: PropTypes.string,
};

export default Button;
