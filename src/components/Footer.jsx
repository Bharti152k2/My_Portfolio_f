import React from "react";

function Footer() {
  let year = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="text-center text-sm text-gray-400">
          © {year} Bharti. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
