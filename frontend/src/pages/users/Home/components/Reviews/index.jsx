import React from 'react'
import "./style.css"
import UserReview from '../../../components/UserReview'
const Reviews = () => {
  return (
    

    <div class="flex column center reviews-container white user-container">
      <h1>Let Our Customers Speak for Us</h1>
      <div class="flex  reviews-wrapper">
        <UserReview
        // key={}
        // userName={}
        // profileImage={} 
        // rating={}
        // reviewText={} 
        // stationName={}
        />
        <UserReview/>
        <UserReview/>
        <UserReview/>
        <UserReview/>
        <UserReview/>
      </div>
    </div>
  )
}

export default Reviews