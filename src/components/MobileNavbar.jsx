import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Icon } from "@iconify/react";
import {
  Logo,
  NavLinksWrapper,
  MobileNavLink,
  SocialLink,
} from "../components";
import { NAV_LINKS } from "../constants";
import { useNavigate } from "react-router-dom";
import { useFetchData } from "../hooks";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const { data: social_links, error } = useFetchData("social_links", "*");

  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleDropdownToggle = label => {
    if (openDropdown === label) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(label);
    }
  };
  const handleContactUs = () => {
    navigate("/contacts");
    setIsOpen(false);
  };

  if (error) return null;

  return (
    <div className="flex xl:hidden items-center">
      <button
        type="button"
        aria-label="Open Menu"
        className="xl:hidden flex items-center justify-center"
        onClick={() => setIsOpen(true)}>
        <Icon
          icon="mdi:menu"
          width={32}
          height={32}
        />
      </button>

      <nav
        className={`bg-primary-blue/50 fixed left-0 top-0 h-full w-full flex flex-col transition-all duration-500 overflow-hidden ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}>
        <div className="sm:w-96 bg-white relative h-full overflow-scroll">
          <div className="bg-primary-blue flex items-center justify-between px-4 md:px-10 xl:px-16 py-4 absolute top-0 left-0 w-full">
            <Logo />

            <button
              type="button"
              aria-label="Close Menu"
              className="flex items-center justify-center"
              onClick={() => setIsOpen(false)}>
              <Icon
                icon="mdi:close"
                width={32}
                height={32}
              />
            </button>
          </div>

          <NavLinksWrapper>
            {NAV_LINKS.map((link, index) => (
              <MobileNavLink
                key={index}
                setIsOpen={setIsOpen}
                {...link}
                openDropdown={openDropdown}
                handleDropdownToggle={handleDropdownToggle}
              />
            ))}
          </NavLinksWrapper>

          <div className="absolute bottom-0 left-0 flex items-center justify-center w-full gap-5 py-4">
            {social_links.map((link, index) => (
              <SocialLink
                color="text-primary-blue"
                key={index}
                {...link}
              />
            ))}

            <button
              type="button"
              aria-label="Navigate to Contacts page"
              className="text-primary-blue font-medium border border-primary-blue py-1 px-3 rounded-lg"
              onClick={handleContactUs}>
              Contact Us
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

MobileNavbar.propTypes = {
  setIsOpen: PropTypes.func,
};

export default MobileNavbar;
