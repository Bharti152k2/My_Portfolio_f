import React from "react";
import "../../styles/footer.css";
import { NavLink } from "react-router-dom";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
function Footer() {
  let year = new Date().getFullYear();
  return (
    <footer>
      <section>
        <div id="contact">
          <h1>Contact Me</h1>

          <span>
            <NavLink to="tel:+918764340543">
              <FaPhone /> +91 8764340543
            </NavLink>
          </span>
          <span>
            <NavLink to="tel:+918764340543">
              <FaWhatsapp /> +91 8764340543
            </NavLink>
          </span>
          <span>
            <NavLink to="mailto:nidhi15sak@gmail.com">
              <MdOutlineEmail /> nidhi15sak@gmail.com
            </NavLink>
          </span>
          <span>
            Address: 88, Ratna Vilas Road <br /> Bangalore, Karnataka, 560004
          </span>
        </div>
        <div id="quick-links">
          <h1>Quick Links</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/skills">Skills</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/educational">Educational</NavLink>
          <NavLink to="/tools">Tools</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
        <div id="social-links">
          <h1>Social Links</h1>
          <NavLink to="https://github.com/Bharti152k2">
            <FaGithub />
          </NavLink>
          <NavLink to="https://www.linkedin.com/in/vijay-bharti-sakarwal-584b90259/">
            <FaLinkedinIn />
          </NavLink>
          <NavLink>
            <FaInstagram to="https://www.instagram.com/_bha_rti98/" />
          </NavLink>
          <NavLink to="https://my-portfolio-f-five.vercel.app/">
            <CgWebsite />
          </NavLink>
        </div>
      </section>
      <p id="copy-right">
        © <span id="year"> {year} </span> Bharti. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
