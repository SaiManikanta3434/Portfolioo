// App.jsx
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import React from "react";
import About from "./Pages/About";
import Skills from "./Pages/Skills"
import Experience from "./Pages/Experience";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Education from "./Pages/Education";
import Navbar from "./Components/Navbar";

export default function App() {
  return (
    <div className="bg-[#1c1e26] min-h-screen text-white font-poppins">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/skills" element={<Skills/>} />
        <Route path="/experience" element={<Experience/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/education" element={<Education/>} />
      </Routes>
    </div>
  );
}
