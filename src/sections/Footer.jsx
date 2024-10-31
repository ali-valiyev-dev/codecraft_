import { Link } from "react-router-dom";
import {
  FooterOfficeLocationDetails,
  Loading,
  Logo,
  SocialLink,
} from "../components";
import { NAV_LINKS } from "../constants";
import { useFetchData, useLoadingState } from "../hooks";

const Footer = () => {
  const { data: contacts } = useFetchData("contacts", "*");
  const { data: social_links } = useFetchData("social_links", "*");

  const { loading, error } = useLoadingState(contacts, social_links);

  if (error) return null;

  if (loading) return <Loading />;

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
              {social_links.map((link, index) => (
                <SocialLink
                  key={index}
                  {...link}
                />
              ))}
            </div>
          </div>

          {/* Navigation Links Section */}
          <div className="flex flex-col xl:flex-row gap-x-10 gap-y-6 w-full">
            <div className="flex flex-wrap lg:flex-nowrap gap-x-12 xl:gap-x-14 gap-y-6">
              {NAV_LINKS.map((navItem, index) =>
                index !== 0 ? (
                  <div key={index}>
                    <h3 className="text-md lg:text-lg font-semibold mb-2 text-nowrap">
                      {navItem.label}
                    </h3>
                    <ul className="space-y-2">
                      {navItem.dropdownItems ? (
                        navItem.dropdownItems.map(dropdown => (
                          <li key={dropdown.label}>
                            <Link
                              to={dropdown.href}
                              className="text-neutral-300 text-nowrap hover:text-neutral-white text-sm lg:text-base">
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
              {contacts.map((item, index) => (
                <FooterOfficeLocationDetails
                  key={index}
                  {...item}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-6 border-t pt-4 flex gap-x-6 items-center text-sm">
          <span>&copy; {new Date().getFullYear()} Codecraft_</span>

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
