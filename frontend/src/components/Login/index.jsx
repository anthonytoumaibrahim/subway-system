import React from 'react'
import Input from '../RegisterInput'
import "./style.css"

const Login = () => {
  return (
    <div className='flex center popup-container'>
      <div className='flex column align-center popup-wrapper bg-gray-col'>
        <h1 className='white'>Login</h1>
        <Input/>
        <Input/>
        <p>error msg</p>
        <button>Login</button>
        <p>Don't have an account? <span>Signup</span></p>
      </div>
    </div>
  )
}

export default Login