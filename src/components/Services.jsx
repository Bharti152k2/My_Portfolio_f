import React from "react";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import { service } from "../helper/services"; // Adjust the path as needed
import "../../styles/services.css";
function Services() {
  return (
    <section className="services">
      <h1>My Services</h1>
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

export default Services;
