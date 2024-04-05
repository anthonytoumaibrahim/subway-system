import React, { useState, useEffect } from 'react'
import "./style.css"
import { toast } from 'react-toastify'

import Button from '../../../components/Button'
import UserRide from '../components/UserRide'

import { sendRequest } from '../../../core/tools/remote/request'
import { requestMethods } from '../../../core/enums/requestMethods'


const MyRides = () => {
  const [rideId, setRideId] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const [userRides, setUserRides] = useState([])
  const [rating, setRating] = useState(0)
  const [text, setText] = useState("")


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

  const handleConfirmClick = () => {
    
    if ( !text  || rating < 1){
      toast.error("Please Fill All Fields")
    }else{
      setIsOpen(false)
      if(rating > 5 ) {
        setRating(5)
      }else{
        setRating(rating)
      }
      sendRequest(requestMethods.POST, "/add-review", {
        ride_id: rideId,
        rating: rating,
        text: text,
      }).then((response) => {
        if(response.data.status === "success"){
          toast.success("You review was added successfuly")

        }
      }).catch((error)=>{
        toast.error("Somthing went wrong!")
      })
    }
  } 


  return (
    <div className='flex column center my-rides-container user-container'>
      <h1>My Rides</h1>
      {isOpen && <div className='flex center review-popup-container '>
        <div className='flex column bg-dark-gray-col review-popup-wrapper'>
          
          <input 
          className='bg-gray-col white' 
          type="number"
          value={rating} 
          min={1} 
          max={5} 
          step={0.1} 
          placeholder='Rating' 
          onChange={(e) => setRating(e.target.value)}
          />

          <textarea 
          className='bg-gray-col white' 
          placeholder='Your Review' 
          onChange={(e) => setText(e.target.value)}
          />

          <div className='flex space-between'>
            <Button 
            name={"Confirm"}
            handleClick={handleConfirmClick}

            />

            <Button 
            name={"Cancel"}
            handleClick={handleCancelClick}
            />
          </div>

        </div>
      </div>}

      {userRides && userRides.map((ride, i)=>(
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