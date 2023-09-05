import React, { useState } from "react";
import "./Nav.css";
import { FaBars, FaTimes } from "react-icons/fa";


function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const handleLinkClick = (sectionId) => {
    setClick(false);
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 50, // Adjust the offset as needed
        behavior: "smooth",
      });
    }
  };



  return (
    <div className="header">
      <div className="container">
        <h1 className="vivek">
         Vivek
        </h1>
        <ul className={click ? "active" : "nav-menu"}>
          <li>
            <a href="#home" onClick={() => handleLinkClick('home')}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => handleLinkClick('about')}>
              About
            </a>
          </li>
          <li>
            <a to="/coin" onClick={handleLinkClick}>
              Skills
            </a>
          </li>
          <li>
            <a to="/exchange" onClick={handleLinkClick}>
              Service
            </a>
          </li>
          <li>
            <a to="/exchange" onClick={handleLinkClick}>
              Project
            </a>
          </li>
          <li>
            <a to="/exchange" onClick={handleLinkClick}>
              Contact
            </a>
          </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
          {click ? <FaTimes size={20} style={{ color: "#333" }} /> : <FaBars size={20} style={{ color: "#333" }} />}
        </div>
      </div>
    </div>
  );
}

export default Navbar;