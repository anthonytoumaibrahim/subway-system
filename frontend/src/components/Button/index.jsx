import React from 'react'

const Button = ({handleClick, name}) => {
  return (
    <button className='reg-btn bg-primary font-bold white' onClick={handleClick}>{`${name}`}</button>
  )
}

export default Button