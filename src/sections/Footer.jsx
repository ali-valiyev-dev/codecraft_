import { Link } from "react-router-dom";
import { FooterOfficeLocationDetails, Logo, SocialLink } from "../components";
import { CONTACT_DETAILS, NAV_LINKS, SOCIAL_LINKS } from "../constants";

const Footer = () => {
  return (
    <footer className="bg-primary-blue w-full text-neutral-white">
      <div className="mx-auto max-w-screen-2xl py-5 px-4 md:px-10 xl:px-16">
        {/* Main Footer Content */}
        <div className=" flex flex-col xl:flex-row gap-y-5 items-start">
          {/* Logo and Tagline Section */}
          <div className="w-full xl:w-1/5 space-y-5 ">
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
          <div className=" flex flex-col xl:flex-row gap-x-12 gap-y-5 w-full">
            <div className=" flex flex-wrap lg:flex-nowrap gap-x-5 md:gap-x-12 gap-y-5">
              {NAV_LINKS.map((navItem, index) =>
                index !== 0 ? (
                  <div
                    key={index}
                    className="">
                    <h3 className="text-lg text-nowrap font-semibold mb-2">
                      {navItem.label}
                    </h3>
                    <ul className="space-y-2">
                      {navItem.dropdownItems ? (
                        navItem.dropdownItems.map(dropdown => (
                          <li key={dropdown.label}>
                            <Link
                              to={dropdown.href}
                              className="text-neutral-300 hover:text-neutral-white text-nowrap">
                              {dropdown.label}
                            </Link>
                          </li>
                        ))
                      ) : (
                        <li>
                          <Link
                            to={navItem.href}
                            className="text-neutral-300 hover:text-neutral-white text-nowrap">
                            {navItem.label}
                          </Link>
                        </li>
                      )}
                    </ul>
                  </div>
                ) : null
              )}
            </div>

            {/* branch contacts */}
            <div className="flex flex-col md:flex-row gap-y-5 gap-x-12">
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
        <div className="mt-5 border-t pt-4 flex gap-5 items-center text-nowrap text-sm">
          <span className="text-nowrap">&copy; 2024 Rabalon</span>

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
