import { Link } from "react-router-dom";
import { FooterOfficeLocationDetails, Logo, SocialLink } from "../components";
import { CONTACT_DETAILS, NAV_LINKS, SOCIAL_LINKS } from "../constants";

const Footer = () => {
  return (
    <footer className="bg-primary-blue w-full text-neutral-white">
      <div className="mx-auto max-w-screen-2xl py-4 px-3 md:py-6 md:px-8 lg:py-8 lg:px-12">
        {/* Main Footer Content */}
        <div className="flex flex-col xl:flex-row gap-y-6 items-start">
          {/* Logo and Tagline Section */}
          <div className="w-full xl:w-1/5 space-y-4">
            <div className="w-max">
              <Logo />
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map((link, index) => (
                <SocialLink
                  key={index}
                  {...link}
                />
              ))}
            </div>
          </div>

          {/* Navigation Links Section */}
          <div className="flex flex-col xl:flex-row gap-x-10 gap-y-6 w-full">
            <div className="flex flex-wrap lg:flex-nowrap gap-x-4 md:gap-x-8 gap-y-6">
              {NAV_LINKS.map((navItem, index) =>
                index !== 0 ? (
                  <div key={index}>
                    <h3 className="text-md lg:text-lg font-semibold mb-2">
                      {navItem.label}
                    </h3>
                    <ul className="space-y-2">
                      {navItem.dropdownItems ? (
                        navItem.dropdownItems.map(dropdown => (
                          <li key={dropdown.label}>
                            <Link
                              to={dropdown.href}
                              className="text-neutral-300 hover:text-neutral-white text-sm lg:text-base">
                              {dropdown.label}
                            </Link>
                          </li>
                        ))
                      ) : (
                        <li>
                          <Link
                            to={navItem.href}
                            className="text-neutral-300 hover:text-neutral-white text-sm lg:text-base">
                            {navItem.label}
                          </Link>
                        </li>
                      )}
                    </ul>
                  </div>
                ) : null
              )}
            </div>

            {/* Branch contacts */}
            <div className="flex flex-col md:flex-row gap-y-6 gap-x-10">
              {CONTACT_DETAILS.map((item, index) => (
                <FooterOfficeLocationDetails
                  key={index}
                  {...item}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-6 border-t pt-4 flex flex-col md:flex-row gap-y-4 gap-x-6 items-center text-sm">
          <span>&copy; 2024 Rabalon</span>

          <Link
            to="/"
            className="text-neutral-300 hover:text-neutral-white">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
