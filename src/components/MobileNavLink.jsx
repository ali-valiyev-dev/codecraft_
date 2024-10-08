import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { Icon } from "@iconify/react";

const NavLink = ({
  href,
  label,
  dropdownItems,
  openDropdown,
  handleDropdownToggle,
  setIsOpen,
}) => {
  const isDropdownOpen = openDropdown === label;
  const dropdownRef = useRef(null);
  const [dropdownHeight, setDropdownHeight] = useState(0);

  const location = useLocation();

  useEffect(() => {
    if (isDropdownOpen) {
      setDropdownHeight(dropdownRef.current.scrollHeight);
    } else {
      setDropdownHeight(0);
    }
  }, [isDropdownOpen]);

  const isLink = href && href !== "null";

  return (
    <li className="relative sm:text-xl text-primary-blue">
      {isLink ? (
        <Link
          to={href}
          onClick={() => {
            setIsOpen(false);
          }}
          className="text-nowrap flex uppercase">
          {label}
        </Link>
      ) : (
        <div
          className="text-nowrap flex cursor-pointer items-center uppercase"
          onClick={() => handleDropdownToggle(label)}>
          {label}
          {dropdownItems && (
            <Icon
              icon={isDropdownOpen ? "mdi:chevron-up" : "mdi:chevron-down"}
              width={32}
              height={32}
              className="ml-1 mt-1"
            />
          )}
        </div>
      )}

      {dropdownItems && (
        <ul
          ref={dropdownRef}
          className={`transition-all duration-300 ease-in-out overflow-hidden`}
          style={{
            maxHeight: `${dropdownHeight}px`,
            opacity: isDropdownOpen ? 1 : 0,
          }}>
          {dropdownItems.map((subLink, index) => {
            const isActive = location.pathname.slice(1) === subLink.href;

            return (
              <li
                key={index}
                className={`border-l-8 border-neutral-white p-3 w-max  ${
                  isActive
                    ? "bg-primary-blue bg-opacity-50  border-primary-blue text-neutral-white"
                    : ""
                }`}>
                <Link
                  to={subLink.href}
                  onClick={() => {
                    setIsOpen(false);
                  }}
                  className="text-base md:text-xl">
                  {subLink.label}
                </Link>
              </li>
            );
          })}
        </ul>
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
  openDropdown: PropTypes.string,
  handleDropdownToggle: PropTypes.func,
};

export default NavLink;
