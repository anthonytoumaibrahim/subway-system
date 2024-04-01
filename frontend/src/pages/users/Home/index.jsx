import React from 'react'
import "./style.css"
import Hero from './components/Hero'
import Features from './components/Features'
import UserMap from './components/Map'
import Guidline from './components/Guidlines'


const Home = () => {

  return (
    <div>
      <Hero/>
      <Features/>
      <div className='separator-div'></div>
      <UserMap/>
      <Guidline/>

    </div>
  )
}

export default Home