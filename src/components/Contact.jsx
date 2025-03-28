import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";

function Contact() {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/yourusername",
      icon: <FaGithub className="text-2xl" />,
      color: "hover:bg-gray-800"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/yourusername",
      icon: <FaLinkedin className="text-2xl" />,
      color: "hover:bg-blue-600"
    },
    {
      name: "Twitter",
      url: "https://twitter.com/yourusername",
      icon: <FaTwitter className="text-2xl" />,
      color: "hover:bg-sky-500"
    },
    {
      name: "Instagram",
      url: "https://instagram.com/yourusername",
      icon: <FaInstagram className="text-2xl" />,
      color: "hover:bg-pink-600"
    }
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <section className="py-20 min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4 text-gray-800">Get In Touch</h1>
          <div className="w-20 h-1 bg-pink-500 mx-auto rounded-full mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Contact Information</h2>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-pink-100 p-3 rounded-full">
                    <FaEnvelope className="text-xl text-pink-500" />
                  </div>
                  <div>
                    <p className="text-gray-600">Email</p>
                    <a href="mailto:your.email@example.com" className="text-gray-800 font-medium hover:text-pink-500">
                      your.email@example.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-pink-100 p-3 rounded-full">
                    <FaMapMarkerAlt className="text-xl text-pink-500" />
                  </div>
                  <div>
                    <p className="text-gray-600">Location</p>
                    <p className="text-gray-800 font-medium">Bangalore, India</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-pink-100 p-3 rounded-full">
                    <FaPhone className="text-xl text-pink-500" />
                  </div>
                  <div>
                    <p className="text-gray-600">Phone</p>
                    <p className="text-gray-800 font-medium">+91 XXXXXXXXXX</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">Connect With Me</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className={`p-3 bg-white text-gray-600 rounded-full shadow-md 
                        ${social.color} hover:text-white transition-all duration-300`}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Send Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <CustomInput
                label="Hello, My name is"
                name="name"
                placeholder="your name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              
              <CustomInput
                type="email"
                label="You can reach me at"
                name="email"
                placeholder="your email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              
              <CustomInput
                type="textarea"
                label="I'd like to discuss"
                name="message"
                placeholder="your message"
                value={formData.message}
                onChange={handleInputChange}
                required
              />

              <div className="flex justify-end">
                <CustomButton onClick={handleSubmit} isActive={true}>
                  Send Message
                </CustomButton>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
