// ComingSoon.tsx
import React from "react";
import { motion } from "framer-motion";

const ComingSoon = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-900 to-gray-900 text-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white/10 backdrop-blur-md p-10 rounded-2xl shadow-xl border border-white/20 max-w-md text-center"
      >
        <motion.h1
          className="text-5xl font-bold mb-4 text-white"
          initial={{ y: -10 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.4 }}
        >
          🚀 Coming Soon
        </motion.h1>
        <p className="text-lg text-white/80 mb-6">
          We’re working on something awesome. Stay tuned!
        </p>
        <motion.div
          animate={{
            boxShadow: [
              "0 0 10px #3b82f6",
              "0 0 20px #3b82f6",
              "0 0 30px #3b82f6",
              "0 0 20px #3b82f6",
              "0 0 10px #3b82f6",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "loop",
          }}
          style={{color: "#3b82f6", fontSize: "1.5rem", fontWeight: "bold" ,border: "2px solid #3b82f6", padding: "0.5rem 1rem", borderRadius: "0.5rem", cursor: "pointer" ,marginTop: "3rem"}}
        >
          Stay Connected
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ComingSoon;
