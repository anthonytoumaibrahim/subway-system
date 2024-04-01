import React from 'react'
import Input from '../RegisterInput'
import "./style.css"

const Login = ({ setIsLogin, error, errorMessage, handleInputChange, handleSwitch }) => {
  return (
    <div 
    id='popup-container' 
    className='flex center popup-container' 
    onMouseDown={(e) => {if(e.target.id === 'popup-container'){setIsLogin(false)}}
    }>

    <div 
    className='flex column align-center popup-wrapper bg-gray-col'
    >
      <h1 className='white'>Login</h1>

      <Input
      id={1}
      placeholder={"JohnDoe"}
      label={"Username"}
      handleInputChange={handleInputChange}
      />

      <div className='error-div'>

        <Input
        id={2}
        placeholder={"*******"}
        label={"Password"}
        handleInputChange={handleInputChange}
        />

        <p 
        className={`error-col ${error.status? "" : "invisible"} `}
        >{`${errorMessage}`}</p>

      </div>

      <button 
      className='login-btn bg-primary font-bold white'
      >Login</button>

      <p 
      className='white'
      >Don't have an account?
        <span className='reg-switch text-primary font-bold'
        onClick={handleSwitch}
        > Signup</span>
      </p>
    </div>
  </div>)
}

export default Login