import PropTypes from "prop-types";
import { Icon } from "@iconify/react";

const SocialLink = ({ href, icon, alt }) => (
  <a
    className="text-xl xl:text-2xl text-[#97A1AF] hover:text-primary-blue transition-colors duration-300 ease-in-out "
    href={href}
    target="_blank"
    aria-label={alt}>
    <Icon icon={icon} />
  </a>
);

SocialLink.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default SocialLink;
