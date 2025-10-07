import "../App.css";
import Links from "../Utils/Links";
import Bar from "./Bar";
import Contact from "./Contact";
import Android from "./Project-Pics/Android.png";

const About = () => {
  return (
    <div id="aboutbody">
      <Links />
      <Bar />
      <div className="about-container">
        <h2>Education</h2>
        <p>
          🎓 B.Tech in Information Technology (2023-2027) <br />
          Guru Gobind Singh Indraprastha University, Delhi
        </p>

        <h2>Skills</h2>
        <ul>
          <li>
            <strong>Languages:</strong> C/C++, Python, JavaScript,Typescript,
            HTML+CSS, PHP
          </li>
          <li>
            <strong>Libraries & Frameworks:</strong> Next js,React js, Electron
            js, Three.js, WebGL, Express.js, Tailwind CSS
          </li>
          <li>
            <strong>Databases & Cloud:</strong> MongoDB, Vercel, Render
          </li>
          <li>
            <strong>Tools:</strong> Spline, Wix Website Builder
          </li>
        </ul>

        <h2>Experience</h2>
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
        </ul>

        <h2>Interested areas</h2>
        <ul>
          <li>Web development</li>
          <li>Artificial intelligence</li>
        </ul>

        <h2>Contact</h2>
        <p>
          <strong>Email:</strong> himanshuchaudhary586@gmail.com <br />
          <strong>Phone:</strong> 7678689822
        </p>
      </div>
      <Contact />
    </div>
  );
};

export default About;
