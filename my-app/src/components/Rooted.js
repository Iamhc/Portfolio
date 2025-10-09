import { useEffect, useRef } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";

const Rooted = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const scrollAccum = useRef(0); // Accumulate scroll
  const ticking = useRef(false); // Throttle scroll
  const threshold = 200; // Adjust scroll threshold for route change

  const routeOrder = ["/", "/about", "/projects"];

  useEffect(() => {
    const handleScroll = (e) => {
      scrollAccum.current += e.deltaY;

      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const currentIndex = routeOrder.indexOf(location.pathname);

          if (scrollAccum.current > threshold) {
            // Scroll Down
            if (currentIndex < routeOrder.length - 1) {
              navigate(routeOrder[currentIndex + 1]);
              scrollAccum.current = 0; // reset
            }
          } else if (scrollAccum.current < -threshold) {
            // Scroll Up
            if (currentIndex > 0) {
              navigate(routeOrder[currentIndex - 1]);
              scrollAccum.current = 0; // reset
            }
          }

          ticking.current = false;
        });

        ticking.current = true;
      }
    };

    window.addEventListener("wheel", handleScroll);
    return () => window.removeEventListener("wheel", handleScroll);
  }, [location, navigate]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
};

export default Rooted;
