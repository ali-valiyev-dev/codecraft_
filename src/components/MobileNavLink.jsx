import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
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

  useEffect(() => {
    if (isDropdownOpen) {
      setDropdownHeight(dropdownRef.current.scrollHeight);
    } else {
      setDropdownHeight(0);
    }
  }, [isDropdownOpen]);

  const isLink = href && href !== "null";

  return (
    <li className="relative text-xl md:text-2xl xl:text-xl ">
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
          {dropdownItems.map((subLink, index) => (
            <li
              key={index}
              className=" pl-3 py-3">
              <Link
                to={subLink.href}
                onClick={() => {
                  setIsOpen(false);
                }}
                className="text-lg md:text-xl lg:text-lg">
                {subLink.label}
              </Link>
            </li>
          ))}
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
