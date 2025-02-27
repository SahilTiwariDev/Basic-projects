import React from 'react'
import image from '../assets/background.jpg'

const Background = () => {
  return (
    <div>
      <img className='h-screen w-screen fixed' src={image} alt="" />
    </div>
  )
}

export default Background