import PropTypes from "prop-types";
import { Icon } from "@iconify/react";

const SocialLink = ({ href, icon, alt }) => (
  <a
    className="group bg-primary-white hover:text-primary-black transition-colors duration-300 ease-in-out "
    href={href}
    target="_blank"
    aria-label={alt}>
    <Icon
      icon={icon}
      width={28}
      height={28}
      className="text-xl xl:text-2xl text-primary-black group-hover:text-primary-white"
    />
  </a>
);

SocialLink.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default SocialLink;
