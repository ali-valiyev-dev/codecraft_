import PropTypes from "prop-types";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const NavLink = ({ href, label, dropdownItems }) => {
  const isLink = href && href !== "null";

  return (
    <li className="relative">
      {isLink ? (
        <Link
          to={href}
          className="text-xl text-nowrap flex items-center">
          {label}
        </Link>
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
  dropdownItems: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
};

export default NavLink;
