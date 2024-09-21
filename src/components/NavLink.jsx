import { handleSmoothScroll } from "../utils/helpers";
import PropTypes from "prop-types";
import { Icon } from "@iconify/react";

const NavLink = ({ href, label, setIsOpen, dropdownItems }) => {
  const isLink = href && href !== "null";

  return (
    <li className="relative">
      {isLink ? (
        <a
          href={href}
          className="text-xl text-nowrap flex items-center"
          onClick={e => handleSmoothScroll(e, href, setIsOpen)}>
          {label}
        </a>
      ) : (
        <div className="text-xl text-nowrap flex items-center cursor-pointer">
          {label}
          {dropdownItems && (
            <Icon
              icon={"mdi:chevron-down"}
              width={24}
              height={24}
              className="ml-1 mt-1"
            />
          )}
        </div>
      )}
    </li>
  );
};

NavLink.propTypes = {
  href: PropTypes.string,
  label: PropTypes.string.isRequired,
  setIsOpen: PropTypes.func,
  dropdownItems: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
};

export default NavLink;
