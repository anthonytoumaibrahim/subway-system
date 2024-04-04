import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import "./style.css"

import StationRide from "../components/StationRide"

import { sendRequest } from '../../../core/tools/remote/request'
import { requestMethods } from '../../../core/enums/requestMethods'
import { toast } from 'react-toastify'


const Station = () => {
  const [rides, setRides] = useState([])
  const [stationInfo, setStationInfo] = useState({
    name: "",
    image: ""
  })
  const [isPass, setIsPass] = useState(false)
  let {id} = useParams()

  useEffect(()=>{
    sendRequest(requestMethods.GET, `/station-rides?id=${id}`)
    .then((response)=>{
      setRides(response.data.stationRides)
      setStationInfo({...response.data.station})
    })
  },[])

  const handleBooking = (rideId) => {
    sendRequest(requestMethods.POST, "/book-ride", {
      ride_id: rideId,
      is_pass: isPass
    })
    .then((response) => {
      if(response.data.status === "success"){
        toast.success("Purchase successful.")
      }
    }).catch((error) => {
      toast.error("Insufficient Balance")
    })
  }

  return (
    <div className=' flex column single-station-container user-container'>
      <div className='station-info' >
        <h1>{`${stationInfo.name}`}</h1>
        <img  className='single-station-image' src={stationInfo.image} alt="Station Image" />
      </div>

      <div>
        <div className='ticket-type-switch'>
          <button
            className={`tickets-btn ticket-type-btn ${ isPass?"bg-dark-gray-col" : "bg-primary"} white font-bold`}
            onClick={()=> setIsPass(false)}
          >Ticket</button>

          <button
          className={`pass-btn ticket-type-btn ${ isPass? "bg-primary" : "bg-dark-gray-col"} white font-bold`}
          onClick={()=> setIsPass(true)}
          >Pass</button>
        </div>
      </div>

      <div className='flex column rides-wrapper'>
        {rides.length === 0 && <p>No Rides Availble</p>}
        {rides.map((ride)=>(
          <StationRide
          key={ride.id}
          destination={ride.arrival_station.name} 
          departureDate={`Dep: ${ride.departure_date}`} 
          arrivalDate={`Arr: ${ride.arrival_date}`} 
          price={ride.price}
          isPass={isPass}
          handleBooking={() => handleBooking(ride.id)}
          />
          
        ))}
      </div>
    </div>
  )
}

export default Station