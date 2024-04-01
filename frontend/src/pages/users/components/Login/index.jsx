import React from 'react'
import Input from '../RegisterInput'
import "./style.css"

const Login = ({ validateRegistration, setIsLogin, error, errorMessage, handleInputChange, handleSwitch }) => {
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
      placeholder={"john@hmail.com"}
      label={"Email"}
      handleInputChange={handleInputChange}
      field={"email"}
      error={error.all || error.email ? true : false}
      />

      <div className='error-div'>

        <Input
        placeholder={"*******"}
        label={"Password"}
        handleInputChange={handleInputChange}
        field={"password"}
        error={error.all || error.password ? true : false}
        />

        <p 
        className={`error-col ${error? "" : "invisible"} `}
        >{`${errorMessage}`}</p>

      </div>

      <button 
      className='login-btn bg-primary font-bold white'
      onClick={validateRegistration}
      >Login</button>

      <p 
      className={'white'}
      >Don't have an account?
        <span className='reg-switch text-primary font-bold'
        onClick={handleSwitch}
        > Signup</span>
      </p>
    </div>
  </div>)
}

export default Login