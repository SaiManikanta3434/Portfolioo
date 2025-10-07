import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  SiPython,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiGithub,
  SiPostman,
  SiVercel,
  SiRender,
  SiNetlify,
  SiGooglegemini,
} from "react-icons/si";
import { FaAws, FaRobot, FaKey, FaLock, FaGitAlt } from "react-icons/fa";

const skills = {
  Languages: [
    { name: "Python", icon: SiPython },
    { name: "JavaScript", icon: SiJavascript },
    { name: "SQL", icon: FaKey },
    { name: "C", icon: FaLock },
  ],
  Frontend: [
    { name: "React.js", icon: SiReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Bootstrap", icon: SiBootstrap },
  ],
  Backend: [
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Express.js", icon: SiExpress },
    { name: "REST APIs", icon: FaRobot },
    { name: "JWT", icon: FaKey },
    { name: "Bcrypt", icon: FaLock },
  ],
  Database: [
    { name: "MongoDB", icon: SiMongodb },
    { name: "MySQL", icon: SiMysql },
    { name: "AWS", icon: FaAws },
  ],
  Tools: [
    { name: "GitHub", icon: SiGithub },
    { name: "Git", icon: FaGitAlt },
    { name: "Vercel", icon: SiVercel },
    { name: "Render", icon: SiRender },
    { name: "Netlify", icon: SiNetlify },
    { name: "Postman", icon: SiPostman },
  ],
  AI: [
    { name: "Google Gemini API", icon: SiGooglegemini },
    { name: "GitHub Copilot", icon: FaRobot },
    { name: "Cursor", icon: FaRobot },
    { name: "Prompt Engineering", icon: FaRobot },
  ],
};

export default function Skills() {
  const [dots, setDots] = useState([]);

  useEffect(() => {
    const temp = Array.from({ length: 25 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      delay: Math.random() * 5,
      duration: 5 + Math.random() * 5,
      size: 2 + Math.random() * 4,
    }));
    setDots(temp);
  }, []);

  return (
    <motion.section
      className="relative min-h-screen bg-[#0d0d0d] overflow-hidden px-10 py-20 flex flex-col justify-center items-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Floating dots */}
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
            width: dot.size,
            height: dot.size,
            filter: "blur(1px)",
          }}
        />
      ))}

      {/* Glow gradient circles */}
      <div className="absolute -top-40 left-1/2 w-[400px] h-[400px] bg-gradient-to-r from-cyan-500/20 to-pink-500/20 rounded-full blur-3xl opacity-40 animate-pulse -translate-x-1/2" />
      <div className="absolute bottom-0 right-1/3 w-[300px] h-[300px] bg-gradient-to-t from-pink-500/20 to-cyan-500/20 rounded-full blur-3xl opacity-40 animate-pulse" />

      {/* Section content */}
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl font-bold mb-10 text-pink-500 text-center z-10"
      >
        Technical Skills
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8 z-10 w-full max-w-5xl">
        {Object.entries(skills).map(([category, items]) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#1e1f29]/20 p-6 rounded-xl shadow-lg hover:shadow-pink-500/40 transition transform hover:scale-105 backdrop-blur-md"
          >
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">{category}</h3>
            <ul className="space-y-2">
              {items.map(({ name, icon: Icon }) => (
                <li
                  key={name}
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition"
                >
                  <span className="text-2xl text-pink-500 hover:rotate-6 hover:scale-110 transition-transform">
                    <Icon />
                  </span>
                  {name}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
