import React, { useState, useEffect } from 'react'
import "./style.css"

import Button from '../../../components/Button'
import UserRide from '../components/UserRide'
import stationImage from "../../../assets/images/home/stationImage.png"

import { sendRequest } from '../../../core/tools/remote/request'
import { requestMethods } from '../../../core/enums/requestMethods'



const MyRides = () => {
  const [rideId, setRideId] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const [userRides, setUserRides] = useState([])

  useEffect(() => {
    sendRequest(requestMethods.GET, "/user-rides")
    .then((response)=> {
      if(response.data.status === "success")
      setUserRides(response.data.rides)
    })
  }, [])

  const handleCancelClick = () => {
    setIsOpen(false)
  }
  const handleAddReviewClick = (id) => {
    setIsOpen(true)
    setRideId(id)
  }

  console .log(userRides)


  return (
    <div className='flex column center my-rides-container user-container'>
      <h1>My Rides</h1>
      {isOpen && <div className='flex center review-popup-container '>
        <div className='flex column bg-dark-gray-col review-popup-wrapper'>
          
          <input className='bg-gray-col white' type="number" min={1} max={5} step={0.1} placeholder='Rating' />
          <textarea className='bg-gray-col white' placeholder='Your Review' />

          <div className='flex space-between'>
            <Button 
            name={"Confirm"}
            
            />

            <Button 
            name={"Cancel"}
            handleClick={handleCancelClick}
            />
          </div>

        </div>
      </div>}

      {userRides && userRides.map((ride)=>(
        <UserRide
        key={ride.id}
        station={ride.departure_station.name}
        stationImage={ride.departure_station.image}
        destination={ride.arrival_station.name}
        departureDate={ride.departure_date}
        arrivalDate={ride.arrival_date}
        handleAddReviewClick={()=>handleAddReviewClick(ride.id)}
        />
      ))}

    </div>
  )
}

export default MyRides