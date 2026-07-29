import "../App.css";
import Links from "../Utils/Links";
import Bar from "./Bar";

import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      id="aboutbody"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Links />
      <Bar />

      <motion.div
        className="about-container"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h2 style={{ marginTop: "10px" }}>Experience</h2>

        <ul>
          <li>
            <strong>To Let Globe</strong> — Full Stack Developer Intern (Jan 2025 – Mar 2025) <br />
            Built and deployed full-stack features using React.js, Node.js, Express.js, and REST APIs on a live platform serving users. Designed and optimized MongoDB schemas with indexing; implemented JWT authentication.
          </li>

          <li>
            <strong>Rahul Sir Classes</strong> — Web Developer Intern (Oct 2024 – Jan 2025) <br />
            Built responsive React.js interfaces with REST API integration; debugged and resolved 15+ performance issues improving platform reliability across devices.
          </li>
        </ul>


        <h2 style={{ marginTop: "10px" }}>Skills</h2>

        <ul>
          <li>
            <strong>Languages:</strong> Python, JavaScript (ES6+), TypeScript, Java, C++
          </li>

          <li>
            <strong>Backend:</strong> FastAPI, Node.js, Express.js, REST APIs, WebSockets
          </li>

          <li>
            <strong>Frontend:</strong> React.js, Next.js, TypeScript, HTML5, CSS3, Tailwind CSS
          </li>

          <li>
            <strong>Databases:</strong> MongoDB, MySQL,Caching (Redis)
          </li>

          <li>
            <strong>AI & LLM:</strong> ZukiJourney API, LangChain, Prompt Engineering, AI Agents, TensorFlow, CNN
          </li>

          <li>
            <strong>DevOps & Tools:</strong> Docker, Git, GitHub, CI/CD Basics, Postman, Agile/Scrum
          </li>
        </ul>


        <h2 style={{ marginTop: "10px" }}>Education</h2>

        <p>
          🎓 B.Tech in Information Technology (Aug 2023 – May 2027) <br />
          Guru Gobind Singh Indraprastha University, Delhi <br />
          CGPA: 8.0 <br />
          Relevant Coursework: DSA, DBMS, Operating Systems, Computer Networks, OOP, System Design
        </p>


        <h2 style={{ marginTop: "10px" }}>Interested Areas</h2>

        <ul>
          <li>Full Stack Web Development, AI & LLM Integration</li>
        </ul>

      </motion.div>
    </motion.div>
  );
};

export default About;