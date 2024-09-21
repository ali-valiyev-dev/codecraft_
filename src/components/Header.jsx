import { useState, useEffect } from "react";
import { DesktopNavbar, MobileNavbar } from "../components";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`bg-transparent absolute mx-auto max-w-screen-2xl flex items-center justify-between px-4 md:px-10 xl:px-16 py-4 text-neutral-white max-xl:fixed z-50 w-full transition-shadow duration-500 ${
        isScrolled ? "shadow-md" : ""
      }`}>
      <DesktopNavbar />
      <MobileNavbar />
    </header>
  );
};

export default Header;
