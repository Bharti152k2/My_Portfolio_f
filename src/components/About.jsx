import React from "react";
import B3 from "../assets/F.jpg";

function About() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Who am I?
        </h1>

        <aside className="max-w-6xl mx-auto">
          {/* Introduction Section */}
          <section className="bg-white rounded-lg shadow-md p-8 mb-8">
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Hello! I'm a passionate Full Stack Developer who loves turning
              ideas into beautiful, functional digital experiences. With a
              strong foundation in both frontend and backend development, I
              specialize in creating responsive and user-friendly web
              applications that make a difference.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              My journey in tech has equipped me with a diverse skill set, from
              crafting pixel-perfect user interfaces to building robust
              server-side solutions. I believe in writing clean, maintainable
              code and staying current with the latest industry trends and best
              practices.
            </p>
          </section>

          {/* Profile Section */}
          <section className="grid md:grid-cols-2 gap-8 bg-white rounded-lg shadow-md p-8">
            <div className="relative">
              <img
                src={B3}
                alt="Profile"
                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
              />
            </div>

            <div className="space-y-4">
              <InfoItem label="Name" value="Vijay Bharti Sakarwal" />
              <InfoItem label="Role" value="Full Stack Developer" />
              <InfoItem label="Location" value="Bangalore" />
              <InfoItem label="Experience" value="0-1 years" />
              <InfoItem label="Education" value="Btech(CSE)" />
              <InfoItem label="Languages" value="Hindi, English, Punjabi" />
              <InfoItem label="Expertise" value="MERN Stack Development" />
              <InfoItem label="Email" value="nidhi15sak@gmail.com" />
            </div>
          </section>
        </aside>
      </div>
    </section>
  );
}

// Helper component for info items
const InfoItem = ({ label, value }) => (
  <p className="text-gray-700">
    <strong className="font-semibold text-blue-600">{label}:</strong>{" "}
    <span className="text-gray-800">{value}</span>
  </p>
);

export default About;
