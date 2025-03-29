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

  const filteredSkills = service.filter((item) =>
    activeFilter === "all" ? true : item.category === activeFilter
  );

  return (
    <section className="py-20 min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-50">
      <div className="container mx-auto px-6 sm:px-8 max-w-7xl">
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
          Expertise in various technologies that help me create amazing web
          applications
        </motion.p>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 sm:px-6 py-2 text-sm sm:text-base rounded-full transition-all duration-300 whitespace-nowrap ${
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
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8"
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
                className="flex flex-col items-center gap-3"
              >
                <div className="w-24 h-24 border-[3px] border-gray-200 rounded-2xl flex items-center justify-center hover:border-pink-500 hover:text-pink-500 transition-all duration-300 group bg-white hover:scale-105">
                  <div className="text-4xl text-gray-600 group-hover:text-pink-500 transition-colors">
                    {IconComponent && <IconComponent />}
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-600">
                  {item.title}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
export default Skills;
