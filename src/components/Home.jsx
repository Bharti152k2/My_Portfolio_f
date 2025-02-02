import React from "react";
import "../../styles/home.css";
import B1 from "../assets/M.jpg";
import B2 from "../assets/B.jpg";
import B3 from "../assets/F.jpg";
import B4 from "../assets/G.jpg";
import B5 from "../assets/H.jpg";
import B6 from "../assets/K.jpg";
import B7 from "../assets/N.jpg";
function Home() {
  return (
    <section className="home-banner">
      <article className="intro">
        <h3>Hii there,</h3>
        <h1>I'm Bharti</h1>
        <h1>Full Stack Developer</h1>
        <p>
          A passionate MERN stack developer dedicated to building exceptional{" "}
          <br />
          web applications. I transform ideas into reality using MERN. <br />
          With a keen eye for detail and a problem-solving mindset, I create{" "}
          <br />
          solutions that make an impact.
        </p>
        <div className="btns">
          <button>Resume Download</button>
          <button>Let's Talk</button>
        </div>
      </article>
      <article>
        <img src={B7} alt="" width="500px" />
      </article>
    </section>
  );
}

export default Home;
