import React from "react";
import { educationData } from "../store/education";

const Educational = () => {
  return (
    <section className="w-full max-w-4xl mx-auto p-6">
      <div>
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-400" />

          {/* Timeline Items */}
          <div className="relative">
            {educationData.map((item, index) => (
              <div
                key={index}
                className={`flex items-center mb-8 ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className="w-5/12">
                  <div
                    className={`p-4 rounded-lg shadow-lg bg-white border border-gray-200 
                    ${index % 2 === 0 ? "mr-8" : "ml-8"}`}
                  >
                    <div className="text-sm text-blue-600 font-bold">
                      {item.year}
                    </div>
                    <h3 className="text-lg font-bold mt-1">{item.title}</h3>
                    <div className="text-gray-600 mt-1">{item.institution}</div>
                    <p className="text-gray-500 mt-2 text-sm">{item.details}</p>
                  </div>
                </div>

                {/* Timeline Point */}
                <div className="w-2/12 flex justify-center">
                  <div className="w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow" />
                </div>

                {/* Empty space for alternating layout */}
                <div className="w-5/12" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Educational;
