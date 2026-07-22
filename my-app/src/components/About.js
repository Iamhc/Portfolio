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

        <h2>About Me</h2>

        <p>
          Software Engineer focused on building scalable full-stack web
          applications and interactive experiences. I enjoy working with
          modern technologies like React, Node.js, Three.js, and AI-based
          systems.
        </p>


        <h2>Experience</h2>

        <ul>
          <li>
            <strong>To-Let Globe</strong> — Full Stack Developer
            <br />
            Built full-stack features using MERN stack (MongoDB, Express.js,
            React.js, Node.js). Worked on authentication, APIs, database
            integration, and responsive UI development.
          </li>

          <li>
            <strong>Rahul Sir Classes</strong> — Web Developer
            <br />
            Developed educational websites using Wix, HTML, CSS, and
            JavaScript. Improved website responsiveness and user experience.
          </li>
        </ul>


        <h2>Technical Skills</h2>

        <ul>
          <li>
            <strong>Languages:</strong> C++, Python, JavaScript, TypeScript,
            Java, PHP
          </li>

          <li>
            <strong>Frontend:</strong> React.js, Next.js, Tailwind CSS,
            HTML5, CSS3, Three.js, WebGL
          </li>

          <li>
            <strong>Backend:</strong> Node.js, Express.js, REST APIs,
            Authentication
          </li>

          <li>
            <strong>Databases:</strong> MongoDB, MySQL, PostgreSQL
          </li>

          <li>
            <strong>Tools:</strong> Git, GitHub, Vercel, Render, Spline,
            Wix Website Builder
          </li>
        </ul>


        <h2>Education</h2>

        <p>
          🎓 <strong>B.Tech in Information Technology</strong>
          <br />
          Guru Gobind Singh Indraprastha University, Delhi
          <br />
          2023 - 2027
        </p>


        <h2>Achievements</h2>

        <ul>
          <li>
            🏆 Runner-up in All India Hackathon
          </li>

          <li>
            💻 Solved 500+ problems on LeetCode and GeeksforGeeks
          </li>
        </ul>


        <h2>Interested Areas</h2>

        <ul>
          <li>Full Stack Web Development</li>
          <li>Artificial Intelligence</li>
          <li>3D Web Experiences</li>
          <li>System Design</li>
        </ul>


        <h2>Contact</h2>

        <p>
          <strong>Email:</strong>
          <br />
          himanshuchaudhary586@gmail.com
          <br /><br />

          <strong>Phone:</strong>
          <br />
          7678689822
        </p>


      </motion.div>
    </motion.div>
  );
};

export default About;