import PropTypes from "prop-types";
import { Icon } from "@iconify/react";

const SocialLink = ({ href, icon, alt, color }) => (
  <a
    className={`text-2xl ${color}`}
    href={href}
    target="_blank"
    aria-label={alt}
    rel="noopener noreferrer">
    <Icon icon={icon} />
  </a>
);

SocialLink.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default SocialLink;
