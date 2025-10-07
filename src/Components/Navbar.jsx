import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Resume from "../assets/resume.pdf";

export default function Navbar() {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Experience", path: "/experience" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-[#0d0d0d]/70 
                 border-b border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.05)]"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-white tracking-wide hover:scale-105 transition-transform"
        >
          <span className="bg-gradient-to-r from-cyan-400 to-pink-500 text-transparent bg-clip-text text-4xl ">
            Portfolio
          </span>
          
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex gap-8 font-medium">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`relative text-gray-300 hover:text-cyan-300 transition 
              ${location.pathname === item.path ? "text-cyan-400" : ""}`}
            >
              {item.name}
              {/* Underline animation */}
              {location.pathname === item.path && (
                <motion.span
                  layoutId="underline"
                  className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-400 to-pink-500 rounded-full"
                />
              )}
            </Link>
          ))}
        </nav>

        {/* CV Button */}
        <motion.a
          href={Resume}
          download
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-pink-500 
                     text-white font-semibold rounded-lg shadow-[0_0_20px_rgba(255,0,255,0.25)] 
                     hover:shadow-[0_0_35px_rgba(255,0,255,0.4)] transition-all"
        >
          Download CV
        </motion.a>
      </div>
    </motion.header>
  );
}
