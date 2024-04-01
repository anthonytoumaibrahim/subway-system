import React from 'react'
import Input from '../RegisterInput'
import "./style.css"

const Signup = ({ validateRegistration, setIsSignup, error, errorMessage, handleInputChange, handleSignup, handleSwitch}) => {
  return (
    <div id='popup-container' className='flex center popup-container' onMouseDown={(e) => {if(e.target.id === 'popup-container'){setIsSignup(false)}}
    }>
      <div className='flex column align-center popup-wrapper bg-gray-col'>

        <h1 className='white'>Signup</h1>

        <Input
        placeholder={"JohnDoe"}
        label={"Username"}
        handleInputChange={handleInputChange}
        field={"usename"}
        error={error.all ? true : false}
        />

        <Input
        placeholder={"john@gmail.com"}
        label={"Email"}
        handleInputChange={handleInputChange}
        field={"email"}
        error={error.all || error.email ? true : false}
        />

        <Input
        placeholder={"*******"}
        label={"Password"}
        handleInputChange={handleInputChange}
        field={"password"}
        error={error.all || error.password ? true : false}
        />

        <div className='error-div'>
          <Input
          placeholder={"*******"}
          label={"Confirm Password"}
          handleInputChange={handleInputChange}
          field={"confirmPassword"}
          error={error.all || error.password ? true : false}
          />
          
          <p 

          className={`error-col ${error ? "" : "invisible"}`}
          >{`${errorMessage}`}</p>

        </div>

        <button 
        className='login-btn bg-primary font-bold white' 
        onClick={validateRegistration}
        >Signup</button>

        <p 
        className='white'>Already have an account?
          <span 
          className='reg-switch text-primary font-bold' 
          onClick={handleSwitch}
          >Login</span>
        </p>

      </div>
    </div>
  )
}

export default Signup