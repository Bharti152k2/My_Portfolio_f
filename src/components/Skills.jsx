import React from "react";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import { service } from "../helper/skills"; // Adjust the path as needed
import "../../styles/skills.css";

function Skills() {
  const AllSkills = () => {
    {
      service.map((item, index) => {
        const IconComponent = FaIcons[item.icon] || MdIcons[item.icon] || null; // Dynamically resolve the icon
        return (
          <div key={index} className="service-item">
            <h2>{item.title}</h2>
            <div className="icon">{IconComponent && <IconComponent />}</div>
            <p>{item.desc}</p>
          </div>
        );
      });
    }
  };
  return (
    <section className="services">
      <h1>What I Know</h1>
      <section>
        <button onClick={AllSkills}>All</button>
        <button>Frontend</button>
        <button>Backend</button>
        <button>Database</button>
      </section>
      <div className="service-list">
        {service.map((item, index) => {
          const IconComponent =
            FaIcons[item.icon] || MdIcons[item.icon] || null; // Dynamically resolve the icon
          return (
            <div key={index} className="service-item">
              <h2>{item.title}</h2>
              <div className="icon">{IconComponent && <IconComponent />}</div>
              <p>{item.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
