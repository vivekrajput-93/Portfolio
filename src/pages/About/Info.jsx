import React from 'react'
import "./About.css";


const Info = () => {
  return (
    <div className='info'>
        <div className='info__box'>
        <i class='bx bx-award about-icon'></i>
            <h3 className='info__title'>Experience</h3>
            <span className='info__subtitle'>2+ learning years</span>
        </div>
        <div className='info__box'>
        <i class='bx bx-briefcase-alt about-icon'></i>
            <h3 className='info__title'>Projects</h3>
            <span className='info__subtitle'>10+ Projects</span>
        </div>
        <div className='info__box'>
            <i class='bx bx-support about-icon'></i>
            <h3 className='info__title'>Support</h3>
            <span className='info__subtitle'>Online 24/7</span>
        </div>
    </div>
  )
}

export default Info ;