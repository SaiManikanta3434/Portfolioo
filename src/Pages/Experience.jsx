import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const experiences = [
  {
    company: "Randstad India Pvt. Ltd – Hyderabad, India",
    date: "Apr 2024 – Oct 2024",
    role: "Full Stack Developer",
    description: [
      "Engineered and enhanced internal full-stack applications, improving system performance by 20%.",
      "Developed secure RESTful APIs with JWT authentication and bcrypt encryption.",
      "Built reusable React components, focusing on performance and UX improvements.",
      "Collaborated within an Agile cross-functional team using Git/GitHub CI/CD workflows.",
    ],
    color: "from-purple-500 to-indigo-500",
  },
  {
    company: "Codedale",
    date: "Feb 2025 - Present",
    role: "Full Stack Developer Intern",
    description: [
      "Developed full-stack application using Google’s Gemini AI to generate structured proposals.",
      "Integrated Gmail API for automated delivery, reducing manual effort by 70%.",
      "Designed SPA with interactive 3D backgrounds using Vanta.js.",
    ],
    color: "from-pink-500 to-red-500",
  }
];

export default function Experience() {
  const [dots, setDots] = useState([]);

  // Generate floating dots for background
  useEffect(() => {
    const temp = Array.from({ length: 25 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      delay: Math.random() * 4,
      duration: 6 + Math.random() * 4,
    }));
    setDots(temp);
  }, []);

  return (
    <section className="relative min-h-screen bg-[#0c0c0c] overflow-hidden py-20 flex flex-col items-center justify-center">
      {/* Floating white dots */}
      {dots.map((dot, i) => (
        <motion.div
          key={i}
          initial={{ y: dot.y }}
          animate={{ y: [dot.y, dot.y - 70, dot.y] }}
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

      {/* Glowing Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-r from-cyan-500/20 to-pink-500/20 rounded-full blur-3xl opacity-40 animate-pulse" />
      <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] bg-gradient-to-t from-purple-500/20 to-blue-500/20 rounded-full blur-3xl opacity-40 animate-pulse" />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-14 z-10"
      >
        <p className="text-pink-500 uppercase tracking-widest font-semibold">
          Experiences
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          My Work Experiences
        </h2>
      </motion.div>

      {/* Experience Timeline */}
      <div className="relative w-full max-w-5xl z-10 border-l border-white/20 pl-8">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="relative mb-12"
          >
            {/* Timeline marker */}
            <div
              className={`absolute -left-[17px] top-3 w-8 h-8 rounded-full bg-gradient-to-r ${exp.color} border-4 border-[#0c0c0c] shadow-lg shadow-[rgba(255,255,255,0.2)]`}
            ></div>

            {/* Experience card */}
            <div
              className="bg-[#1a1a1a]/60 backdrop-blur-xl border border-white/10 rounded-2xl 
              p-6 shadow-[0_0_25px_rgba(0,255,255,0.15)] hover:shadow-[0_0_40px_rgba(255,0,255,0.25)] 
              hover:scale-[1.03] transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-cyan-400">{exp.role}</h3>
              <p className="text-gray-400 text-sm mb-3">
                {exp.company} | {exp.date}
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 leading-relaxed">
                {exp.description.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
