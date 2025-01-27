import React from "react";
import "../../styles/header.css";
import { NavLink } from "react-router-dom";
import { FaGithub, FaInstagram, FaLinkedinIn, FaPhone } from "react-icons/fa6";
import { CgWebsite } from "react-icons/cg";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import logo from "../../src/assets/logo.png";
function Header() {
  return (
    <header>
      <span>
        <img src={logo} alt="" />
      </span>
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
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
      <div className="links">
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
      </div>
    </header>
  );
}

export default Header;
