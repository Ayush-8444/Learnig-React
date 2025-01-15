import React from 'react'
import image from '../assets/image.webp'


function Logo({ width = "20px"}) {
  
  return (
    <div className="border-white border-2 rounded-xl">
      <img className='rounded-xl' src={image} alt="logo" width={width}  />
    </div>
  );
}

export default Logo