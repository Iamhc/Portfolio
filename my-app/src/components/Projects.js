import "../App.css";
import Links from "../Utils/Links";
import Bar from "./Bar";

import dump from "./Project-Pics/dump.png";
import Dear from "./Project-Pics/Dear.png";
import os from "./Project-Pics/os.jpeg";
import plant from "./Project-Pics/plant.jpeg";
import moon from "./Project-Pics/moon1.png";
import bouncingBalls from "./Project-Pics/particles.png";
import sineWave from "./Project-Pics/sine-wave.png";
const Project = () => {
  const projects = [
    {
      title: "AI Agent Platform",
      image: Dear,
      description: "Built and deployed a production-grade AI-integrated platform with autonomous agent system, task routing, and LLM responses via ZukiJourney API. Designed scalable FastAPI and Node.js REST APIs; optimized PostgreSQL and MongoDB schemas; containerized with Docker.",
      link: "https://github.com/Iamhc/Dear-frontend",
    },
    {
      title: "AI Pipeline Builder",
      image: dump,
      description: "Engineered production-ready FastAPI backend with real-time DAG validation (DFS); designed ACID-compliant PostgreSQL schema with optimized queries; containerized with Docker. Built React.js + TypeScript frontend with drag-and-drop UI and real-time API integration.",
      link: "https://github.com/Iamhc/Ai-pipeline-frontend",
    },
    {
      title: "OS Performance Dashboard",
      image: os,
      description: "Built real-time data ingestion backend using Node.js and Python with MongoDB; deployed with Docker; optimized data pipelines for accurate live OS metric visualization. Real-time monitoring of CPU, memory, network, and disk usage.",
      link: "https://github.com/Iamhc/os-performance-frontend",
    },
    {
      title: "Plant Disease Detection",
      image: plant,
      description: "Trained and deployed CNN-based ML model using Python and TensorFlow; built FastAPI prediction endpoint for real-time inference. Complete end-to-end AI deployment pipeline for identifying plant diseases using Convolutional Neural Networks.",
      link: "https://colab.research.google.com",
    },
    {
  title: "CSS Night Scene Illustration",
  image: moon, // import wolfMoon from "./Project-Pics/wolfMoon.png";
  description: "Designed a fully responsive night-sky scene using pure HTML and CSS — layered moon, drifting clouds, twinkling stars, and a silhouetted howling wolf on a mountain ridge, all built with div-based shapes, gradients, and absolute positioning (no SVG or canvas).",
  link: "https://www.sololearn.com/en/compiler-playground/WWIy0eRY0Gsi/?ref=app", // update to actual repo
},
{
  title: "Particle Collision Simulator",
  image: bouncingBalls, // 
  description: "Built an interactive canvas-based particle collision simulation with real-time physics — dynamic circles detect and respond to collisions by reversing velocity on impact, connected by animated network lines. Integrated dat.GUI for live control over particle radius and line width, with HSL-based color generation and smooth animation via requestAnimationFrame.",
  link: "https://github.com/Iamhc/your-repo-name", // update to actual repo
},
{
  title: "Sine Wave Oscillator Visualizer",
  image: sineWave, // 
  description: "Built an animated canvas visualization rendering real-time sine/cosine wave patterns with a rotating reference circle, using trigonometric functions to plot dynamic curves. Added interactive x/y/z axis toggle controls to switch between different waveform projections, with continuous frame-based animation via setInterval.",
  link: "https://github.com/Iamhc/your-repo-name", // update to actual repo
},
  ];

  return (
    <div id="Projectbody">
      <Links />
      <Bar />
      <div className="projects-container">
        {projects.map((project, index) => (
          <a key={index} href={project.link} target="_blank" rel="noopener noreferrer" className="project-card-link">
            <div className="project-card">
              <img src={project.image} alt={project.title} className="project-image" />
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