import React, { useRef, useState } from 'react'
import pongal from "/images/pongal.png"
import "./img.css"

function Img() {

 

  return (
    <div className="container">
        <div className="images">
        <img className="card" src={pongal} alt="pongal pic"/>
        </div>
    </div>
  )
}

export default Img
