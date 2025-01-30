import React from "react";
import "../../styles/home.css";
import B1 from "../assets/M.jpg";
import B2 from "../assets/B.jpg";
import B3 from "../assets/F.jpg";
import B4 from "../assets/G.jpg";
import B5 from "../assets/H.jpg";
import B6 from "../assets/K.jpg";
function Home() {
  return (
    <section className="home-banner">
      <article className="intro">
        <h3>greetings</h3>
        <h1>designation</h1>
        <p>descriptiom</p>
        <div className="btns">
          <button>resume download</button>
          <button>let's talk</button>
        </div>
      </article>
    </section>
  );
}

export default Home;
