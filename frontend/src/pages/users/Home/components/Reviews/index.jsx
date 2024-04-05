import React, { useEffect, useState } from 'react'
import "./style.css"

import { sendRequest } from '../../../../../core/tools/remote/request'

import UserReview from '../../../components/UserReview'
import { requestMethods } from '../../../../../core/enums/requestMethods'
const Reviews = () => {
  const [reviews, setReviews] = useState([])
  console.log(reviews)
  useEffect(()=>{
    sendRequest(requestMethods.GET, "/get-reviews?limit=6", )
    .then((response)=>{
      if(response.data.status === "success"){
        setReviews(response.data.reviews)
      }
    })
  },[])

  return (

    <div className="flex column center reviews-container white user-container">
      <h1>Let Our Customers Speak for Us</h1>
      <div className="flex  reviews-wrapper">
      {reviews && reviews.map((review)=>(
        <UserReview
        key={review.id}
        userName={review.user.username}
        profileImage={review.user.image_url} 
        rating={review.rating}
        reviewText={review.text} 
        stationName={review.ride.departure_station.name}
        />
      ))}

      </div>
    </div>
  )
}

export default Reviews