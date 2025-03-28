import React from "react";
import { motion } from "framer-motion";

function CustomButton({ children, onClick, isActive, fullWidth }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`
        ${fullWidth ? 'w-full' : 'w-auto'}
        px-8 py-3 rounded-lg font-medium
        shadow-md transition-all duration-300
        flex items-center justify-center gap-2
        ${isActive 
          ? "bg-gradient-to-r from-pink-500 to-rose-500 text-white hover:from-pink-600 hover:to-rose-600 hover:shadow-lg"
          : "border-2 border-pink-500 text-pink-500 hover:bg-pink-50"
        }
      `}
    >
      {children}
    </motion.button>
  );
}

export default CustomButton;
