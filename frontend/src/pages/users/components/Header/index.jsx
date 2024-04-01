import React, { useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import Login from '../Login'
import Signup from '../Signup'
import "./style.css"

const Header = () => {
  

  return (
    <div className='flex align-center space-between header bg-dark-gray-col'>
      <Signup
      error={error}

      />
      <Login
      
      />
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
        <button className='reg-btn bg-primary font-bold white' onClick={handlerRegistration}>Login</button>
        <button className='reg-btn signup-btn text-primary font-bold' onClick={handlerRegistration}>Signup</button>
      </div>
    </div>
  )
}

export default Header