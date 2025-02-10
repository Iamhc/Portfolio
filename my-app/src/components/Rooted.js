import Home from "./Home";
import About from "./About";
import { Routes, Route } from "react-router-dom";

const Rooted = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default Rooted;
