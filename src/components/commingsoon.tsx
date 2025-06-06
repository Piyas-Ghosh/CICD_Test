import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ComingSoon = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2025-07-01T00:00:00");
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const countdownStyle: React.CSSProperties = {
    fontSize: "1.25rem",
    marginBottom: "1rem",
    color: "#93c5fd",
    fontWeight: 500,
  };

  return (
    <div
      className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-900 to-gray-900 text-white"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white/10 backdrop-blur-md p-10 rounded-2xl shadow-xl border border-white/20 max-w-md text-center"
      >
        <motion.h1
          className="text-5xl font-bold mb-2 text-white"
          initial={{ y: -10 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.4 }}
        >
          🚀 Coming Soon
        </motion.h1>

        {/* Countdown Timer */}
        <div style={countdownStyle}>
          ⏳ Launching in:{" "}
          {`${timeLeft.days}d ${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`}
        </div>

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
          style={{
            color: "#3b82f6",
            fontSize: "1.5rem",
            fontWeight: "bold",
            border: "2px solid #3b82f6",
            padding: "0.5rem 1rem",
            borderRadius: "0.5rem",
            cursor: "pointer",
            marginTop: "3rem",
          }}
        >
          Stay Connected
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ComingSoon;
