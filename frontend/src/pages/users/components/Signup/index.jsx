import React from 'react'
import Input from '../RegisterInput'
import "./style.css"

const Signup = ({ setIsSignup, error, errorMessage, handleInputChange, handleSignup, handleSwitch}) => {
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
        />

        <Input
        placeholder={"john@gmail.com"}
        label={"Email"}
        handleInputChange={handleInputChange}
        field={"email"}
        />

        <Input
        placeholder={"*******"}
        label={"Password"}
        handleInputChange={handleInputChange}
        field={"password"}
        />

        <div className='error-div'>
          <Input
          placeholder={"*******"}
          label={"Confirm Password"}
          handleInputChange={handleInputChange}
          field={"confirmPassword"}
          />
          
          <p 

          className={`error-col `}
          >{`${errorMessage}`}</p>

        </div>

        <button 
        className='login-btn bg-primary font-bold white' 
        onClick={handleSignup}
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