import React from 'react'
import "./style.css"

import star from "../../../../assets/icons/home/star.svg"

import avatar from "../../../../assets/icons/admin-icons/subway.svg"

const UserReview = ({ userName, profileImage, rating, reviewText, stationName }) => {
  return (
    <div className="review-card-holder">
      <div className="flex column review-card bg-dark-gray-col">

        <div className="flex space-between">
          <div className="flex align-center user-info">
            <img className="profile" src={profileImage ?? avatar} alt="profile"/>
            <p>{userName}</p>
          </div>
          <div className='flex column align-end'>
            <div className="flex align-center rating-wrapper-reviews" >
              <p className="flex avg-rating">{rating}</p>
              <img src={star} height={21} alt="star" />
            </div>
            <p className="review-station primary-color">{stationName}</p>
          </div>
        </div>

        <p className='review-text'>{reviewText}</p>

      </div>
    </div>
  )
}

export default UserReview