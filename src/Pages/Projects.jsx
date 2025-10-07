import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const projects = [
  {
    title: "Proposify-AI",
    description:
      "AI-powered proposal generator with Gmail integration & 3D interactive UI. Reduced manual effort by 70%.",
    stack: "Google Gemini API, HTML, CSS, JavaScript, Bootstrap",
    link: "https://proposify-ai-1.onrender.com/proposify-ai.html",
  },
  {
    title: "E-Commerce App",
    description:
      "Full MERN stack e-commerce platform with JWT auth, product catalog, cart, and admin panel.",
    stack: "React, Node.js, Express, MongoDB, Tailwind CSS",
    link: "https://main-project-frontend-react.vercel.app/",
  },
];

export default function Projects() {
  const [dots, setDots] = useState([]);

  // generate random floating dots
  useEffect(() => {
    const temp = Array.from({ length: 20 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      delay: Math.random() * 5,
      duration: 6 + Math.random() * 4,
    }));
    setDots(temp);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center bg-[#0d0d0d] overflow-hidden px-6 py-20">
      {/* Floating white dots */}
      {dots.map((dot, i) => (
        <motion.div
          key={i}
          initial={{ y: dot.y }}
          animate={{ y: [dot.y, dot.y - 60, dot.y] }}
          transition={{
            duration: dot.duration,
            repeat: Infinity,
            delay: dot.delay,
            ease: "easeInOut",
          }}
          className="absolute bg-white/40 rounded-full"
          style={{
            left: dot.x,
            width: 3,
            height: 3,
            filter: "blur(1px)",
          }}
        />
      ))}

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-white mb-10 text-center"
      >
        My <span className="text-cyan-400">Projects</span>
      </motion.h2>

      {/* Projects Container */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="grid md:grid-cols-2 gap-10 z-10 max-w-5xl w-full"
      >
        {projects.map((p, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="relative bg-[#1a1a1a]/60 border border-white/10 rounded-2xl p-6 
              backdrop-blur-xl shadow-[0_0_25px_rgba(0,255,255,0.15)] hover:shadow-[0_0_40px_rgba(255,0,255,0.25)] 
              transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-cyan-400">{p.title}</h3>
            <p className="text-gray-300 mt-3 leading-relaxed">{p.description}</p>
            <p className="text-sm text-gray-400 mt-2">Tech: {p.stack}</p>
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-pink-500 hover:text-pink-400 transition"
            >
              View Project →
            </a>
          </motion.div>
        ))}
      </motion.div>

      {/* Glow gradient circles */}
      <div className="absolute -top-40 left-1/2 w-[400px] h-[400px] bg-gradient-to-r from-cyan-500/20 to-pink-500/20 rounded-full blur-3xl opacity-40 animate-pulse -translate-x-1/2" />
      <div className="absolute bottom-0 right-1/3 w-[300px] h-[300px] bg-gradient-to-t from-pink-500/20 to-cyan-500/20 rounded-full blur-3xl opacity-40 animate-pulse" />
    </section>
  );
}
