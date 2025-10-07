import { motion } from "framer-motion";
import Profile from "../assets/profile.png";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Animated Background (multiple gradient orbs) */}
      <motion.div
        className="absolute top-10 left-10 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-pink-400/40 to-purple-300/30 blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, -40, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-blue-400/40 to-cyan-300/30 blur-3xl"
        animate={{ x: [0, -50, 0], y: [0, 30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Navbar */}
      <header className="flex items-center justify-between px-12 py-6 relative z-10">
        <h1 className="text-2xl font-bold text-gray-800">
          <span className="text-blue-500">Sai</span>Portfolio
        </h1>

        <nav className="flex gap-8 text-gray-700 font-medium group">
          {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative hover:text-blue-500 transition duration-300"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        <a
          href="/SAI_Manikanta_CV.pdf"
          download
          className="px-5 py-2 bg-black text-white rounded-md shadow-md hover:scale-105 transition"
        >
          Download CV
        </a>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-12 mt-16 relative z-10">
        {/* Left Content */}
        <div className="max-w-xl">
          <p className="text-blue-500 font-semibold mb-3">
            Full Stack Developer (MERN)
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Hello! <span className="inline-block">👋</span> I am{" "}
            <span className="text-gray-900">Sai Manikanta Varikuti</span>
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Results-driven MERN Stack Developer with a proven track record of
            designing, optimizing, and deploying full-scale web applications.
            Passionate about integrating AI tools and building secure,
            high-performance systems.
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com/SaiManikanta3434"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-500 text-white rounded-md shadow-lg hover:scale-105 hover:shadow-xl transition"
            >
              Browse Projects
            </a>
            <a
              href="mailto:saivarikuti1@gmail.com"
              className="px-6 py-3 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-50 transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Content (Profile Image) */}
        <div className="mt-10 md:mt-0">
          <img
            src={Profile} // 
            alt="Sai Manikanta"
            className="w-[400px] rounded-xl shadow-lg hover:scale-105 transition"
          />
        </div>
      </section>

      {/* Social Icons */}
      <div className="fixed right-6 top-1/3 flex flex-col gap-4 z-10">
        <a
          href="https://linkedin.com/in/sai-manikanta-varikuti"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md hover:scale-110 transition"
        >
          <span className="text-blue-600 text-lg font-bold">in</span>
        </a>
        <a
          href="https://github.com/SaiManikanta3434"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md hover:scale-110 transition"
        >
          <span className="text-gray-800 text-lg font-bold">GH</span>
        </a>
        <a
          href="mailto:saivarikuti1@gmail.com"
          className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md hover:scale-110 transition"
        >
          <span className="text-red-500 text-lg font-bold">@</span>
        </a>
      </div>
    </div>
  );
}
