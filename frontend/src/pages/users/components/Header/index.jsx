import React, { useState } from 'react'
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

  const regex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/

  const location = useLocation()
  const [error, setError] = useState({status:false, fields: []})
  const [errorMessage, setErrorMessage] = useState('incorrect')
  const [isLogin, setIsLogin] = useState(false)
  const [credentials, setcredentials] = useState(initialCredentials)
  const [isSignup, setIsSignup] = useState(false)

  console.log(credentials)

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
    if(email || password || (isSignup? username || confirmPassword : false)){
        setError({...error, all: true})
        setErrorMessage("Fill requered fields.")
        return
      }
      if(!regex.test(email)){
        setError({...error, email: true})
        setErrorMessage("Invalid Email.")
        return
      }
      if(password !== confirmPassword){
        setError({...error, password: true})
        setErrorMessage("passwords does not match.")
      }
  }
  
  const validateRegistration = () => {

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