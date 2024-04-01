import React, { useState} from 'react'
import "./style.css"

const Header = () => {
  const [image, setImage] = useState("")
  return (
    <div className='flex align-center space-between header bg-dark-gray-col'>
      <h1 className='logo font-bold white'>Metro<span className='logo text-primary'>Hub</span></h1>
      <nav className='flex header-nav'>
        <a href="#">Home</a>
        <a href="#">My Rides</a>
        <a href="#">Coins</a>
        <a href="#">Chat</a>
      </nav>
      <div className='flex bold register-btns'>
        <button className='reg-btn bg-primary font-bold white'>Login</button>
        <button className='reg-btn signup-btn text-primary font-bold'>Signup</button>
      </div>
    </div>
  )
}

export default Header