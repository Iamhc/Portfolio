import "../App.css";
import Links from "../Utils/Links";
import Bar from "./Bar";
import Contact from "./Contact";

const About = () => {
  return (
    <div id="aboutbody">
      <Links />
      <Bar />
      <div className="about-container">
        <h2>Education</h2>
        <p>
          🎓 B.Tech in Information Technology (2023-2027) <br></br>
          Guru Gobind Singh Indraprastha University, Delhi
        </p>

        <h2>Skills</h2>
        <ul>
          <li>
            <strong>Languages:</strong> C/C++, Python, JavaScript, HTML+CSS, PHP
          </li>
          <li>
            <strong>Libraries & Frameworks:</strong> React.js, Three.js, WebGL,
            Express.js, Tailwind CSS
          </li>
          <li>
            <strong>Databases & Cloud:</strong> MongoDB, Vercel, Render
          </li>
          <li>
            <strong>Tools:</strong> Spline, Wix Website Builder
          </li>
        </ul>

        <h2>Projects</h2>
        <ul>
          <li>
            <strong>To-Let Globe</strong> - Full Stack Developer *Built a login
            system and user interface using MERN stack (MongoDB, Express.js,
            React, Node.js).*
          </li>
          <li>
            <strong>Rahul Sir Classes</strong> - Web Developer *Designed
            multiple educational websites using Wix, HTML, CSS, and JavaScript.*
          </li>
          <li>
            <strong>Afro Hair Business Website</strong> - Freelance Web
            Developer *Developed a fully responsive business website with
            Bootstrap, JavaScript, and CSS.*
          </li>
        </ul>

        <h2>Soft Skills</h2>
        <ul>
          <li>Communication</li>
          <li> Problem-Solving & Critical Thinking</li>
          <li>Event Organizing</li>
        </ul>
      </div>
      <Contact />
    </div>
  );
};

export default About;
