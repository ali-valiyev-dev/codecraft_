import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="flex items-center justify-center">
      <Link to="/">
        <img
          src="/rabalon-logo.png"
          alt="Rabalon Logo"
          className="w-40 h-max object-contain"
        />
      </Link>
    </div>
  );
};

export default Logo;
