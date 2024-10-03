import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { DesktopNavbar, MobileNavbar } from "../components";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

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

  const isHomePage = location.pathname === "/";

  return (
    <header
      className={`fixed z-50 w-full 
        ${
          isHomePage && !isScrolled
            ? "bg-transparent"
            : "bg-primary-blue shadow-md transition-all duration-300"
        } 
        `}>
      <div className="mx-auto max-w-screen-2xl flex items-center justify-between px-4 md:px-10 xl:px-16 py-4 text-neutral-white">
        <DesktopNavbar />
        <MobileNavbar />
      </div>
    </header>
  );
};

export default Header;
