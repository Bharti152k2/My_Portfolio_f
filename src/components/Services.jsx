import React from "react";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import { service } from "../helper/services";

function Services() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
          What I do
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {service.map((item, index) => {
            const IconComponent =
              FaIcons[item.icon] || MdIcons[item.icon] || null;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1"
              >
                <div className="text-4xl text-blue-600 mb-4">
                  {IconComponent && <IconComponent />}
                </div>
                <h2 className="text-xl font-bold mb-4 text-gray-800">
                  {item.title}
                </h2>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
