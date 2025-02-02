import React, { useState } from "react";
import "../../styles/contact.css";
import B1 from "../assets/M.jpg";
import B2 from "../assets/B.jpg";
import B3 from "../assets/F.jpg";
import B4 from "../assets/G.jpg";
import B5 from "../assets/H.jpg";
import B6 from "../assets/K.jpg";
import axios from "axios";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
// https://portfolio-backend-eta-red.vercel.app/api/contact
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
    email: "",
  });
  console.log("Sending Form Data:", formData); // Log the data

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://portfolio-backend-eta-red.vercel.app/api/contact",
        formData,
        {
          headers: {
            "Content-Type": "application/json", // Ensure the content type is set to JSON
          },
          mode: "no-cors",
        }
      );
      console.log(response);
      console.log(formData);
      if (!response.error) {
        alert("Your message was sent successfully!");
        setFormData({ name: "", message: "", email: "" });
      } else {
        alert("There was an error. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
  };
  return (
    <section className="reach">
      <h1 className="p6">Say Hello</h1>
      <article className="details">
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Hello Bharti, My name is </label>
              <input
                className="input"
                type="text"
                id="name"
                name="name"
                placeholder="your good name here"
                size="15"
                required
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="message">
                and I am looking for a team to help me with
              </label>
              <br />
              <br />
              <textarea
                className="input"
                id="message"
                name="message"
                placeholder="your message for me"
                required
                rows="5"
                cols="38"
                onChange={handleInputChange}
              ></textarea>
            </div>
            <div>
              <label htmlFor="email">You can reach me at </label>
              <input
                className="input"
                type="email"
                id="email"
                name="email"
                placeholder="your email here"
                required
                onChange={handleInputChange}
              />
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <button type="submit" id="contact-btn">
                Send
              </button>
            </div>
          </form>
        </div>
        <div className="reach-links">
          <aside className="contact-photo">
            {/* <img src={B3} alt="description" height="300rem" /> */}
            <h1>Contact at:</h1>
            <div id="c3">
              <NavLink to="mailto:nidhi15sak@gmail.com">
                <MdOutlineEmail />
                nidhi15sak@gmail.com
              </NavLink>

              <NavLink to="tel:+918764340543">
                <FaPhoneAlt /> +91 8764340543
              </NavLink>
              <NavLink to="tel:+918764340543">
                <FaWhatsapp /> +91 8764340543
              </NavLink>
            </div>
            <h1>Social Links : </h1>
            <ul type="none" className="contact-links">
              <li>
                <NavLink>
                  <FaGithub to="https://github.com/Bharti152k2" />
                </NavLink>
              </li>
              <li>
                <NavLink>
                  <FaLinkedinIn to="https://www.linkedin.com/in/vijay-bharti-sakarwal-584b90259/" />
                </NavLink>
              </li>
              <li>
                <NavLink>
                  <FaInstagram to="https://www.instagram.com/_bha_rti98/" />
                </NavLink>
              </li>
              <li>
                <NavLink to="mailto:nidhi15sak@gmail.com">
                  <MdOutlineEmail />
                </NavLink>
              </li>
              <li>
                <NavLink to="tel:+918764340543">
                  <FaPhoneAlt />
                </NavLink>
              </li>
            </ul>
          </aside>
          <aside>
            <h1>My Address:</h1>
            <p>
              <span style={{ textDecoration: "underline" }}>
                Permanent Addrress:
              </span>{" "}
              <br />
              Hardeep Nagar, Jalandhar, <br /> Punjab,144009
            </p>
            <p>
              <span style={{ textDecoration: "underline" }}>
                Residential Addrress:
              </span>
              <br />
              88,Ratna Vilas Road, <br /> Bangalore,560004
            </p>
          </aside>
        </div>
      </article>
    </section>
  );
}

export default Contact;
