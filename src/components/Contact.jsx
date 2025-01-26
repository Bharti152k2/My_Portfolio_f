import React, { useState } from "react";
import "../../styles/contact.css";
import g7 from "../assets/g7.jpg";
import axios from "axios";
// https://portfolio-backend-eta-red.vercel.app/api/contact
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
    email: "",
  });

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
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
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
          <img src={g7} alt="description" height="200rem" />
          <aside>address an links</aside>
        </div>
      </article>
    </section>
  );
}

export default Contact;
