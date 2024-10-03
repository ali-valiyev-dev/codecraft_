import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";

const DropdownMenu = ({ items }) => {
  const [menuHeight, setMenuHeight] = useState(0);
  const dropdownRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (dropdownRef.current) {
      setMenuHeight(dropdownRef.current.scrollHeight);
    }
  }, []);

  return (
    <div
      ref={dropdownRef}
      className="absolute left-0 mt-2 w-max bg-neutral-white text-primary-blue rounded shadow-lg overflow-hidden transition-all duration-300 ease-in-out"
      style={{
        maxHeight: menuHeight ? `${menuHeight}px` : "0",
        opacity: menuHeight ? 1 : 0,
      }}>
      <ul className="list-none m-0 p-0">
        {items.map((item, index) => {
          const isActive = location.pathname.slice(1) === item.href;

          return (
            <li
              key={index}
              className={`group border-l-8 border-neutral-white hover:bg-primary-blue hover:bg-opacity-50 hover:border-primary-blue transition-colors duration-300 ${
                isActive
                  ? "bg-primary-blue bg-opacity-50  border-primary-blue text-neutral-white"
                  : ""
              }`}>
              <Link
                to={item.href}
                className="block p-4 text-primary group-hover:text-neutral-white text-nowrap text-xl">
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

DropdownMenu.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default DropdownMenu;
