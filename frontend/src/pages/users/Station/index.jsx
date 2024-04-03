import React, { useState, useEffect } from 'react'
import "./style.css"
import StationRide from "../components/StationRide"
import { sendRequest } from '../../../core/tools/remote/request'
import { useParams } from 'react-router-dom'
import stationImage from "../../../assets/images/home/stationImage.png"
import { requestMethods } from '../../../core/enums/requestMethods'
const Station = () => {
  const [rides, setRides] = useState([])
  const [stationName, setStationName] = useState([])
  const [isPass, setIsPass] = useState(false)
  let {id} = useParams()

  useEffect(()=>{
    sendRequest(requestMethods.GET, `/station-rides?id=${id}`)
    .then((response)=>{
      setRides(response.data.stationRides)
      setStationName(response.data.station)
    })
  },[])

  return (
    <div className=' flex column single-station-container user-container'>
      <div className='station-info' >
        <h1>{`${stationName}`}</h1>
        <img className='single-station-image' src={stationImage} alt="" />
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
        {rides.map((ride)=>(
          <StationRide
          destination={ride.arrival_station.name} 
          departureDate={ride.departure_date} 
          arrivalDate={ride.arrival_date} 
          price={ride.price}
          isPass={isPass}/>
        ))}
      </div>
    </div>
  )
}

export default Station