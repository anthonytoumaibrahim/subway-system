import React from 'react'
import Input from '../RegisterInput'
import "./style.css"

const Login = () => {
  return (
    <div className='flex center popup-container'>
      <div className='flex column align-center popup-wrapper bg-gray-col'>
        <h1 className='white'>Login</h1>
        <Input
        id={1}
        placeholder={"JohnDoe"}
        label={"Username"}
        // handleInputChange={handleInputChange}
        />
        <div className='error-div'>
          <Input
          id={2}
          placeholder={"*******"}
          label={"Password"}
          // handleInputChange={handleInputChange}
          />
          <p className=' error-col invisible'>error msg</p>
        </div>
        <button className='login-btn bg-primary font-bold white'>Login</button>
        <p className='white'>Don't have an account? <span className='text-primary'>Signup</span></p>
      </div>
    </div>
  )
}

export default Login