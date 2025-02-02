import React from "react";
import "../../styles/about.css";
import B1 from "../assets/M.jpg";
import B2 from "../assets/B.jpg";
import B3 from "../assets/F.jpg";
import B4 from "../assets/G.jpg";
import B5 from "../assets/H.jpg";
import B6 from "../assets/K.jpg";
function About() {
  return (
    <section className="about-page">
      <h1>Who am I ? </h1>
      <aside className="about-me">
        <section className="description">
          <p>
            Hello! I'm a passionate Full Stack Developer who loves turning ideas
            into beautiful, functional digital experiences. With a strong
            foundation in both frontend and backend development, I specialize in
            creating responsive and user-friendly web applications that make a
            difference.
          </p>
          <p>
            My journey in tech has equipped me with a diverse skill set, from
            crafting pixel-perfect user interfaces to building robust
            server-side solutions. I believe in writing clean, maintainable code
            and staying current with the latest industry trends and best
            practices.
          </p>
        </section>
        <section className="about-data">
          <div className="about-img">
            <img src={B3} alt="" />
          </div>
          <div className="about-details">
            <p>
              <strong>Name:</strong> Vijay Bharti Sakarwal
            </p>
            <p>
              <strong>Role:</strong> Full Stack Developer
            </p>
            <p>
              <strong>Location:</strong> Bangalore
            </p>
            <p>
              <strong>Experience:</strong> 0-1 years
            </p>
            <p>
              <strong>Education:</strong> Btech(CSE)
            </p>
            <p>
              <strong>Languages:</strong> Hindi, English, Punjabi
            </p>
            <p>
              <strong>Expertise:</strong> MERN Stack Development
            </p>
            <p>
              <strong>Email:</strong> nidhi15sak@gmail.com
            </p>
          </div>
        </section>
      </aside>
    </section>
  );
}

export default About;
