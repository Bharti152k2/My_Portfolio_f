import React from "react";
import { motion } from "framer-motion";
import { educationData } from "../store/education";
import { FaGraduationCap, FaSchool } from "react-icons/fa";

const Educational = () => {
  return (
    <section className="py-20 min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4 text-gray-800">Education Journey</h1>
          <div className="w-20 h-1 bg-pink-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-pink-200" />

          {/* Timeline Items */}
          <div className="relative">
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`flex items-center mb-12 ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className="w-5/12">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`p-6 rounded-2xl shadow-lg bg-white border border-pink-100 
                    ${index % 2 === 0 ? "mr-8" : "ml-8"} hover:shadow-xl transition-all`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      {index % 2 === 0 ? <FaGraduationCap className="text-2xl text-pink-500" /> : <FaSchool className="text-2xl text-pink-500" />}
                      <div className="text-sm font-medium text-pink-500 px-3 py-1 bg-pink-50 rounded-full">
                        {item.year}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                    <div className="text-gray-600 mt-2 font-medium">{item.institution}</div>
                    <p className="text-gray-500 mt-3 text-sm leading-relaxed">{item.details}</p>
                  </motion.div>
                </div>

                {/* Timeline Point */}
                <div className="w-2/12 flex justify-center">
                  <motion.div 
                    whileHover={{ scale: 1.2 }}
                    className="w-4 h-4 bg-pink-500 rounded-full border-4 border-white shadow-md"
                  />
                </div>

                {/* Empty space for alternating layout */}
                <div className="w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Educational;
