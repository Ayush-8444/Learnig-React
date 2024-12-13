import React, { useState } from 'react'

function Ayush({ colorname, textcolor = "white" }) {
  const changecolor = () => {
    const root = document.getElementById('root')
    root.style.backgroundColor = colorname
  }
  return (
    <button onClick={changecolor} className='rounded-2xl text-white text-2xl h-12 pl-4 pr-4' style={{ backgroundColor: colorname,color: textcolor }}>{colorname}</button>
  )
}

export default Ayush