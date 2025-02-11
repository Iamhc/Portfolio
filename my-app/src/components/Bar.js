import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

let Bar = () => {
  const location = useLocation(); // Get the current location (route)
  const [activeLink, setActiveLink] = useState("home");

  // Update active link based on the current path
  useEffect(() => {
    if (location.pathname === "/") {
      setActiveLink("home");
    } else if (location.pathname === "/about") {
      setActiveLink("about");
    } else if (location.pathname === "/projects") {
      setActiveLink("projects");
    }
  }, [location.pathname]); // Run effect when location changes

  return (
    <div id="navel">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div id="home" className={activeLink === "home" ? "activate" : ""}>
          Home
        </div>
      </Link>

      <Link to="/about" style={{ textDecoration: "none" }}>
        <div id="about" className={activeLink === "about" ? "activate" : ""}>
          About
        </div>
      </Link>

      <Link to="/projects" style={{ textDecoration: "none" }}>
        <div
          id="projects"
          className={activeLink === "projects" ? "activate" : ""}
        >
          Projects
        </div>
      </Link>
    </div>
  );
};

export default Bar;
