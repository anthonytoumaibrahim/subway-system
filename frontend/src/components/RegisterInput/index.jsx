import React from 'react'

const Input = ({id, placeholder, label, handleInputChange}) => {
  return (
    <div className='flex column'>
      <label htmlFor={`${id}`}>{`${label}`}</label>
      <input type="text" placeholder={`${placeholder}`} id={`${id}`} onClick={handleInputChange}/>
    </div>
  )
}

export default Input