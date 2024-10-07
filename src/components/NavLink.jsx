import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NavLink = ({ href, label }) => {
  const isLink = href && href !== "null";

  return (
    <div className="relative">
      {isLink ? (
        <Link
          to={href}
          className="text-xl text-nowrap flex items-center">
          {label}
        </Link>
      ) : (
        <div className="text-xl text-nowrap flex items-center cursor-pointer">
          {label}
        </div>
      )}
    </div>
  );
};

NavLink.propTypes = {
  href: PropTypes.string,
  label: PropTypes.string.isRequired,
};

export default NavLink;
