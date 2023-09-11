import React from 'react'

const WorkItems = ({item, key}) => {
  return (
    <div className='work__card'>
        <img src={item.image} alt='image' className='work__img' />
        <h3 className='work__title'>{item.title}</h3>
        <div className='work__buttons'>
            <a href={item.previewLink} target="_blank" className='work__button' >
                Preview <i className='bx bx-right-arrow-alt work-button-icon'></i>
            </a>
            <a href={item.demoLink} target='_blank' className='work__button'>
                Code <i className='bx bx-right-arrow-alt work-button-icon'></i>
            </a>
        </div>
    </div>
  )
}
 
export default WorkItems;