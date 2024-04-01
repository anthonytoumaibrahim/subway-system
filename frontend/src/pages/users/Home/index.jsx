import React from 'react'
import "./style.css"
import Hero from './components/Hero'
import Features from './components/Features'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Features/>
      <div className='separator-div'></div>
    </div>
  )
}

export default Home