import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Proposify from "../assets/proposify.png";
import ECommerce from "../assets/E-commerce.png";
import Bhasaka from "../assets/BhasakaTech.png";
import Akamai from "../assets/akamai.png";
import Sarat from "../assets/sarat.png";
import BusinessLabs from "../assets/Business.png";


const projects = [
  {
    title: "Proposify-AI",
    description:
      "AI-powered Business Proposal Generator & Chatbot. Developed full-stack application using Google's Gemini AI to generate structured business proposals from user prompts. Reduced manual effort by 70% and integrated Gmail API for automated email delivery. Designed responsive SPA with interactive 3D backgrounds using Vanta.js.",
    stack: "React.js, JavaScript (ES6+), Google Gemini API, Bootstrap, RESTful APIs",
    link: "https://proposify-ai-1.onrender.com/proposify-ai.html",
    image: Proposify,
  },
  {
    title: "E-Commerce Web Application",
    description:
      "Full-featured e-commerce platform with user authentication, product catalog, shopping cart, and admin panel. Implemented secure JWT authentication with bcrypt encryption. Developed RESTful APIs with 35% faster response times. Created responsive design with 25% better mobile performance.",
    stack: "React.js, Node.js, Express.js, MongoDB, Tailwind CSS, JWT, Bcrypt",
    link: "https://main-project-frontend-react.vercel.app/",
    image: ECommerce,
  },
  {
    title: "Bhasaka Technologies Clone",
    description:
      "Modern Business Website Recreation. Recreated responsive business website with smooth animations and modern UI/UX. Implemented Framer Motion for advanced animations and page transitions. Optimized for cross-browser compatibility and mobile-first design.",
    stack: "React.js, Tailwind CSS, Framer Motion, JavaScript (ES6+)",
    link: "https://bhasaka-tech.vercel.app/",
    image: Bhasaka,
  },
  {
    title: "Akamai Technologies Clone",
    description:
      "Enterprise Security Platform Interface. Built responsive clone of leading cybersecurity company's website. Implemented complex navigation and interactive components with smooth scrolling and professional corporate design.",
    stack: "React.js, Tailwind CSS, Framer Motion, Responsive Design",
    link: "https://akamai-blush.vercel.app/",
    image: Akamai,
  },
  {
    title: "Sarat Tech Clone",
    description:
      "Technology Solutions Company Website. Developed modern tech company interface with clean, professional layout. Implemented responsive grid systems and interactive elements. Features optimized performance and SEO-friendly structure.",
    stack: "React.js, Tailwind CSS, Framer Motion, JavaScript",
    link: "https://sarat-tech-vmxo.vercel.app/",
    image: Sarat,
  },
  {
    title: "Business Labs Clone",
    description:
      "Business Consulting Platform. Created responsive business consulting website with elegant animations. Implemented smooth page transitions and interactive hover effects. Designed pixel-perfect layout matching original design specifications.",
    stack: "React.js, Tailwind CSS, Framer Motion, CSS3",
    link: "https://businesslabs-frontend.vercel.app/",
    image: BusinessLabs,
  },
];

export default function Projects() {
  const [dots, setDots] = useState([]);

  useEffect(() => {
    const temp = Array.from({ length: 25 }, () => ({
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

      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-white mb-10 text-center"
      >
        My <span className="text-cyan-400">Projects</span>
      </motion.h2>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 gap-10 z-10 max-w-5xl w-full">
        {projects.map((p, idx) => (
          <motion.div
            key={idx}
            className="relative rounded-2xl overflow-hidden cursor-pointer"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            {/* Project Image */}
            <img
              src={p.image}
              alt={p.title}
              className="w-full h-64 object-cover rounded-2xl"
            />

            {/* Overlay on Hover */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileHover={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute inset-0 bg-black/80 flex flex-col justify-center items-start p-6 gap-2"
            >
              <h3 className="text-xl font-bold text-cyan-400">{p.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{p.description}</p>
              <p className="text-gray-400 text-xs mt-2">Tech: {p.stack}</p>
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 text-pink-500 hover:text-pink-400 transition"
              >
                View Project →
              </a>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Glow gradient circles */}
      <div className="absolute -top-40 left-1/2 w-[400px] h-[400px] bg-gradient-to-r from-cyan-500/20 to-pink-500/20 rounded-full blur-3xl opacity-40 animate-pulse -translate-x-1/2" />
      <div className="absolute bottom-0 right-1/3 w-[300px] h-[300px] bg-gradient-to-t from-pink-500/20 to-cyan-500/20 rounded-full blur-3xl opacity-40 animate-pulse" />
    </section>
  );
}
