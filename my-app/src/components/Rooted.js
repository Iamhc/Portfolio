import { useEffect, useRef } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";

const Rooted = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const scrollAccum = useRef(0);
  const ticking = useRef(false);
  const threshold = 450; // scroll threshold (desktop)

  const routeOrder = ["/", "/about", "/projects"];

  // Desktop scroll
  useEffect(() => {
    const handleScroll = (e) => {
      scrollAccum.current += e.deltaY;

      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const currentIndex = routeOrder.indexOf(location.pathname);

          if (scrollAccum.current > threshold) {
            // Scroll down → next page
            if (currentIndex < routeOrder.length - 1) {
              navigate(routeOrder[currentIndex + 1]);
              scrollAccum.current = 0;
            }
          } else if (scrollAccum.current < -threshold) {
            // Scroll up → previous page
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

  // Mobile swipe support (vertical + horizontal)
  useEffect(() => {
    let startY = 0;
    let startX = 0;

    const handleTouchStart = (e) => {
      startY = e.touches[0].clientY;
      startX = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
      const deltaY = startY - e.touches[0].clientY;
      const deltaX = startX - e.touches[0].clientX;
      const currentIndex = routeOrder.indexOf(location.pathname);

      // Different thresholds
      const verticalThreshold = 220;
      const horizontalThreshold = 120; // less coefficient (more sensitive)

      if (ticking.current) return;

      // Vertical swipe
      if (
        Math.abs(deltaY) > verticalThreshold &&
        Math.abs(deltaY) > Math.abs(deltaX)
      ) {
        ticking.current = true;

        if (deltaY > 0 && currentIndex < routeOrder.length - 1) {
          navigate(routeOrder[currentIndex + 1]);
        } else if (deltaY < 0 && currentIndex > 0) {
          navigate(routeOrder[currentIndex - 1]);
        }

        setTimeout(() => (ticking.current = false), 800);
      }

      // Horizontal swipe (right/left)
      else if (
        Math.abs(deltaX) > horizontalThreshold &&
        Math.abs(deltaX) > Math.abs(deltaY)
      ) {
        ticking.current = true;

        if (deltaX > 0 && currentIndex < routeOrder.length - 1) {
          // swipe left → next
          navigate(routeOrder[currentIndex + 1]);
        } else if (deltaX < 0 && currentIndex > 0) {
          // swipe right → previous
          navigate(routeOrder[currentIndex - 1]);
        }

        setTimeout(() => (ticking.current = false), 800);
      }
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
