import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import * as SiIcons from "react-icons/si";
import * as DiIcons from "react-icons/di";
import * as TbIcons from "react-icons/tb";
import { service } from "../helper/skills";
import CustomButton from "./CustomButton";

function Skills() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "All" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "database", label: "Database" },
  ];

  // Filter skills based on active category
  const filteredSkills = service.filter(item => 
    activeFilter === "all" ? true : item.category === activeFilter
  );

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
          What I Know
        </h1>

        <section className="flex justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <CustomButton
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              isActive={activeFilter === filter.id}
            >
              {filter.label}
            </CustomButton>
          ))}
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSkills.map((item, index) => {
            const IconComponent =
              FaIcons[item.icon] ||
              MdIcons[item.icon] ||
              DiIcons[item.icon] ||
              SiIcons[item.icon] ||
              TbIcons[item.icon] ||
              null;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1"
              >
                <h2 className="text-xl font-bold mb-4 text-gray-800">
                  {item.title}
                </h2>
                <div className="text-4xl text-blue-600 mb-4">
                  {IconComponent && <IconComponent />}
                </div>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
