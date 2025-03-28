import React from "react";
import B1 from "../assets/M.jpg";
import B2 from "../assets/B.jpg";
import B3 from "../assets/F.jpg";
import B4 from "../assets/G.jpg";
import B5 from "../assets/H.jpg";
import B6 from "../assets/K.jpg";
import B7 from "../assets/N.jpg";

function Home() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-white to-gray-100">
      <article className="max-w-3xl text-center md:text-left">
        <h3 className="text-blue-600 font-medium text-xl mb-2">Hii there,</h3>
        <h1 className="text-5xl font-bold mb-2">I'm Bharti</h1>
        <h1 className="text-4xl font-bold text-gray-700 mb-6">
          Full Stack Developer
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          A passionate MERN stack developer dedicated to building exceptional{" "}
          <br />
          web applications. I transform ideas into reality using MERN. <br />
          With a keen eye for detail and a problem-solving mindset, I create{" "}
          <br />
          solutions that make an impact.
        </p>
        <div className="flex gap-4 justify-center md:justify-start">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all hover:scale-105">
            Resume Download
          </button>
          <button className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-full hover:bg-blue-600 hover:text-white transition-all hover:scale-105">
            Let's Talk
          </button>
        </div>
      </article>
      {/* <article>
        <img src={B7} alt="" width="500px" />
      </article> */}
    </section>
  );
}

export default Home;
