import React from 'react'

import './images.css'
const Images = () => {
  return (
    <div className='images-box'>
      <img className='images'
        src="https://source.unsplash.com/random/500x300?city,night"
        alt="car"
      />
      <img className='images'
        src="https://source.unsplash.com/random/500x300?pizza"
        alt="car"
      />
      <img className='images'
        src="https://source.unsplash.com/random/500x300?pasta"
        alt="car"
      />
    </div>
  )
}

export default Images