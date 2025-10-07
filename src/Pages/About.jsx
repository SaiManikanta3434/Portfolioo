import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import AboutImg from "../assets/snow.jpg";

export default function About() {
  const [clouds, setClouds] = useState([]);

  // Generate clouds with random positions and movement
  useEffect(() => {
    const temp = Array.from({ length: 15 }, () => ({
      x: Math.random() * 100, // initial x in vw
      y: -10 - Math.random() * 50, // start above viewport in vh
      width: 10 + Math.random() * 20, // cloud width in vw
      height: 4 + Math.random() * 8, // cloud height in vh
      duration: 30 + Math.random() * 30, // fall duration in seconds
      delay: Math.random() * 10, // stagger start
      opacity: 0.1 + Math.random() * 0.3, // cloud opacity
      drift: Math.random() * 10 - 5, // horizontal drift in vw
    }));
    setClouds(temp);
  }, []);

  return (
    <motion.section
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-20 bg-gradient-to-br from-black via-gray-900 to-cyan-900"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Falling Clouds */}
      {clouds.map((cloud, i) => (
        <motion.div
          key={i}
          className="absolute bg-white rounded-full filter blur-2xl pointer-events-none z-0"
          style={{
            left: `${cloud.x}vw`,
            width: `${cloud.width}vw`,
            height: `${cloud.height}vh`,
            opacity: cloud.opacity,
          }}
          animate={{
            y: ["-10vh", "110vh"], // vertical fall
            x: [`${cloud.x}vw`, `${cloud.x + cloud.drift}vw`], // horizontal drift
          }}
          transition={{
            duration: cloud.duration,
            delay: cloud.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Rotating World Map (optional) */}
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 2000 1001"
        className="absolute w-[1200px] md:w-[1800px] opacity-20 pointer-events-none z-0"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 120, ease: "linear" }}
      >
        <motion.path
          d="M500 200 L600 220 L650 300 ..." // replace with actual continent SVG path
          stroke="#00FFFF"
          strokeWidth="2"
          fill="transparent"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 5, repeat: Infinity, repeatType: "loop" }}
        />
      </motion.svg>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-5xl w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Profile Image */}
        <div className="relative">
          <img
            src={AboutImg}
            alt="About Me"
            className="rounded-xl shadow-2xl w-full h-[550px] hover:scale-105 transition-transform"
          />
        </div>

        {/* Text */}
        <div className="text-white">
          <p className="bg-gradient-to-r from-cyan-800 to-blue-800 bg-clip-text text-transparent font-semibold mb-2">
            ABOUT ME
          </p>
          <h2 className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent text-3xl md:text-4xl font-bold mb-4">
            Passionate Developer & Problem Solver
          </h2>
          <p className="text-gray-300 leading-relaxed">
            I specialize in building modern, responsive web applications with
            clean code and elegant design. I enjoy integrating AI tools and
            creating interactive experiences that users love. My goal is to
            deliver projects that are both performant and visually engaging.
          </p>
        </div>
      </div>
    </motion.section>
  );
}
