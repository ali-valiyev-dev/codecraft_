import { useState } from "react";
import { NAV_LINKS } from "../constants";
import {
  Button,
  DropdownMenu,
  Logo,
  NavLink,
  NavLinksWrapper,
} from "../components";
import { useNavigate } from "react-router-dom";

const DesktopNavbar = () => {
  const navigate = useNavigate();

  const [dropdown, setDropdown] = useState(null);
  const [dropdownTimeout, setDropdownTimeout] = useState(null);

  const handleMouseEnter = linkLabel => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
    }
    setDropdown(linkLabel);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setDropdown(null);
    }, 200);
    setDropdownTimeout(timeout);
  };

  return (
    <>
      <Logo />

      <nav className="relative hidden xl:block">
        <NavLinksWrapper>
          {NAV_LINKS.map((link, index) => (
            <div
              key={index}
              onMouseEnter={() => handleMouseEnter(link.label)}
              onMouseLeave={handleMouseLeave}
              className="relative">
              <NavLink {...link} />
              {link.dropdownItems && dropdown === link.label && (
                <DropdownMenu items={link.dropdownItems} />
              )}
            </div>
          ))}
        </NavLinksWrapper>
      </nav>

      <div className="hidden xl:block">
        <Button
          title="Get In Touch"
          onClick={() => {
            navigate("/contacts");
          }}
          alt="Navigate to Contacts page"
        />
      </div>
    </>
  );
};

export default DesktopNavbar;
