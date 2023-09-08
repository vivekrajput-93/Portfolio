import React, { useState } from "react";
import "./Service.css";

const Service = () => {

    const [toggle, setToggle] = useState(0);

    const toggleTab = (index) => {
        setToggle(index);
    }

  return (
    <section className="service-section " id="service">
      <h1 className="about__me">Service</h1>
      <h1 className="subtitle">What I offer!</h1>

      <div className="service__container container grid">
        <div className="service__content">
            <div>
                <i className="uil uil-web-grid service__icon"></i>
                <h3 className="service__title">Web <br /> Designer</h3>
            </div>

            <span className="services__button"  onClick={() => toggleTab(1)}>View More 
            <i className="uil uil-arrow-right service__button-icon"></i>
            </span>


            <div className={toggle === 1 ? "service__modal active-modal" : "service__modal"}>
                <div className="service__modal-content">
                    <i className="uil uil-times service__modal-close" onClick={() => toggleTab(0)}></i>

                    <h3 className="services__modal-title">Web Designer</h3>
                    <p className="services__modal-description">
                        Service with more than 2+ years of experience.Providing quality work.
                    </p>

                    <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    I develop the user Interface.
                                </p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Web Page Developement.
                                </p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    I create UI/UX element Interactions.
                                </p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                Responsive Web Design.
                                </p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                Cross-Browser Compatibility
                                </p>
                            </li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="service__content">
            <div>
                <i className="uil uil-arrow service__icon"></i>
                <h3 className="service__title">UI/UX <br /> Designer</h3>
            </div>

            <span className="services__button"  onClick={() => toggleTab(2)}>View More 
            <i className="uil uil-arrow-right service__button-icon"></i>
            </span>


            <div className={toggle === 2 ? "service__modal active-modal" : "service__modal"}>
                <div className="service__modal-content">
                    <i className="uil uil-times service__modal-close"  onClick={() => toggleTab(0)}></i>

                    <h3 className="services__modal-title">UI/UX Designer</h3>
                    <p className="services__modal-description">
                        Service with more than 2+ years of experience.Providing quality work.
                    </p>

                    <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                User-Centered Design
                                </p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                Responsive Web Design
                                </p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Visual and Interactive Design
                                </p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                User Interface Design Patterns
                                </p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                User Feedback Integrated Design
                                </p>
                            </li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="service__content">
            <div>
                <i className="uil uil-edit service__icon"></i>
                <h3 className="service__title">Web <br /> Appliations</h3>
            </div>

            <span className="services__button"  onClick={() => toggleTab(3)}>View More 
            <i className="uil uil-arrow-right service__button-icon"></i>
            </span>


            <div className={toggle === 3 ? "service__modal active-modal" : "service__modal"}>
                <div className="service__modal-content">
                    <i className="uil uil-times service__modal-close"  onClick={() => toggleTab(0)}></i>

                    <h3 className="services__modal-title"> Web Applications</h3>
                    <p className="services__modal-description">
                        Service with more than 2+ years of experience.Providing quality work.
                    </p>

                    <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    Full-stack Development.
                                </p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    User Authentication and Authorisation.
                                </p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    API and RESTful API Integration
                                </p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                Responsive Web Design.
                                </p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                Cross-Platform Compatibility
                                </p>
                            </li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
