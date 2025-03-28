import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaHeart, FaInstagram } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaGithub />, url: "https://github.com/Bharti152k2" },
    {
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/vijay-bharti-sakarwal-584b90259/",
    },
    { icon: <FaInstagram />, url: "https://www.instagram.com/_bha_rti98/" },
  ];

  return (
    <footer className="bg-gradient-to-r from-pink-500 to-rose-500 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex space-x-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors text-xl hover:scale-110 transform duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>

          <div className="flex items-center text-white/90">
            <span>Made with</span>
            <FaHeart className="text-white mx-2 animate-pulse" />
            <span>by Bharti</span>
          </div>

          <div className="text-sm text-white/70">
            © {year} All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
