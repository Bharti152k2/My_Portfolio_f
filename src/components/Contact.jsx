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
  const [responseMessage, setResponseMessage] = useState({
    text: "",
    type: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setResponseMessage({ text: "", type: "" });

    try {
      const response = await fetch(
        // "http://localhost:5001/api/contact",
        "https://bharti-portfolio-b.onrender.com/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // Accept: "application/json",
            // Origin: "https://my-portfolio-f-five.vercel.app",
            // "Origin": "http://localhost:5173"
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok || data.error) {
        if (data.message.includes("configuration")) {
          throw new Error("Server email service is temporarily unavailable. Please try again later or contact directly via email.");
        }
        throw new Error(data.message || "Failed to send email");
      }

      setFormData({ name: "", email: "", message: "" });
      setResponseMessage({
        text: data.message || "Message sent successfully!",
        type: "success",
      });
    } catch (error) {
      console.error("Error details:", error);
      setResponseMessage({
        text: error.message,
        type: "error",
      });
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

            {responseMessage.text && (
              <div
                className={`p-4 rounded-lg ${
                  responseMessage.type === "success"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {responseMessage.text}
              </div>
            )}

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
