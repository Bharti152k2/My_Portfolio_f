import React, { useState } from "react";
import axios from "axios";
import { MdOutlineEmail } from "react-icons/md";
import { NavLink } from "react-router-dom";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
    email: "",
  });
  console.log("Sending Form Data:", formData); // Log the data

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://portfolio-backend-eta-red.vercel.app/api/contact",
        formData,
        {
          headers: {
            "Content-Type": "application/json", // Ensure the content type is set to JSON
          },
          mode: "no-cors",
        }
      );
      console.log(response);
      console.log(formData);
      if (!response.error) {
        alert("Your message was sent successfully!");
        setFormData({ name: "", message: "", email: "" });
      } else {
        alert("There was an error. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
  };
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Say Hello
        </h1>

        <article className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <CustomInput
                label="Hello Bharti, My name is"
                name="name"
                placeholder="your good name here"
                required
                onChange={handleInputChange}
              />

              <CustomInput
                type="textarea"
                label="and I am looking for a team to help me with"
                name="message"
                placeholder="your message for me"
                required
                onChange={handleInputChange}
              />

              <CustomInput
                type="email"
                label="You can reach me at"
                name="email"
                placeholder="your email here"
                required
                onChange={handleInputChange}
              />

              <div className="flex justify-end">
                <CustomButton onClick={handleSubmit} isActive={true}>
                  Send Message
                </CustomButton>
              </div>
            </form>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Contact;
