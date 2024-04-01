import React from 'react'
import "./style.css"

const FeatureCard = ({icon, heading, text}) => {
  return (
    <div className='flex column center  feature-wrapper  bg-dark-gray-col'>
      <img className='icon' src={icon} alt="icon" />
      <h5>{heading}</h5>
      <p>{text}</p>
    </div>
  )
}

export default FeatureCard