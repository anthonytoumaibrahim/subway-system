import React from 'react'
import "./style.css"

const Input = ({id, field, placeholder, label, handleInputChange}) => {
  return (
    <div className='flex column reg-input-wrapper'>
      <label className='white ' htmlFor={`${id}`}>{`${label}`}</label>
      <input 
      className='bg-dark-gray-col black-border white'
      type="text" placeholder={`${placeholder}`} id={`${id}`}
      onChange={(e) => 
        handleInputChange(e.target.value, field)
        }
        />
    </div>
  )
}

export default Input