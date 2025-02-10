import Home from "./Home";
import About from "./About";
import { HashRouter, Routes, Route } from "react-router-dom";

const Rooted = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </HashRouter>
  );
};

export default Rooted;
