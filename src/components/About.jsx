import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaGraduationCap, FaLanguage, FaCode, FaEnvelope } from 'react-icons/fa';
import { MdWork, MdPerson } from 'react-icons/md';

function About() {
  return (
    <section className="py-20 min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold mb-4 text-gray-800">About Me</h1>
          <div className="w-20 h-1 bg-pink-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <div className="mb-8 border-b border-pink-100 pb-6">
              <p className="text-gray-600 text-lg">
                Hello! I'm a passionate Full Stack Developer specializing in MERN stack development. 
                I create responsive and user-friendly web applications, combining creative design with 
                efficient functionality.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InfoItem icon={<MdPerson />} label="Name" value="Vijay Bharti Sakarwal" />
              <InfoItem icon={<FaCode />} label="Role" value="Full Stack Developer" />
              <InfoItem icon={<FaMapMarkerAlt />} label="Location" value="Bangalore" />
              <InfoItem icon={<MdWork />} label="Experience" value="0-1 years" />
              <InfoItem icon={<FaGraduationCap />} label="Education" value="Btech(CSE)" />
              <InfoItem icon={<FaLanguage />} label="Languages" value="Hindi, English, Punjabi" />
              <InfoItem icon={<FaCode />} label="Expertise" value="MERN Stack Development" />
              <InfoItem icon={<FaEnvelope />} label="Email" value="nidhi15sak@gmail.com" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const InfoItem = ({ icon, label, value }) => (
  <motion.div 
    whileHover={{ x: 5 }}
    className="flex items-center gap-4 p-2 rounded-lg hover:bg-pink-50 transition-colors"
  >
    <span className="text-pink-500 text-xl">{icon}</span>
    <p className="text-gray-700">
      <strong className="font-semibold text-gray-800">{label}:</strong>{" "}
      <span className="text-gray-600">{value}</span>
    </p>
  </motion.div>
);

export default About;
