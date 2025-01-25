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
            <NavLink to="mailto:nidhi15sak@gmail.com">
              <MdOutlineEmail /> nidhi15sak@gmail.com
            </NavLink>
          </span>
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
          <span>Address: Hardeep Nagar, Jalandhar, Punjab, 144009</span>
        </div>
        <div id="quick-links">
          <h1>Quick Links</h1>
          <NavLink >Home</NavLink>
          <NavLink>About</NavLink>
          <NavLink>Projects</NavLink>
          <NavLink>Services</NavLink>
          <NavLink>Contact</NavLink>
        </div>
        <div id="social-links">
          <h1>Social Links</h1>
          <NavLink>
            <FaGithub />
          </NavLink>
          <NavLink>
            <FaLinkedinIn />
          </NavLink>
          <NavLink>
            <FaInstagram />
          </NavLink>
          <NavLink>
            <CgWebsite />
          </NavLink>
        </div>
      </section>
      <p id="copy-right">
        © <span id="year">{year}</span> Bharti. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
