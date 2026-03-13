import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import { NAVBAR_STYLES } from "./NavbarStyles";
import NavLogo from "./NavLogo";
import DesktopNav from "./DesktopNav";
import DesktopRight from "./DesktopRight";
import HamburgerButton from "./HamburgerButton";
import MobileDrawer from "./MobileDrawer";
import { openModal } from "../../redux/formSlice";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Results", href: "#results" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isLandingPage = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleDesktopCta = () => {
    if (isLandingPage) {
      dispatch(openModal());
    } else {
      navigate("/");
    }
  };

  const handleMobileCta = () => {
    setMenuOpen(false);
    dispatch(openModal());
  };

  return (
    <>
      <style>{NAVBAR_STYLES}</style>

      <header
        className={`nav-header ${scrolled ? "anchored" : "floating"}`}
        role="banner"
        aria-label="Site header"
      >
        <div className="nav-gold-line" aria-hidden="true" />
        <div className="nav-inner">
          <NavLogo />

          {isLandingPage && (
            <DesktopNav navLinks={navLinks} onNavClick={handleNavClick} />
          )}

          <DesktopRight
            isLandingPage={isLandingPage}
            onCtaClick={handleDesktopCta}
          />

          <HamburgerButton
            menuOpen={menuOpen}
            onToggle={() => setMenuOpen((p) => !p)}
          />
        </div>
      </header>

      <MobileDrawer
        menuOpen={menuOpen}
        navLinks={navLinks}
        onClose={() => setMenuOpen(false)}
        onNavClick={handleNavClick}
        onCtaClick={handleMobileCta}
      />
    </>
  );
};

export default Navbar;