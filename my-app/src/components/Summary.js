import Contact from "./Contact";
import { motion } from "framer-motion";

let Summary = () => {
  return (
    <motion.div
      className="px-4 md:px-20 py-10 bg-gray-50"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div id="summary" className="text-gray-800 text-lg md:text-xl">
        <ul className="list-disc list-inside space-y-2">
          <li>
            A MERN stack developer with a keen interest in Next.js, TypeScript,
            React.js, Three.js.
          </li>
          <li>My other interests are AI agents, autonomous systems.</li>
        </ul>

        {/* Let's Connect Section */}
        <motion.div
          className="mt-[10px] font-extrabold text-transparent bg-clip-text drop-shadow-lg 
                     cursor-pointer select-none transition-all duration-700 ease-in-out"
          style={{
            fontSize: "clamp(1.62rem, 5.4vw, 2.7rem)",
            backgroundImage:
              "linear-gradient(90deg, #8b5cf6, #ec4899, #facc15)", // default gradient
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          whileHover={{
            backgroundImage:
              "linear-gradient(90deg, #06b6d4, #3b82f6, #a855f7)", // hover gradient
            transition: { duration: 0.8, ease: "easeInOut" },
          }}
        >
          Let's Connect
        </motion.div>

        <div>
          <Contact />
        </div>
      </div>
    </motion.div>
  );
};

export default Summary;
