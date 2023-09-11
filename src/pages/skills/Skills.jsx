import React from "react";
import "./Skills.css";
import Frontend from "./Frontend";
import Backend from "./Backend";

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h1 className="about__me">Skills</h1>
      <h1 className="subtitle">My Technical Level</h1>

      <div className="skills-container">
        <Frontend />
        <Backend />
      </div>
    </section>
  );
};

export default Skills;
