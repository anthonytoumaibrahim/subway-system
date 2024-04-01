import React from 'react'
import Input from '../RegisterInput'
import "./style.css"

const Signup = ({handleInputChange}) => {
  return (
    <div className='flex center popup-container hidden'>
      <div className='flex column align-center popup-wrapper bg-gray-col'>
        <h1 className='white'>Signup</h1>
        <Input
        id={1}
        placeholder={"JohnDoe"}
        label={"Username"}
        handleInputChange={(e) => (handleInputChange({
          username: e.target.value
        }))}
        />
        <Input
        id={1}
        placeholder={"john@gmail.com"}
        label={"Email"}
        handleInputChange={(e) => (handleInputChange({
          email: e.target.value
        }))}
        />
        <Input
        id={1}
        placeholder={"*******"}
        label={"Password"}
        handleInputChange={(e) => (handleInputChange({
          password: e.target.value
        }))}
        />
        <div className='error-div'>
          <Input
          id={2}
          placeholder={"*******"}
          label={"Confirm Password"}
          handleInputChange={(e) => (handleInputChange({
            confirmPassword: e.target.value
          }))}
          />
          <p className=' error-col '>error msg</p>
        </div>
        <button className='login-btn bg-primary font-bold white'>Signup</button>
        <p className='white'>Already have an account? <span className='text-primary'>Login</span></p>
      </div>
    </div>
  )
}

export default Signup