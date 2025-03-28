import React from "react";

function CustomButton({ children, onClick, isActive }) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 rounded-full transition-all ${
        isActive
          ? "bg-blue-600 text-white hover:bg-blue-700"
          : "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
      }`}
    >
      {children}
    </button>
  );
}

export default CustomButton;
