import "../App.css";
import Links from "../Utils/Links";
import Bar from "./Bar";

import { motion } from "framer-motion";

const About = () => {
 const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {  // ← Change = to :
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

  return (
    <motion.div
      id="aboutbody"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Links />
      <Bar />

      <motion.div
        className="about-container"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h2 style={{ marginTop: "10px" }}>About Me</h2>
        <p>
          Software Engineer with hands-on production experience building scalable full-stack web applications and AI-integrated backend systems. Strong foundation in system design, OOP, data structures & algorithms, and computer science fundamentals. Passionate about clean, maintainable, production-level code.
        </p>

        <h2 style={{ marginTop: "20px" }}>Experience</h2>
        <ul>
          <li>
            <strong>To Let Globe</strong> — Full Stack Developer Intern (Jan 2025 – Mar 2025) <br />
            Built and deployed production-grade full-stack features using React.js, Node.js, Express.js, and REST APIs on a live platform serving 500+ users. Designed and optimized MongoDB schemas with indexing; implemented JWT authentication, middleware architecture, and third-party API integrations.
          </li>
          <li>
            <strong>Rahul Sir Classes</strong> — Web Developer Intern (Oct 2024 – Jan 2025) <br />
            Built responsive React.js interfaces with REST API integration; debugged and resolved 15+ performance issues improving platform reliability across devices.
          </li>
        </ul>

        <h2 style={{ marginTop: "20px" }}>Technical Skills</h2>
        <ul>
          <li>
            <strong>Languages:</strong> Python, JavaScript (ES6+), TypeScript, Java, C++
          </li>
          <li>
            <strong>Backend:</strong> FastAPI, Flask, Node.js, Express.js, REST APIs, JWT Auth, WebSockets
          </li>
          <li>
            <strong>Frontend:</strong> React.js, Next.js, TypeScript, HTML5, CSS3, Tailwind CSS, Redux, Responsive Design
          </li>
          <li>
            <strong>Databases:</strong> MongoDB, MySQL, PostgreSQL, Redis — Schema Design, Indexing, Query Optimization
          </li>
          <li>
            <strong>AI & LLM:</strong> ZukiJourney API, LangChain, Prompt Engineering, AI Agents, TensorFlow, CNN
          </li>
          <li>
            <strong>System Design:</strong> Microservices, Caching, Load Balancing, Docker, CI/CD, Linux
          </li>
          <li>
            <strong>CS Fundamentals:</strong> OOPs, OS, DBMS, Computer Networks, DSA (500+ problems solved)
          </li>
        </ul>

        <h2 style={{ marginTop: "20px" }}>Education</h2>
        <p>
          🎓 <strong>B.Tech in Information Technology</strong> (Aug 2023 – May 2027) <br />
          Guru Gobind Singh Indraprastha University, Delhi <br />
          <strong>CGPA:</strong> 8.0 <br />
          <strong>Relevant Coursework:</strong> Data Structures & Algorithms, DBMS, Operating Systems, Computer Networks, OOP, System Design
        </p>

        <h2 style={{ marginTop: "20px" }}>Achievements</h2>
        <ul>
          <li>🏆 Runner-up — All India Hackathon (Secured 2nd place among top engineering teams nationwide)</li>
          <li>💻 Competitive Programming — Solved 500+ problems on LeetCode & GeeksforGeeks</li>
        </ul>

        <h2 style={{ marginTop: "20px" }}>Interested Areas</h2>
        <ul>
          <li>Full-Stack Web Development</li>
          <li>Artificial Intelligence & LLM Integration</li>
          <li>System Design & Scalable Architecture</li>
          <li>Competitive Programming & DSA</li>
        </ul>

        <h2 style={{ marginTop: "20px" }}>Contact</h2>
        <p>
          <strong>Email:</strong> himanshuchaudhary586@gmail.com <br />
          <strong>Phone:</strong> +91-7678689822 <br />
          <strong>LinkedIn:</strong> linkedin.com/in/himanshu-choudhary-188161218 <br />
          <strong>GitHub:</strong> github.com/Iamhc
        </p>
      </motion.div>
    </motion.div>
  );
};

export default About;