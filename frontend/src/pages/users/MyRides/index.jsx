import React, { startTransition } from 'react'
import Button from '../../../components/Button'
import "./style.css"
import stationImage from "../../../assets/images/home/stationImage.png"


const MyRides = () => {
  return (
    <div className='flex column center my-rides-container user-container'>
      <h1>My Rides</h1>
      <div className='flex center ride-wrapper space-between  bg-dark-gray-col'> 
        <img className='station-image' height={70} src={stationImage} alt="station Image" />
      
          <div className='ride-info'>
            <p>station</p>
            <p>destination</p>
          </div>
          <div className='ride-info'>
            <p>departuredate</p>
            <p>arrival date</p>
          </div>
          <div>
            <Button
            name={"review"}
            />
          </div>
     
      </div>
      <div className='flex center ride-wrapper space-between  bg-dark-gray-col'> 
        <img className='station-image' height={70} src={stationImage} alt="station Image" />
      
          <div className='ride-info'>
            <p>station</p>
            <p>destination</p>
          </div>
          <div className='ride-info'>
            <p>departuredate</p>
            <p>arrival date</p>
          </div>
          <div>
            <Button
            name={"review"}
            />
          </div>
     
      </div>
    </div>
  )
}

export default MyRides