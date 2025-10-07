import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Profile from "../assets/profile.png";

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      className="relative min-h-screen bg-[#0d0d0d] overflow-hidden flex items-center justify-center px-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Cursor-driven Gradient Circles */}
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-r from-cyan-500/40 to-pink-500/40 blur-3xl pointer-events-none"
        style={{
          x: mousePos.x - 200,
          y: mousePos.y - 200,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      />
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-t from-pink-500/30 to-cyan-400/30 blur-3xl pointer-events-none"
        style={{
          x: mousePos.x - 250,
          y: mousePos.y - 250,
        }}
        transition={{ type: "spring", stiffness: 40, damping: 25 }}
      />

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl relative z-10 mt-16">
        {/* Left Content */}
        <div className="max-w-xl text-white">
          <p className="text-cyan-400 font-semibold mb-3">
            React.js Frontend Developer
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Hello! <span className="inline-block">👋</span> I am{" "}
            <span className="text-white">Sai Manikanta Varikuti</span>
          </h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Passionate React.js Frontend Developer with expertise in building
            modern, responsive, and scalable web applications. Proven ability to
            translate UI/UX designs into high-performance components using
            React.js, Redux, and JavaScript (ES6+).
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com/SaiManikanta3434"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-cyan-500 text-black font-semibold rounded-md shadow-lg hover:scale-105 hover:shadow-xl transition"
            >
              Browse Projects
            </a>
            <a
              href="mailto:saivarikuti1@gmail.com"
              className="px-6 py-3 border border-cyan-500 text-cyan-400 rounded-md hover:bg-cyan-500/10 transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Content (Profile Image) */}
        <div className="mt-10 md:mt-0">
          <img
            src={Profile}
            alt="Sai Manikanta"
            className="w-[400px] rounded-xl shadow-lg hover:scale-105 transition"
          />
        </div>
      </section>
    </motion.div>
  );
}
