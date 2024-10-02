import PropTypes from "prop-types";
import { Icon } from "@iconify/react";

const SocialLink = ({ href, icon, alt }) => (
  <a
    className="text-xl xl:text-2xl text-neutral-white"
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
