import "../App.css";
import Links from "../Utils/Links";
import Bar from "./Bar";
import Contact from "./Contact";
import Android from "./Project-Pics/Android.png";
import { motion } from "framer-motion";

const About = () => {
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
        <h2 style={{ marginTop: "10px" }}>Experience</h2>
        <ul>
          <li>
            <strong>To-Let Globe</strong> — Full Stack Developer <br />
            Built a login system and user interface using the MERN stack
            (MongoDB, Express.js, React, Node.js).
          </li>
          <li>
            <strong>Rahul Sir Classes</strong> — Web Developer <br />
            Designed multiple educational websites using Wix, HTML, CSS, and
            JavaScript.
          </li>
        </ul>

        <h2 style={{ marginTop: "10px" }}>Skills</h2>
        <ul>
          <li>
            <strong>Languages:</strong> C/C++, Python, JavaScript, TypeScript,
            HTML+CSS, PHP
          </li>
          <li>
            <strong>Libraries & Frameworks:</strong> Next.js, React.js,
            Electron.js, Three.js, WebGL, Express.js, Tailwind CSS
          </li>
          <li>
            <strong>Databases & Cloud:</strong> MongoDB, Vercel, Render
          </li>
          <li>
            <strong>Tools:</strong> Spline, Wix Website Builder
          </li>
        </ul>
        <h2 style={{ marginTop: "10px" }}>Education</h2>
        <p>
          🎓 B.Tech in Information Technology (2023–2027) <br />
          Guru Gobind Singh Indraprastha University, Delhi
        </p>

        <h2 style={{ marginTop: "10px" }}>Interested Areas</h2>
        <ul>
          <li>Web Development</li>
          <li>Artificial Intelligence</li>
        </ul>

        <h2 style={{ marginTop: "10px" }}>Contact</h2>
        <p>
          <strong>Email:</strong> himanshuchaudhary586@gmail.com <br />
          <strong>Phone:</strong> 7678689822
        </p>
      </motion.div>
    </motion.div>
  );
};

export default About;
