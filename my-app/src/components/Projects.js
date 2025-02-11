import "../App.css";
import Links from "../Utils/Links";
import Bar from "./Bar";
import Contact from "./Contact";

// Import images from Project-Pics folder
import AfroHair from "./Project-Pics/Afro-hair1.png";
import Chloro from "./Project-Pics/Chloro1.png";
import Form from "./Project-Pics/Form.png";
import Front from "./Project-Pics/Front1.png";
import Skinoy from "./Project-Pics/Skinoy1.png";
import SwiggyClone from "./Project-Pics/Swiggy-clone.png";
import LoginSystem from "./Project-Pics/Login.png"; // Added Login System

const Project = () => {
  // Project data with images
  const projects = [
    {
      title: "Login System",
      image: LoginSystem,
      description:
        "A secure login system using the MERN stack (MongoDB, Express.js, React, Node.js).",
    },
    {
      title: "Swiggy Clone",
      image: SwiggyClone,
      description:
        "A Swiggy-like food delivery app using real-time Swiggy API data. Used: React, Tailwind, APIs.",
    },
    {
      title: "Afro Hair Business Website",
      image: AfroHair,
      description:
        "A website designed for an Afro Hair business using Bootstrap and JavaScript. Used: Bootstrap, JS.",
    },
    {
      title: "Chloro Project",
      image: Chloro,
      description:
        "An e-commerce platform for skincare and beauty products. Used: Next.js, Tailwind.",
    },
    {
      title: "Form Builder",
      image: Form,
      description:
        "A dynamic form builder application to create custom forms. Used: HTML, CSS, JS, Spline.",
    },
    {
      title: "Home Design",
      image: Front,
      description:
        "A showcase of front-end UI/UX design skills. Used: React.js, Tailwind.",
    },
    {
      title: "Skinoy E-Commerce",
      image: Skinoy,
      description:
        "An e-commerce platform for skincare and beauty products. Used: HTML, CSS, JS.",
    },
  ];

  return (
    <div id="Projectbody">
      <Links />
      <Bar />

      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <p>{project.title}</p>
            <p id="cardstuff">{project.description}</p>
          </div>
        ))}
      </div>

      <Contact />
    </div>
  );
};

export default Project;
