import React from 'react'
import "./style.css"
import ProfileImage from '../../../../assets/images/header/profileImage.jpg'
import star from "../../../../assets/icons/home/star.svg"       

const UserReview = ({ userName, profileImage, rating, reviewText, stationName }) => {
  return (
    <div class="review-card-holder">
      <div class="flex column review-card bg-dark-gray-col">

        <div class="flex space-between">
          <div class="flex align-center user-info">
            <img class="profile" src={ProfileImage} alt="profile"/>
            <p>username</p>
          </div>
          <div>
            <div class="flex rating-wrapper-reviews" >
              <p class="flex avg-rating"> 4.5</p>
              <img src={star} height={21} alt="star" />
            </div>
            <p class="review-flight primary-color">New York</p>
          </div>
        </div>

        
        <p>Smooth booking process, efficient check-in, and pleasant flight experience. Would fly again.</p>

      </div>
    </div>
  )
}

export default UserReview