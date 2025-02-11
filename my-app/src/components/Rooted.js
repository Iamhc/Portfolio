import Home from "./Home";
import About from "./About";
import Projects from "./Projects"; // Import the Projects component
import { Routes, Route } from "react-router-dom";

const Rooted = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} /> {/* New Route */}
    </Routes>
  );
};

export default Rooted;
