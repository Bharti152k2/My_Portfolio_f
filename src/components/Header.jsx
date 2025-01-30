import React from "react";
import "../../styles/header.css";
import { NavLink, useNavigate } from "react-router-dom";
import { FaGithub, FaInstagram, FaLinkedinIn, FaPhone } from "react-icons/fa6";
import { CgWebsite } from "react-icons/cg";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import logo from "../../src/assets/logo.png";
function Header() {
  const navigateToContact = useNavigate();
  return (
    <header>
      <span className="logo">Bharti</span>
      <ul type="none" className="pages">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/skills">Skills</NavLink>
        </li>
        <li>
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/services">Services</NavLink>
        </li>
        <li>
          <NavLink to="/educational">Educational</NavLink>
        </li>
        <li>
          <NavLink to="/tools">Tools</NavLink>
        </li>
        {/* <li>
          <NavLink to="/contact">Contact</NavLink>
        </li> */}
      </ul>
      <button className="contact" onClick={() => navigateToContact("/contact")}>Let's Talk</button>
      {/* <div className="links">
        <NavLink>
          <FaGithub to="https://github.com/Bharti152k2" />
        </NavLink>
        <NavLink>
          <FaLinkedinIn to="https://www.linkedin.com/in/vijay-bharti-sakarwal-584b90259/" />
        </NavLink>
        <NavLink>
          <FaInstagram to="https://www.instagram.com/_bha_rti98/" />
        </NavLink>
        <NavLink to="mailto:nidhi15sak@gmail.com">
          <MdOutlineEmail />
        </NavLink>
        <NavLink to="tel:+918764340543">
          <FaPhoneAlt />
        </NavLink>
      </div> */}
    </header>
  );
}

export default Header;
