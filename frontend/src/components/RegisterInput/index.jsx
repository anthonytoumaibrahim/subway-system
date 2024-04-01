import React from 'react'
import "./style.css"

const Input = ({id, placeholder, label, handleInputChange}) => {
  return (
    <div className='flex column reg-input-wrapper'>
      <label className='white ' htmlFor={`${id}`}>{`${label}`}</label>
      <input className='bg-dark-gray-col black-border white' type="text" placeholder={`${placeholder}`} id={`${id}`} onClick={handleInputChange}/>
    </div>
  )
}

export default Input