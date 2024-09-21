import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Icon } from "@iconify/react";
import {
  Logo,
  NavLinksWrapper,
  MobileNavLink,
  SocialLink,
} from "../components";
import { NAV_LINKS, SOCIAL_LINKS } from "../constants";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

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
        className={`bg-primary-blue/40 fixed left-0 top-0 h-screen w-full   flex flex-col transition-all duration-500 overflow-hidden ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}>
        <div className="md:w-96 bg-primary-blue relative h-full overflow-scroll">
          <div className="flex items-center justify-between px-4 md:px-10 xl:px-16 py-4 absolute top-0 left-0 w-full md:w-96">
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

          <div className="bg-inherit absolute bottom-0 left-0 flex items-center justify-center w-full gap-5 py-4">
            {SOCIAL_LINKS.map((link, index) => (
              <SocialLink
                key={index}
                {...link}
              />
            ))}
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
