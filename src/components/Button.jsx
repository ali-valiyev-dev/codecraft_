import PropTypes from "prop-types";
import { Icon } from "@iconify/react";

const Button = ({ title, onClick, icon, alt }) => (
  <button
    type="button"
    className="flex items-center gap-3 border border-neutral-white hover:border-neutral-white/40 rounded-lg py-3 px-6 font-bold text-nowrap group bg-primary-blue/40 transition-colors duration-300 ease-in-out"
    onClick={onClick}
    aria-label={alt}>
    {title}
    {icon && (
      <Icon
        icon={icon}
        width={24}
        height={24}
        className="text-xl xl:text-2xl text-primary-black group-hover:text-primary-white"
      />
    )}
  </button>
);

Button.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
  icon: PropTypes.string,
  alt: PropTypes.string.isRequired,
};

export default Button;
