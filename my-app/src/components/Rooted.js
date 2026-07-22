import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Projects from "./Projects";

const Rooted = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
};

export default Rooted;