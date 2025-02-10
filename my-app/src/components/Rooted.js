import Home from "./Home";
import About from "./About";
import { Routes, Route } from "react-router-dom";
const Rooted = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </div>
  );
};
export default Rooted;
