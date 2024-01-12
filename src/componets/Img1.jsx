import React, { useRef, useState } from 'react'
import "./img.css"
import sample from "/videos/pongal.mp4"
import pongals from "/images/pongals.png"

import pongal1 from "/images/pongal2.jpg"

function Img1() {
  


 

  return (
    <div className="container">
      <div className=''>
        <img className='cards' src={pongal1} alt="picture"/>
      </div>
    </div>
    
  )
}

export default Img1
