import React, { useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import Login from '../Login'
import Signup from '../Signup'
import "./style.css"

const Header = () => {
  const resetCredentials = {
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  }

  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  const location = useLocation()
  const [error, setError] = useState({status:false, field: ""})
  const [errorMessage, setErrorMessage] = useState('')
  const [isLogin, setIsLogin] = useState(false)
  const [credentials, setcredentials] = useState(resetCredentials)
  const [isSignup, setIsSignup] = useState(false)

  console.log(credentials)

  const handleInputChange = (value, field) => {
    console.log (field , value)
    setcredentials({...credentials, [field]: value })
    
  }

  const resetCredentialts = () => {
    setcredentials({...resetCredentials})
  }

  const handleSwitch = () => {
    if(isLogin){
      setIsLogin(false)
      setIsSignup(true)
    
    }else if(isSignup){
      setIsLogin(true)
      setIsSignup(false)

    }

    setError(false)
    resetCredentialts()
    
  }

  const handleLoginClick = () => {
    setIsLogin(true)
  }

  const handleSignupClick = () => {
    setIsSignup(true)
  }
 

  return (
    <div className='flex align-center space-between header bg-dark-gray-col'>
      {isSignup && (<Signup
      isSignup={isSignup}
      setIsSignup={setIsSignup}
      error={error}
      errorMessage={errorMessage}
      handleInputChange={handleInputChange}
      handleSwitch={handleSwitch}
      />)}
      {isLogin && (<Login
      isLogin={isLogin}
      setIsLogin={setIsLogin}
      error={error}
      errorMessage={errorMessage}
      handleInputChange={handleInputChange}
      handleSwitch={handleSwitch}
      />)}
      

      <h1 className='logo font-bold white'>Metro<span className='logo text-primary'>Hub</span></h1>

      <nav className='flex header-nav'>
        <Link 
        to="/" 
        className={`${location.pathname === "/" ? "active" : ""}`}
        >Home</Link>

        <Link 
        to="/my-rides"
        className={`${location.pathname === "/my-rides" ? "active" : ""}`}
        >My Rides</Link>

        <Link 
        to="/coins"
        className={`${location.pathname === "/coins" ? "active" : ""}`}
        >Coins</Link>

        <Link 
        to="/chat"
        className={`${location.pathname === "/chat" ? "active" : ""}`}
        >Chat</Link>
      </nav>

      <div className='flex bold register-btns'>
        <button className='reg-btn bg-primary font-bold white' onClick={handleLoginClick}>Login</button>
        <button className='reg-btn signup-btn text-primary font-bold' onClick={handleSignupClick}>Signup</button>
      </div>

    </div>
  )
}

export default Header