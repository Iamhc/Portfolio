import "../App.css";
import Links from "../Utils/Links";
import Bar from "./Bar";
import Contact from "./Contact";

// Import images
import AfroHair from "./Project-Pics/Afro-hair1.png";
import Chloro from "./Project-Pics/Chloro1.png";
import Form from "./Project-Pics/Form.png";
import Front from "./Project-Pics/Front1.png";
import Skinoy from "./Project-Pics/Skinoy1.png";
import SwiggyClone from "./Project-Pics/Swiggy-clone.png";
import LoginSystem from "./Project-Pics/Login.png";

const Project = () => {
  const projects = [
    {
      title: "Swiggy Clone",
      image: SwiggyClone,
      description:
        "A Swiggy-like food delivery app using real-time Swiggy API data. Used: React, Tailwind, APIs.",
      link: "https://github.com/Iamhc/Food-delievery",
    },
    {
      title: "Login System",
      image: LoginSystem,
      description:
        "A secure login system using the MERN stack (MongoDB, Express.js, React, Node.js).",
      link: "https://contact-us-mn.vercel.app/",
    },
    {
      title: "Afro Hair Business Website",
      image: AfroHair,
      description:
        "A website designed for an Afro Hair business using Bootstrap and JavaScript. Used: Bootstrap, JS.",
      link: "https://afro-hair-one.vercel.app/",
    },
    {
      title: "Chloro Project",
      image: Chloro,
      description:
        "An e-commerce platform for skincare and beauty products. Used: Next.js, Tailwind.",
      link: "https://github.com/Iamhc/chloro-website",
    },
    {
      title: "Skinoy E-Commerce",
      image: Skinoy,
      description:
        "An e-commerce platform for skincare products. Used: HTML, CSS, JS.",
      link: "https://skinoy-five.vercel.app/",
    },
    {
      title: "Home Design",
      image: Front,
      description:
        "A showcase of front-end UI/UX design skills. Used: React.js, Tailwind.",
      link: "https://main-section.vercel.app/",
    },
    {
      title: "Form",
      image: Form,
      description: "A form application. Used: HTML, CSS, JS, Spline.",
      link: "https://website-form-gamma.vercel.app/",
    },
  ];

  return (
    <div id="Projectbody">
      <Links />
      <Bar />

      <div className="projects-container">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card-link"
          >
            <div className="project-card">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              <p>{project.title}</p>
              <p id="cardstuff">{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Project;
