import React from "react";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import { motion } from "framer-motion";
import { service } from "../store/services";

function Services() {
  return (
    <section className="py-20 min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4 text-gray-800">My Services</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Delivering high-quality solutions tailored to your needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {service.map((item, index) => {
            const IconComponent =
              FaIcons[item.icon] || MdIcons[item.icon] || null;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-white p-8 rounded-2xl shadow-lg group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink-100/50 to-purple-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <div className="text-4xl text-pink-500 bg-pink-100/50 p-4 rounded-xl inline-block mb-6">
                    {IconComponent && <IconComponent />}
                  </div>

                  <h2 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-pink-600 transition-colors">
                    {item.title}
                  </h2>

                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
