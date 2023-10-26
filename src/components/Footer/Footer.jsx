import React from 'react'
import './Footer.css'

const Footer = () => {
    const currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    const name = 'Umesh Kumar'
    
   
    return (
      <div className='footer-box'>
            <p className='text-footer'>Created By <span>{name}</span></p>
            <p className='text-copy'>Copyright <span>{currentYear}</span></p>
      </div>
    
  )
}

export default Footer