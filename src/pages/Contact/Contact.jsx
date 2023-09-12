
import "./Contact.css";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_79zq7pt', 'template_r72i16j', form.current, 'mMyUC-x_3T-1D8mar')
        e.target.reset();
    };


  return (
    <section className="contact-section" id="contact">
      <h1 className="about__me">Get in Touch!</h1>
      <h1 className="subtitle">Contact me</h1>

      <div className="contact__container">
        <div className="contact__content">
          <h3 className="contact__title">Talk to me</h3>

          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>

              <h3 className="contact__card-title">Email</h3>
              <span className="contact_data-data">viiveksingh93@gamil.com</span>

              <a  href="mailto:viiveksingh93@gmail.com" className="contact__button">
                Contact me
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bx-phone contact__card-icon"></i>

              <h3 className="contact__card-title">Phone no</h3>
              <span className="contact_data-data">+91 9347171539</span>

              <a className="contact__button">
                Contact me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
            <i class='bx bxl-linkedin-square'></i>

              <h3 className="contact__card-title">LinkedIn</h3>
              <span className="contact_data-data">
                <a className="contact_data-data" href="https://www.linkedin.com/in/vivek-rajput-6998b9230/">
                  vivek-rajput
                </a>
              </span>

              <a href="https://www.linkedin.com/in/vivek-rajput-6998b9230/" className="contact__button">
                Contact me
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">Let's keep in Touch.</h3>

          <form ref={form} onSubmit={sendEmail} className="contact__form">
            <div className="contact__form-div">
                <label className="contact__form-tag">Name:</label>
                <input type="text" name="name" className="contact__form-input"  placeholder="Enter your name"/>
            </div>

            <div className="contact__form-div">
                <label className="contact__form-tag">Email:</label>
                <input type="email" name="email"  className="contact__form-input" placeholder="Enter your email"/>
            </div>


            <div className="contact__form-div contact__form-area">
                <label className="contact__form-tag">Message :</label>
                <textarea name="message" cols={30} rows={15} className="contact__form-input" placeholder="Message" />
            </div>
            <button className="send-button button--flex">
                Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
