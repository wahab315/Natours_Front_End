import React from "react";
import logoGreen from "../assets/logo-green.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__logo">
        <img src={logoGreen} alt="Natours logo" />
      </div>
      <ul className="footer__nav">
        <li>
          <Link to="/">About us</Link>
        </li>
        <li>
          <Link to="/">Download apps</Link>
        </li>
        <li>
          <Link to="/">Become a guide</Link>
        </li>
        <li>
          <Link to="/">Careers</Link>
        </li>
        <li>
          <Link to="/">Contact</Link>
        </li>
      </ul>
      <p className="footer__copyright">
        &copy; by Jonas Schmedtmann. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
