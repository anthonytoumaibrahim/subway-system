import React from 'react'
import Button from '../../../../components/Button'

const UserRide = ({ station, stationImage, destination, departureDate, arrivalDate, handleAddReviewClick }) => {
  return (
    <div className='flex center ride-wrapper space-between  bg-dark-gray-col'> 
        <img className='station-image' height={70} width={170} src={stationImage} alt="station Image" />
      
          <div className='ride-info'>
            <p>{`From: ${station}`}</p>
            <p>{`To: ${destination}`}</p>
          </div>
          <div className='ride-info'>
            <p>{`Departure: ${departureDate}`}</p>
            <p>{`Arrival: ${arrivalDate}`}</p>
          </div>
          <div>
            <Button
            name={"Add Review"}
            handleClick={handleAddReviewClick}
            />
          </div>
     
      </div>
  )
}

export default UserRide