import React from 'react'
import Button from '../../../../components/Button'
const StationRide = ({destination, departureDate, arrivalDate, price, isPass,}) => {
  return (
    <div className='flex space-between center bg-dark-gray-col ride-wrapper'>

      <p>{`Destination: ${destination}`}</p>

      <div>
        <p>{`${departureDate}`}</p>
        <p>{`${arrivalDate}`}</p>
      </div>

      <div>
        <p>{`Rides: ${isPass ? 5 : 1}`}</p>
        <p>{`Price: ${isPass ? price * 4 : price}`}</p>
      </div>

      <div className='purchase-btn-wrapper'>
        <Button
        className="purchase-btn"
        name={"Purchase"}
        />
      </div>

    </div>
  )
}

export default StationRide