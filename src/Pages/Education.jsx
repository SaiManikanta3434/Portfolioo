import { motion } from "framer-motion";

export default function Education() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="px-10 py-20 max-w-4xl mx-auto"
    >
      <h2 className="text-3xl font-bold mb-6 text-pink-500">Education</h2>
      <div className="bg-[#2a2c35] p-6 rounded-lg shadow-lg hover:scale-105 transition">
        <h3 className="text-xl font-semibold text-cyan-400">
          B.Tech in Mechanical Engineering
        </h3>
        <p className="text-gray-300">Lakireddy Bali Reddy College of Engineering</p>
        <p className="text-sm text-gray-400">GPA: 8.48 / 10 (2019 – 2023)</p>
      </div>
    </motion.section>
  );
}
