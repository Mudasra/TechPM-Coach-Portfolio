import React from "react";
import { FOOTER_STYLES } from "./Footerstyles";
import FooterBackground from "./Footerbackground";
import FooterBrand from "./Footerbrand";
import FooterNavCol from "./Footernavcol";
import FooterContact from "./Footercontact";
import FooterBottom from "./Footerbottom";
import { navLinks, resourceLinks } from "./Footerdata";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <style>{FOOTER_STYLES}</style>
      <footer className="footer-root" role="contentinfo">
        <FooterBackground />

        <div className="footer-inner">
          <div className="footer-top">
            <FooterBrand />

            <FooterNavCol
              title="Navigate"
              links={navLinks}
              ariaLabel="Footer navigation"
            />

            <FooterNavCol
              title="Resources"
              links={resourceLinks}
              ariaLabel="Free resources"
            />

            <FooterContact />
          </div>

          <FooterBottom year={year} />
        </div>
      </footer>
    </>
  );
};

export default Footer;