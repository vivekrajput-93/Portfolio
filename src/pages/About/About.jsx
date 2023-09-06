import React from 'react';
import "./About.css";
import about from "../../assets/4.png";
import Info from './Info';


const About = () => {
  return (
    <section id='about'>
      
        <h1 className='about__me'>About me</h1>
        <h1 className='subtitle'>My Introduction</h1>
        
        <div className='about-container' >
            <img src={about} alt='grid__img' className='grid-img'  />

            <div className='about__data'>
              <Info />

              <p className="about__desc">
                Frontend Developer, I created web pages with UI / UX  User interface, I have years of experience and many projects based on frond-end techs.
              </p>

              <a href='https://github.com/vivekrajput-93' target='_blank' className='flex-button'>Github Profile</a>
            </div>
        </div>
    </section>
  )
}

export default About ;