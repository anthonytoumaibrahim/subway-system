import React from 'react'
import { useState } from 'react'
import "./style.css"

import Button from '../../../components/Button'
import stationImage from "../../../assets/images/home/stationImage.png"
const Station = () => {
  const [isPass, setIsPass] = useState(false)

  return (
    <div className=' flex column single-station-container user-container'>
      <div className='station-info' >
        <h1>Hazmiye station</h1>
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
        <div className='flex space-between center bg-dark-gray-col ride-wrapper'>

          <p>destination</p>

          <div>
            <p>departure date</p>
            <p>arrival date</p>
          </div>

          <div>
            <p>rides</p>
            <p>price</p>
          </div>

          <div className='purchase-btn-wrapper'>
            <Button
            className="purchase-btn"
            name={"Purchase"}
            />
          </div>

        </div>

        <div className='flex space-between center bg-dark-gray-col ride-wrapper'>

          <p>destination</p>

          <div>
            <p>departure date</p>
            <p>arrival date</p>
          </div>

          <div>
            <p>rides</p>
            <p>price</p>
          </div>

          <div className='purchase-btn-wrapper'>
            <Button
            className="purchase-btn"
            name={"Purchase"}
            />
          </div>

        </div>

        <div className='flex space-between center bg-dark-gray-col ride-wrapper'>

          <p>destination</p>

          <div>
            <p>departure date</p>
            <p>arrival date</p>
          </div>

          <div>
            <p>rides</p>
            <p>price</p>
          </div>

          <div className='purchase-btn-wrapper'>
            <Button
            className="purchase-btn"
            name={"Purchase"}
            />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Station