import React from "react";

const Frontend = () => {
  return (
    <div className="skills-content">
      <h3 className="skills-title">Front-end Skills</h3>

      <div className="skills-box">
        <div className="box-one">
          <div className="skill-box">
          <i class='bx bxl-html5' ></i>
            <h3 className="info__title">HTML5</h3>
            <span className="info__subtitle">Advance</span>
          </div>{" "}
          <div className="skill-box">
            <i class="bx bxl-sass"></i>
            <h3 className="info__title">Sass</h3>
            <span className="info__subtitle">Intermediate</span>
          </div>
          <div className="skill-box">
            <i class="bx bxl-react"></i>
            <h3 className="info__title">React</h3>
            <span className="info__subtitle">Intermediate</span>
          </div>
        </div>

        <div className="box-one">
          <div className="skill-box">
            <i class="bx bxl-git"></i>
            <h3 className="info__title">Git</h3>
            <span className="info__subtitle">Intermediate</span>
          </div>{" "}
          <div className="skill-box">
            <i class="bx bxl-javascript"></i>
            <h3 className="info__title">Javascript</h3>
            <span className="info__subtitle">Intermediate</span>
          </div>{" "}
          <div className="skill-box">
            <i class="bx bxl-redux"></i>
            <h3 className="info__title">Redux</h3>
            <span className="info__subtitle">Intermediate</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Frontend;
