import React, { useState } from "react";
import { motion } from "framer-motion";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(
        "https://portfolio-backend-eta-red.vercel.app/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
            to: "your-email@gmail.com" // Add your receiving email address
          }),
        }
      );

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || "Failed to send email");
      }

      setFormData({ name: "", email: "", message: "" });
      alert("Message sent successfully!");
    } catch (error) {
      console.error("Error details:", error);
      alert(error.message || "Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-20 min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-50">
      <div className="container mx-auto px-6 sm:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4 text-gray-800">
            Get In Touch
          </h1>
          <div className="w-20 h-1 bg-pink-500 mx-auto rounded-full mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            Send Message
          </h2>
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
              <CustomButton
                onClick={handleSubmit}
                isActive={!isLoading}
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Send Message"}
              </CustomButton>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
