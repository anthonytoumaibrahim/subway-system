import React from 'react'
import "./style.css"
import youtube from "../../../../assets/icons/footer/youtube.svg"
import insta from "../../../../assets/icons/footer/insta.svg"
import facebook from "../../../../assets/icons/footer/facebook.svg"
import twitter from "../../../../assets/icons/footer/twitter.svg"

const Footer = () => {
  return (
    <div className='flex space-between user-container footer-container bg-dark-gray-col'>
      <div className='flex column logo-copy-rights'>
        <h1>Metro<span className='text-primary'>Hub</span></h1>
        <p>copyright©2024 </p>
      </div>
      <div className='flex center column'>
        <h1>Follow US</h1>
        <div className='flex brands-wrapper'>
          <img src={youtube} alt="youtube" />
          <img src={insta} alt="insta" />
          <img src={facebook} alt="facebook" />
          <img src={twitter} alt="twitter" />
        </div>
      </div>
    </div>
  )
}

export default Footer