import React from 'react';
import "./About.css";
import about from "../../assets/4.png";

const About = () => {
  return (
    <section className='about'>
        <h1 className='about__me'>About me</h1>
        <span className='subtitle'>My Introduction</span>
        
        <div className='grid'>
            <img src={about} alt='grid__img' />

            <div className='about__data'></div>
        </div>
    </section>
  )
}

export default About ;