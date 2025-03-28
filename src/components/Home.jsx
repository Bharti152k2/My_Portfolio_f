import React from "react";
import { motion } from "framer-motion"; // First install: npm install framer-motion
import { TypeAnimation } from "react-type-animation"; // First install: npm install react-type-animation
import B7 from "../assets/n.jpg";

function Home() {
  return (
    <section className="min-h-screen flex items-center justify-between px-8 py-16 bg-gradient-to-br from-pink-50 via-white to-pink-50">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-8">
        <motion.article
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left"
        >
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-pink-600 font-medium text-xl mb-2"
          >
            Hi there, 👋
          </motion.h3>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl font-bold mb-2"
          >
            I'm Bharti
          </motion.h1>

          <h1 className="text-4xl font-bold text-gray-700 mb-6">
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "MERN Stack Developer",
                2000,
                "Web Developer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-gray-600 text-lg leading-relaxed mb-8"
          >
            A passionate MERN stack developer dedicated to building exceptional
            web applications. I transform ideas into reality using MERN. With a
            keen eye for detail and a problem-solving mindset, I create
            solutions that make an impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex gap-4 justify-center md:justify-start"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-pink-500 text-white px-6 py-3 rounded-full hover:bg-pink-600 transition-colors"
            >
              Resume Download
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-pink-500 text-pink-500 px-6 py-3 rounded-full hover:bg-pink-500 hover:text-white transition-colors"
            >
              Let's Talk
            </motion.button>
          </motion.div>
        </motion.article>

        <motion.article
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 relative"
        >
          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative z-10"
          >
            <img
              src={B7}
              alt="Profile"
              className="w-[400px] h-[400px] object-cover rounded-full border-8 border-white shadow-2xl"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-b from-pink-200/30 to-transparent"></div>
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-r from-pink-200/30 to-purple-200/30 rounded-full blur-3xl -z-10"></div>
        </motion.article>
      </div>
    </section>
  );
}

export default Home;
