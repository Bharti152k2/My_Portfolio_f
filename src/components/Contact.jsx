import React from "react";
import "../../styles/contact.css";
import g7 from "../assets/g7.jpg";

function Contact() {
  return (
    <section className="reach">
      <h1>Say Hello</h1>
      <article className="details">
        <div className="form">
          <form action="">
            <div>
              <label htmlFor="name">Hello Bharti, My name is</label>
              <input
                className="input"
                type="text"
                id="name"
                name="name"
                placeholder="your good name please"
                required
              />
            </div>
            <div>
              <label htmlFor="message">
                and I am looking for a team to help me with
              </label>
              <textarea
                className="input"
                id="message"
                name="message"
                placeholder="your message for me"
                required
              ></textarea>
            </div>
            <div>
              <label htmlFor="email">You can reach me at</label>
              <input
                className="input"
                type="email"
                id="email"
                name="email"
                placeholder="your email here"
                required
              />
            </div>
            <button type="submit">Send</button>
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
