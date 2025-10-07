import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ResumePDF from "../assets/resume.pdf"; 

export default function Contact() {
  const [dots, setDots] = useState([]);

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
        Get in <span className="text-pink-500">Touch</span>
      </motion.h2>

      {/* Contact Info */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative bg-[#1a1a1a]/60 border border-white/10 rounded-2xl p-10
          backdrop-blur-xl shadow-[0_0_25px_rgba(255,0,255,0.15)] hover:shadow-[0_0_40px_rgba(0,255,255,0.25)]
          transition-all duration-300 text-center max-w-xl w-full z-10"
      >
        <p className="text-gray-300 text-lg mb-4">
          📧 <span className="text-cyan-400">saivarikuti1@gmail.com</span> | 📞 <span className="text-cyan-400">+91 7036143077</span>
        </p>
        <p className="text-gray-400 mb-6">📍 Hyderabad, India</p>

        {/* Download Resume Button */}
        <motion.a
          href={ResumePDF}
          download="Sai_Manikanta_Varikuti_Resume.pdf"
          whileHover={{ scale: 1.1 }}
          className="bg-pink-600 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-pink-500/50 transition"
        >
          Download Resume
        </motion.a>
      </motion.div>

      {/* Glow gradient circles */}
      <div className="absolute -top-40 left-1/2 w-[400px] h-[400px] bg-gradient-to-r from-cyan-500/20 to-pink-500/20 rounded-full blur-3xl opacity-40 animate-pulse -translate-x-1/2" />
      <div className="absolute bottom-0 right-1/3 w-[300px] h-[300px] bg-gradient-to-t from-pink-500/20 to-cyan-500/20 rounded-full blur-3xl opacity-40 animate-pulse" />
    </section>
  );
}
