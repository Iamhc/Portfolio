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
  const threshold = 450; // Adjust scroll threshold for route change

  const routeOrder = ["/", "/about", "/projects"];

  // Desktop scroll
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
              scrollAccum.current = 0;
            }
          } else if (scrollAccum.current < -threshold) {
            // Scroll Up
            if (currentIndex > 0) {
              navigate(routeOrder[currentIndex - 1]);
              scrollAccum.current = 0;
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

  // Mobile touch support
  useEffect(() => {
    let startY = 0;

    const handleTouchStart = (e) => {
      startY = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      const deltaY = startY - e.touches[0].clientY;

      if (Math.abs(deltaY) < 150 || ticking.current) return; // Threshold and throttle

      ticking.current = true;
      const currentIndex = routeOrder.indexOf(location.pathname);

      if (deltaY > 0) {
        // Swipe up → next page
        if (currentIndex < routeOrder.length - 1) {
          navigate(routeOrder[currentIndex + 1]);
        }
      } else {
        // Swipe down → previous page
        if (currentIndex > 0) {
          navigate(routeOrder[currentIndex - 1]);
        }
      }

      startY = e.touches[0].clientY;

      setTimeout(() => {
        ticking.current = false;
      }, 800); // Same throttle as desktop
    };

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
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
