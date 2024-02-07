import React from 'react'

const Backend = () => {
  return (
    <div className="skills-content">
      <h3 className="skills-title">Backend Skills</h3>

      <div className="skills-box">
        <div className="box-one">
          <div className="info__box">
          <i class='bx bxl-nodejs' ></i>
            <h3 className="info__title">Node</h3>
            <span className="info__subtitle">Basic</span>
          </div>{" "}
          <div className="info__box">
          <i class='bx bxs-data' ></i>
            <h3 className="info__title">MySql</h3>
            <span className="info__subtitle">Basic</span>
          </div>{" "}
          <div className="info__box">
          <i class='bx bxl-postgresql'></i>
            <h3 className="info__title">Postgre</h3>
            <span className="info__subtitle">Basic</span>
          </div>
        </div>

        <div className="box-one">
          <div className="info__box">
            <i class="bx bxl-aws"></i>
            <h3 className="info__title">AWS</h3>
            <span className="info__subtitle">Basic</span>
          </div>{" "}
          <div className="info__box">
            <i class="bx bxl-docker"></i>
            <h3 className="info__title">Docker</h3>
            <span className="info__subtitle">Basic</span>
          </div>{" "}
          <div className="info__box">
          <i class='bx bxl-mongodb'></i>
            <h3 className="info__title">MonogDB</h3>
            <span className="info__subtitle">Intermeidate</span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Backend 