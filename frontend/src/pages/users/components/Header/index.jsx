import React, { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import Login from '../Login'
import Signup from '../Signup'
import "./style.css"

const Header = () => {
  const initialCredentials = {
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  }

  const initailtErrors = {
    all: false,
    email: false,
    password: false
  }

  const location = useLocation()
  const [error, setError] = useState({status:false, fields: []})
  const [errorMessage, setErrorMessage] = useState('incorrect')
  const [isLogin, setIsLogin] = useState(false)
  const [credentials, setcredentials] = useState(initialCredentials)
  const [isSignup, setIsSignup] = useState(false)


  useEffect(() => {resetErrors()}, [credentials])
  

  const handleInputChange = (value, field) => {
    console.log (field , value)
    setcredentials({...credentials, [field]: value })
    
  }

  const resetCredentials = () => {
    setcredentials({...initialCredentials})
  }

  const resetErrors = () => {
    setError({...initailtErrors})
  }

  const handleSwitch = () => {
    if(isLogin){
      setIsLogin(false)
      setIsSignup(true)
    }else if(isSignup){
      setIsLogin(true)
      setIsSignup(false)
    }
    resetErrors()
    resetCredentials()
  }

  const handleLoginClick = () => {
    setIsLogin(true)
  }

  const handleSignupClick = () => {
    setIsSignup(true)
  }

  const checkEmptyFields = () => {
    const {username, email, password, confirmPassword} = credentials
    const regex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
    if (isLogin && (!email || !password)) {
      setError({...error, all: true})
      setErrorMessage("Fill required fields.")
      return true
    }
  
    if (isSignup && (!email || !password || !username || !confirmPassword)) {
      setError({...error, all: true})
      setErrorMessage("Fill required fields.")
      return true
    }

    if(!regex.test(email)){
      setError({...error, email: true})
      setErrorMessage("Invalid Email.")
      return true
    }
    if (isSignup && password !== confirmPassword) {
      setError({...error, password: true})
      setErrorMessage("Passwords do not match.")
      return true
    }
    return false
  } 
  
  const validateRegistration = () => {
    const empty  = checkEmptyFields()
    if (empty){
      console.log("i am empty")
    }else{
      console.log("i am not emty")
      
    }
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
      validateRegistration={validateRegistration}
      />)}
      {isLogin && (<Login
      isLogin={isLogin}
      setIsLogin={setIsLogin}
      error={error}
      errorMessage={errorMessage}
      handleInputChange={handleInputChange}
      handleSwitch={handleSwitch}
      validateRegistration={validateRegistration}
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