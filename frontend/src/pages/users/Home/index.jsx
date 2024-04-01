import React from 'react'
import "./style.css"
import Hero from './components/Hero'
import Features from './components/Features'
import UserMap from './components/Map'


const Home = () => {

  return (
    <div>
      <Hero/>
      <Features/>
      <div className='separator-div'></div>
      <UserMap/>

    </div>
  )
}

export default Home