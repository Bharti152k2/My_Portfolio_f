import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import * as SiIcons from "react-icons/si";
import * as DiIcons from "react-icons/di";
import * as TbIcons from "react-icons/tb";
import { motion } from "framer-motion";
import { service } from "../store/skills";

function Skills() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "All" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "database", label: "Database" },
  ];

  const filteredSkills = service.filter(item => 
    activeFilter === "all" ? true : item.category === activeFilter
  );

  return (
    <section className="py-20 min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-50">
      <div className="container mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-center mb-4 text-gray-800"
        >
          My Skills
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
        >
          Expertise in various technologies that help me create amazing web applications
        </motion.p>

        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeFilter === filter.id
                  ? "bg-pink-500 text-white shadow-lg scale-105"
                  : "bg-white text-gray-600 hover:bg-pink-50 hover:text-pink-500"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.section>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredSkills.map((item, index) => {
            const IconComponent =
              FaIcons[item.icon] ||
              MdIcons[item.icon] ||
              DiIcons[item.icon] ||
              SiIcons[item.icon] ||
              TbIcons[item.icon] ||
              null;
            return (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-pink-100/50"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl text-pink-500 bg-pink-100 p-3 rounded-xl">
                    {IconComponent && <IconComponent />}
                  </div>
                  <h2 className="text-xl font-bold text-gray-800">
                    {item.title}
                  </h2>
                </div>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                <div className="mt-4 flex gap-2">
                  {item.tags?.map((tag, idx) => (
                    <span key={idx} className="text-xs px-2 py-1 bg-pink-50 text-pink-600 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
export default Skills;